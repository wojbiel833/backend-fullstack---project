const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, minlength: 10 },
  content: { type: String, minlength: 20 },
  email: { type: String },
  localization: { type: String },
  publicationDate: { type: String },
  status: { type: String },
  phone: { type: String },
  actualisationDate: { type: String },
});

module.exports = mongoose.model('Post', postSchema);
