const { Schema, model } = require("mongoose");
const { technicalSkillsSchema } = require('./TechnicalSkills');
const { languagesSchema } = require('./Languages');
const { softSkillsSchema } = require('./SoftSkills');
const { interestsSchema } = require('./Interests');

const skillsSchema = new Schema({
    technicalSkills: {
        type: String,
        required: true,
    },
    languages: {
        type: String,
        required: false,
    },
    softSkills: {
        type: String,
        required: false,
    },
    interests: {
        type: String,
        required: false,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

const Skills = model("Skills", skillsSchema);

module.exports = Skills;