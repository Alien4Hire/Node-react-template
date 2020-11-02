  
const passport = require('passport');
require('passport-oauth2');
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const generator = require('generate-password');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//google
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id, email: profile.emails[0].value });

      if (existingUser) {
        return done(null, existingUser);
      }
      
      const user = await new User({ 
        googleId: profile.id, 
        email: profile.emails[0].value, 
        profilePic: profile.photos[0].value,
        password: generator.generate({length:10, numbers:true}) 
      }).save();
      done(null, user);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.FACEBOOK_APP_ID,
      clientSecret: keys.FACEBOOK_APP_SECRET,
      callbackURL: '/auth/facebook/callback',
      proxy: true,
      profileFields: ['email']
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookId: profile.id });
      // const existingEmail = await User.findOne({ email: profile.email });
      if (existingUser) {
        return done(null, existingUser);
      }
      console.log(profile.id);
      const user = await new User({ 
        facebookId: profile.id, 
        email: profile.emails[0].value, 
        // profilePic: profile.photos[0].value,
        password: generator.generate({length:10, numbers:true}) 
      }).save();
      done(null, user);
    }
  )
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.TWITTER_CONSUMER_KEY,
      consumerSecret: keys.TWITTER_CONSUMER_SECRET,
      callbackURL: '/auth/twitter/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ twitterId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ 
        twitterId: profile.id, 
        email: profile.emails[0].value, 
        // profilePic: profile.photos[0].value,
        password: generator.generate({length:10, numbers:true}) 
      }).save();
      done(null, user);
    }
  )
);

//user register
passport.use(
  new LocalStrategy(
    function (username, password, done) {
      const existingUser = User.findOne({ email: username });
      if (existingUser) {
        return done(null, existingUser);
      }
      console.log(username);
      const user = new User({
        localId: generator.generate({length:10, numbers:true}),
        email: username, 
        password: password 
      }).save();
      done(null, user);
    }
  )
);  

// //tutorial jwt.strategy
// const cookieExtractor = req => {
//   let token = null;
//   if(req && req.cookies){
//     token = req.cookies["access_token"];
//   }
//   return token;
// };
// //authorization
// passport.use(new JwtStrategy({
//   jwtFromRequest: cookieExtractor,
//   secretOrKey: keys.cookieKey
// },(payload,done)=>{
//   User.findById({_id: payload.sub}, (err,user)=>{
//     if(err)
//       return done(err,false);
//     if(user)
//       return done(null,user);
//     else
//       return done(null,false);
//   })
// }));
// //^^