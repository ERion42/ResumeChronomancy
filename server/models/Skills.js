const { Schema, model } = require("mongoose");

const skillsSchema = new Schema({
    technicalSkills: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    softSkills: {
        type: String,
        required: false,
    },
    interests: {
        type: Date,
        required: false,
    },
});

const Skills = model("Skills", skillsSchema);

module.exports = Skills;