const { Schema, model } = require("mongoose");

const languagesSchema = new Schema({
	languages: {
		type: String,
		required: false
	}
});

const Languages = model("Languages", languagesSchema);
module.exports = Languages;
