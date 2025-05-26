import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";
import register from "./register.js";
import curriculum from "./curriculum.js";
const route = express()
import LocalStrategy from "passport-local"
import session from "express-session"

route.use(express.urlencoded({extended: true}))
route.use(express.json())

route.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))
route.use(passport.initialize())
route.use(passport.session())

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, async (email, password, done) => {
    try {
      const user = await register.findOne({ email: email });
      if (!user) return done(null, false);
      if (user.password != password) return done(null, false);
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }));
passport.serializeUser((user, done) => {
    done(null, user.id)
})
passport.deserializeUser(async (id, done) => {
  try {
    const user = await register.findById(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})
mongoose.connect("mongodb://127.0.0.1:27017/CvMaker")
.then(() => console.log("database is connected"))
.catch((err) => console.log(err))

route.use(cors())

route.use(express.static("public"))
route.use(express.json())

route.get("/", (req,res) => {
    curriculum.find()
    .then((data) => res.json(data))
})
route.post("/curriculum", (req, res) => {
    const newCurriculum = new curriculum(
        req.body
    )
    newCurriculum.save()
    .then((curriculum) => res.json(curriculum))
    .catch((err) => res.json(err, "Something went wrong"))
})
route.post('/register', (req,res)=>{
    if(req.body.username == "" || req.body.email == "" || req.body.password == "" || req.body.password2 == ""){
        return res.json("Please fill all the fields")
    }
    else if(req.body.password != req.body.password2){
        return res.json("Passwords do not match")
    }
    else if(req.body.password.lenght < 6){
        return res.json("Password must be at least 6 characters long")
    }
    register.find({email: req.body.email})
    .then((data) => {
        if(data.length > 0){
            return res.json("User already exists")
        }else{
            const Register = new register(
                req.body
            )
            Register.save()
            .then((register) => res.json(register))
            .catch((err) => res.json(err, "Something went wrong"))
        }
    })
})

route.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      req.session.user = user;
      return res.json(user);
    });
  })(req, res, next);
});

  route.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
      res.json(req.session.user);
    } else {
      res.json('Not authenticated');
    }
  });
route.get('logout', (req, res) => {
    req.logout()
    res.redirect('/')
})


route.listen(3001, () => console.log("server is running on port 3001"))