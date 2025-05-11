const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    }
}, { timestamps: true });

const userModel = new mongoose.model('user', schema);
module.exports = userModel;