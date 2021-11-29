const { Schema, model } = require("mongoose");

const interestsSchema = new Schema({
	interests: {
		type: String,
		required: false
	},
	owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }	
});

const Interests = model("Interests", interestsSchema);
module.exports = Interests;