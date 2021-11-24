const { Schema, model } = require("mongoose");

const skillsSchema = new Schema({
    technical_skills: {
        type: String,
        required: true,
        trim: true
    },
    languages: {
        type: String,
        required: false,
        trim: true
    },
    soft_skills: {
        type: String,
        required: false,
        trim: true
    },
    interests: {
        type: Date,
        required: false,
        trim: true
    },
});

const Skills = model("Skills", skillsSchema);

module.exports = Skills;