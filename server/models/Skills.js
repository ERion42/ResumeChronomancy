const { Schema, model } = require("mongoose");

const skillsSchema = new Schema({
	technicalSkill: {
        type: String,

    },
    language: {
        type: String,

    },
    softSkill: {
        type: String,

    },
    interest: {
        type: String,

    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

const Skills = model("Skills", skillsSchema);

module.exports = Skills;