  
const passport = require('passport');

module.exports = app => {
  //google
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      res.redirect('/');
    }
  );

  //facebook
  app.get('/auth/facebook',
    passport.authenticate('facebook', { scope : ['email'] })
  );

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });
 
  //twitter
  app.get('/auth/twitter',
  passport.authenticate('twitter', { scope : ['email'] }, { failureRedirect: '/auth/error' })
  );

app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  //other
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/register');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};