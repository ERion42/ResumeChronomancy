const { Schema, model } = require("mongoose");

const technicalSkillsSchema = new Schema({
	technicalSkills: {
			type: String,
			required: true
	}
})

const TechnicalSkills = model("TechnicalSkills", technicalSkillsSchema);
module.exports = TechnicalSkills;