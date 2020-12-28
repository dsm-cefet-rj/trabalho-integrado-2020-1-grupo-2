const config         = require('./config.json');
const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth').Strategy;
const User           = require('./models/User');

passport.use(new GoogleStrategy(
  {
    consumerKey:    config.OAuth.google.clientID,
    consumerSecret: config.OAuth.google.clientSecret,
    callbackURL:    config.OAuth.google.callbackURL,
  },
  async function(accessToken, refreshToken, profile, done) {
    const user = await User.findById(profile.id);

    if(user) return done(null, user);

    user = await User.create({
      googleID: profile.id,
      email:    profile.email,
    });

    done(null, user);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  const user = await User.findById(id);
  done(null, user);
});