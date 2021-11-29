const { Schema, model } = require("mongoose");

const softSkillsSchema = new Schema({
	softSkills: {
		type: String,
		required: true
	},
	owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

const SoftSkills = model("SoftSkills", softSkillsSchema);
module.exports = SoftSkills;