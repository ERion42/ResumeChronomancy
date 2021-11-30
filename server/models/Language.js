const { Schema, model } = require("mongoose");

const languageSchema = new Schema({
	language: {
		type: String,
		required: false
	},
	owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

const Language = model("Language", languageSchema);
module.exports = Language;
