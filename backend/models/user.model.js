const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
  googleId: { type: String },
  facebookId: { type: String },
});

module.exports = mongoose.model('User', userSchema);
