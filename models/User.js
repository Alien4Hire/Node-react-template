const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  facebookID: String,
  twitterID: String,
  email: { type: String, require: true },
  password: { type: String },
  date: { type: Date, default: Date.now },
  credits: { type: Number, default: 0 },
  plan: { type: Number, default: 1 }
});

mongoose.model('users', userSchema);