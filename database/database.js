const Promise = require('bluebird');
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URL;

Promise.promisifyAll(mongoose);

mongoose.connect(uri, {
    useNewUrlParser: true,
}, (e) => {
    console.log(e);
})
