const express = require('express');
const router = express.Router();
const shortid = require('shortid');

const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post.find({ status: 'Opublikowane' });
    // .select(
    //   'id name content email phone localization publicationDate actualisationDate status'
    // )
    // .sort({ created: -1 });
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post.findById(req.params.id);
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/post/add', async (req, res) => {
  try {
    const id = shortid.generate();
    const {
      name,
      content,
      email,
      phone,
      localization,
      publicationDate,
      actualisationDate,
      status,
    } = req.body;

    const newPost = new Post({
      id: id,
      name: name,
      content: content,
      email: email,
      phone: phone,
      localization: localization,
      publicationDate: publicationDate,
      actualisationDate: actualisationDate,
      status: status,
    });

    await newPost.save();
    res.json({ message: 'OK', post: newPost });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
