import mongoose from "mongoose";
const Schema = mongoose.Schema

const registerSchema = new Schema({
    username: String,
    email: String,
    password: String,
    date: {type: Date, default: Date.now}
})

export default mongoose.model("register", registerSchema)