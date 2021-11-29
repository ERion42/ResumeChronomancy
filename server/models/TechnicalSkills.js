const { Schema, model } = require("mongoose");

const technicalSkillsSchema = new Schema({
	technicalSkills: {
			type: String,
			required: true
	},
	owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
})

const TechnicalSkills = model("TechnicalSkills", technicalSkillsSchema);
module.exports = TechnicalSkills;