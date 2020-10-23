const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');


module.exports = app => {
  //1 time stripe pay
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    req.user.credits += 5;
    req.user.plan = 1;
    const user = await req.user.save();

    res.send(user);
  });
  ///monthly stripe pay
  //personal plan
  app.post('/api/stripe/2', requireLogin, async (req, res) => {
    const products = await stripe.products.retreive('prod_IFfv4smjhO66ub');
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: products.description,
      source: req.body.id
    });
    console.log(charge)
    req.user.plan = 2;
    const user = await req.user.save();

    res.send(user);
  });

  //business plan
  app.post('/api/stripe/3', requireLogin, async (req, res) => {
    const products = await stripe.products.retrieve('prod_IFfxGujgp9e9Pd');
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: products.description,
      source: req.body.id
    });
    req.user.plan = 3;
    const user = await req.user.save();

    res.send(user);
  });
};