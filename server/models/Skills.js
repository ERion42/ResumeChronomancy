const { Schema, model } = require("mongoose");

const skillsSchema = new Schema({
	technicalSkills: {
        type: String,

    },
    languages: {
        type: String,

    },
    softSkills: {
        type: String,

    },
    interests: {
        type: String,

    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

const Skills = model("Skills", skillsSchema);

module.exports = Skills;