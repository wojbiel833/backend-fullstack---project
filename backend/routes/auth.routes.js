const express = require('express');
const passport = require('passport');
const router = express.Router();

// GOOGLE routes
router.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login/failure' }),
  (req, res) => {
    res.redirect('http://localhost:3000/login/success');
  }
);

// FACEBOOK routes
router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['email', 'profile'] })
);

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login/failure',
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/login/success');
  }
);
module.exports = router;
