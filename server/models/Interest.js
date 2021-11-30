const { Schema, model } = require("mongoose");

const interestSchema = new Schema({
	interest: {
		type: String,
		required: false
	},
	owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }	
});

const Interest = model("Interest", interestSchema);
module.exports = Interest;