const { Schema, model } = require("mongoose");

const skillsSchema = new Schema({
    technical_skills: [{
        type: String,
        required: true
    }],
    languages: [{
        type: String,
        required: false
    }],
    soft_skills: [{
        type: String,
        required: false
    }],
    interests: [{
        type: String,
        required: false
    }],

	owner: {
		type: Schema.Types.ObjectId,
		ref: "Profile"
	}
});

const Skills = model("Skills", skillsSchema);

module.exports = Skills;