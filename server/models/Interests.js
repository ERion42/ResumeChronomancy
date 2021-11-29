const { Schema, model } = require("mongoose");

const interestsSchema = new Schema({
	interests: {
		type: String,
		required: false
	}	
});

const Interests = model("Interests", interestsSchema);
module.exports = Interests;