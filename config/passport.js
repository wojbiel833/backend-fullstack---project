const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
// User object?
// const User = require('../src/redux/store').initialState.facebookUsers;
// const User = {};

// Google 0Auth2.0
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.clientIDGoogle,
      clientSecret: process.env.clientSecretGoogle,
      callbackURL: process.env.callbackURLGoogle,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      done(null, profile);
    }
  )
);

// Facebook 0Auth 2.0
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.clientIDFb,
      clientSecret: process.env.clientSecretFb,
      callbackURLFb: process.env.callbackURLFb,
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

// serialize user when saving to session
passport.serializeUser((user, serialize) => {
  serialize(null, user);
});

// deserialize user when reading from session
passport.deserializeUser((obj, deserialize) => {
  deserialize(null, obj);
});
