const { Schema, model } = require("mongoose");

const softSkillsSchema = new Schema({
	softSkills: {
		type: String,
		required: true
	}
});

const SoftSkills = model("SoftSkills", softSkillsSchema);
module.exports = SoftSkills;