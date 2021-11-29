const { Schema, model } = require("mongoose");
const { technicalSkillsSchema } = require('./TechnicalSkills');
const { languagesSchema } = require('./Languages');
const { softSkillsSchema } = require('./SoftSkills');
const { interestsSchema } = require('./Interests');

const skillsSchema = new Schema({
    technicalSkills: {
        type: [ technicalSkillsSchema ]
    },
    languages: {
        type: [ languagesSchema ]

    },
    softSkills: {
        type: [ softSkillsSchema ]

    },
    interests: {
        type: [ interestsSchema ]

    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

const Skills = model("Skills", skillsSchema);

module.exports = Skills;