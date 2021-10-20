const express = require('express');
const router = express.Router();
const shortid = require('shortid');

const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post.find({ status: 'Opublikowane' })
      .select(
        'id name content email phone localization publicationDate actualisationDate status'
      )
      .sort({ created: -1 });
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  console.log('asw');
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

    let error;
    if (!name || !content || !email || !localization)
      error = 'Musisz wypełnić wymagane pola oznaczone gwiazdką';

    if (name.length <= 10) error = 'Tytuł jest za krótki (min. 10 znaków)';
    if (content.length <= 20) error = 'Tytuł jest za krótki (min. 20 znaków)';
    if (!email.includes('@')) error = 'Zły format adresu e-mail';
    if (localization.length <= 3)
      error = 'Nazwa lokaliozacji jest za krótka (min. 3 znaki)';

    if (!error) {
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
    } else res.json({ message: error });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put('/post/:id/edit', async (req, res) => {
  console.log('aaas');
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

  try {
    console.log(req.params.id, 'aaa');
    const post = await Post.findById(req.params.id);

    let error;
    if (!name || !content || !email || !localization)
      error = 'Musisz wypełnić wymagane pola oznaczone gwiazdką';

    if (name.length <= 10) error = 'Tytuł jest za krótki (min. 10 znaków)';
    if (content.length <= 20) error = 'Tytuł jest za krótki (min. 20 znaków)';
    if (!email.includes('@')) error = 'Zły format adresu e-mail';
    if (localization.length <= 3)
      error = 'Nazwa lokaliozacji jest za krótka (min. 3 znaki)';

    if (!error) {
      if (post) {
        await Post.updateOne(
          { id: req.params.id },
          {
            $set: {
              name: name,
              content: content,
              email: email,
              phone: phone,
              localization: localization,
              publicationDate: publicationDate,
              actualisationDate: actualisationDate,
              status: status,
            },
          }
        );
        res.json(`Post ${post} has been changed!`);
      } else res.status(404).json({ message: 'Not found...' });
    } else res.status(404).json({ message: error });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
