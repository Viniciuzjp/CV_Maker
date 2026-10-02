import mongoose from "mongoose";
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    id: Number,
    title: String,
    date: String,
    description: String,
}, { _id: false })

const projectSchema = new Schema({
    id: Number,
    text: String,
}, { _id: false })

const curriculumSchema = new Schema({
    about: String,
    name: String,
    address: String,
    email: String,
    telephone: String,
    linkedin: String,
    github: String,
    objective: String,
    experiences: [experienceSchema],
    education: String,
    skills: String,
    languages: String,
    projects: [projectSchema],
    color1: String,
    background: String,
    colorText: String,
    fontFamily: String,
    fontSize: String,
    data: {type: Date, default: Date.now}
})

export default mongoose.model("curriculum", curriculumSchema)