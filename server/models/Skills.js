const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");
const { technicalSkillSchema } = require('./TechnicalSkill');
const { languageSchema } = require('./Language');
const { softSkillSchema } = require('./SoftSkill');
const { interestSchema } = require('./Interest');

const skillsSchema = new Schema({
    technicalSkills: [{type: mongoose.Types.ObjectId, ref: 'TechnicalSkill' }],
    
    languages: [{type: mongoose.Types.ObjectId, ref: 'Language' }],

    softSkills: [{type: mongoose.Types.ObjectId, ref: 'SoftSkill'}],

    interests: [{type: mongoose.Types.ObjectId, ref: 'Interest'}],

    owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

const Skills = model("Skills", skillsSchema);

module.exports = Skills;