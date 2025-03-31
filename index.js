const express = require("express");
const route = express();
const cors = require("cors");
const mongoose = require("mongoose");
const curriculum = require("./curriculum");

const Mongoose = mongoose.connect("mongodb://127.0.0.1:27017/CvMaker")
.then(() => console.log("database is connected"))
.catch((err) => console.log(err))

route.use(cors())

route.use(express.static("public"))
route.use(express.json())

route.get("/", (req,res) => {
    res.send("hello world")
})
route.post("/curriculum", (req, res) => {
    const newCurriculum = new curriculum(
        req.body
    )
    newCurriculum.save()
    .then((curriculum) => res.json(curriculum))
    .catch((err) => res.json(err, "Something went wrong"))
})

route.listen(3001, () => console.log("server is running on port 3001"))