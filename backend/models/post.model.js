const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  content: { type: String, required: true },
  email: { type: String, required: true },
  localization: { type: String, required: true },
  publicationDate: { type: String, required: true },
  status: { type: String, required: true },
  phone: { type: String },
  actualisationDate: { type: Number },
  location: { type: String },
});

module.exports = mongoose.model('Post', postSchema);

// const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema({
//   author: { type: String, required: true },
//   created: { type: Date, required: true },
//   updated: { type: Date, required: true },
//   status: { type: String, required: true },
//   title: { type: String, required: true },
//   text: { type: String, required: true },
//   photo: { type: String },
//   price: { type: Number },
//   phone: { type: String },
//   location: { type: String },
// });

// module.exports = mongoose.model('Post', postSchema);
