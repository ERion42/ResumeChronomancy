const { Schema, model } = require("mongoose");

const skillsSchema = new Schema({
    technical_skills: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    soft_skills: {
        type: String,
        required: false,
    },
    interests: {
        type: Date,
        required: false,
    },
});

const Skills = model("Experience", skillsSchema);

module.exports = Skills;