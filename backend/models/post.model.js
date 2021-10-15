const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true, minlength: 10 },
  content: { type: String, required: true, minlength: 20 },
  email: { type: String, required: true },
  localization: { type: String, required: true, minlength: 3 },
  publicationDate: { type: String, required: true },
  status: { type: String, required: true },
  phone: { type: String },
  actualisationDate: { type: Number },
});

module.exports = mongoose.model('Post', postSchema);
