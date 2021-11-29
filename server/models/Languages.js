const { Schema, model } = require("mongoose");

const languagesSchema = new Schema({
	languages: {
		type: String,
		required: false
	},
	owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

const Languages = model("Languages", languagesSchema);
module.exports = Languages;
