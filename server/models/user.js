const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    password: String,
    type: String
});

module.exports = mongoose.model('user', userSchema, 'users');