const config         = require('./config.json');
const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User           = require('./models/User');

passport.use(new GoogleStrategy(
  {
    clientID:     config.OAuth.google.clientID,
    clientSecret: config.OAuth.google.clientSecret,
    callbackURL:  config.OAuth.google.callbackURL,
  },
  async function(accessToken, refreshToken, profile, done) {
    const user = await User.findOne({ googleID: profile.id });

    if(user) return done(null, user);

    const newUser = await User.create({
      googleID: profile.id,
      email:    profile.emails[0].value,
    });

    done(null, newUser);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  const user = await User.findById(id);
  done(null, user);
});