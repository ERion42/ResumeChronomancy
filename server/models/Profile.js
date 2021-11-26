const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { Skills } = require('./Skills');
const { Education } = require('./Education');
const { Experience } = require('./Experience');

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
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skills' }],
  experiences: [{ type: Schema.Types.ObjectId, ref: 'Experience' }],
  educations: [{ type: Schema.Types.ObjectId, ref: 'Education' }]
});

profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

profileSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema);

module.exports = Profile;