const { Schema, model } = require("mongoose");
const { technicalSkillSchema } = require('./TechnicalSkill');
const { languageSchema } = require('./Language');
const { softSkillSchema } = require('./SoftSkill');
const { interestSchema } = require('./Interest');

const skillsSchema = new Schema({
    technicalSkills: {
        type: [ technicalSkillSchema ]
    },
    languages: {
        type: [ languageSchema ]

    },
    softSkills: {
        type: [ softSkillSchema ]

    },
    interests: {
        type: [ interestSchema ]

    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

const Skills = model("Skills", skillsSchema);

module.exports = Skills;