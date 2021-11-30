const { Schema, model } = require("mongoose");

const technicalSkillSchema = new Schema({
	technicalSkill: {
			type: String,
			required: true
	},
	owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
})

const TechnicalSkill = model("TechnicalSkill", technicalSkillSchema);
module.exports = TechnicalSkill;