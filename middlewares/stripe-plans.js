const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);


//express middleware
async function getAllPlans(req, res, next){

    //get all plans, expand keyword will also return the contents of the product this plan is attached to
    const plans = await stripe.plans.list({expand: ["data.product"]});
    res.json(plans);
}


//see it in action
const req = {}; // req not used
const res = {
    json : function(payload){
        console.log("All Stripe Plans:")
        for(let plan of payload.data){
            console.log(`Plan ${plan.id}, Name: ${plan.product.name}, Amount: ${plan.amount/100}/${plan.interval}`)
        }
        console.log("payload:", payload);
}
};
const next = function(){};
await getAllPlans(req, res, next)