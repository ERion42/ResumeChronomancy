const { Schema, model } = require("mongoose");

const softSkillSchema = new Schema({
	softSkill: {
		type: String,
		required: true
	},
	owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

const SoftSkill = model("SoftSkill", softSkillSchema);
module.exports = SoftSkill;