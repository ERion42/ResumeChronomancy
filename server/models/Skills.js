const { Schema, model } = require("mongoose");

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