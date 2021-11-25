const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const profileSchema = new Schema({

  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  education: [{
    type: Schema.Types.ObjectId,
    ref: "Education"
  }],
  experience: [{
    type: Schema.Types.ObjectId,
    ref: "Experience"
  }],
  skills: [{
    type: Schema.Types.ObjectId,
    ref: "Skills"
  }],
  userInfo: [{
    type: Schema.Types.ObjectId,
    ref: "UserInfo"
  }]
});

profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema);

module.exports = Profile;