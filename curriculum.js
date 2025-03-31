const mongoose = require("mongoose");
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
    education: String,
    skills: String,
    languages: String,
    projects: String,
    data: {type: Date, default: Date.now}
})

module.exports = mongoose.model("curriculum", curriculumSchema)