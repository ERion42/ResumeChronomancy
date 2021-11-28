const { Schema, model } = require('mongoose');

const educationSchema = new Schema({
	school: {
		type: String,
		required: true,
		trim: true
	},

	degree: {
		type: String,
		required: true,
		trim: true,
	},

	major: {
		type: String,
		required: true,
		trim: true,
	},

	gpa: {
		type: Number,
		required: false,
		trim: true,
	},

	graduationDate: {
		type: String,
		required: true,
		trim: true,
	},

	certifications: [
		{
			type: String,
			required: false,
			trim: true,
		}
	],
	
	owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
})

const Education = model('Education', educationSchema);

module.exports = Education;