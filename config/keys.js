if (process.env.NODE_ENV === 'production') {
    //prod keys
    module.exports = require('./prod');
} else {
    //dev keys
    module.exports = require('./dev');
}

//publishable key
//pk_test_51Bt52IGFN31Q4RRj6WMhLN8u7b39slIT5iyPWzh6xfAj1QmTOHnHPUuWoJgXyrT2weOcnoPyCXaSOCWlgbRpuecS00dy1Qenz7
//secret key
//sk_test_51Bt52IGFN31Q4RRjackM1SB2eZ2wBkXqgb6R4QTpHtxCYYwllruWoAS50cU2cu007KB9Nn3tgZDTHAIQbOW5JjZN00QxgcJgoY
//Recurly to setup monthly payments