import mongoose from "mongoose";
const Schema = mongoose.Schema;

const curriculumSchema = new Schema({
    about: String,
    name: String,
    adress: String,
    email: String,
    telephone: String,
    linkedin: String,
    github: String,
    objective: String,
    experience: String,
    experienceDate: String,
    experienceDescription: String,
    experience2: String,
    experienceDate2: String,
    experienceDescription2: String,
    education: String,
    skills: String,
    languages: String,
    projects: String,
    color1: String,
    colorText: String,
    fontFamily: String,
    data: {type: Date, default: Date.now}
})

export default mongoose.model("curriculum", curriculumSchema)