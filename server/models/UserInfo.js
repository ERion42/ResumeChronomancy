const {Schema, model} = require('mongoose');

const userInfoSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	phoneNumber: { 
		type: String,
		required: true,
		trim: true,
		match: [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm, 'Must be a valid phone number.']
	},

	email: {
		type: String,
		required: true,
		unique: true,
		match: [/.+@.+\..+/, 'Must match an email address!'],
	},

	owner: {
		type: Schema.Types.ObjectId,
		ref: "Profile"
	}
});

const UserInfo = model("userInfo", userInfoSchema);

module.exports = UserInfo;