const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true, minlength: 10 },
  content: { type: String, required: true, minlength: 20 },
  email: { type: String },
  localization: { type: String, required: true },
  publicationDate: { type: String },
  status: { type: String },
  phone: { type: String },
  actualisationDate: { type: String },
});

module.exports = mongoose.model('Post', postSchema);
