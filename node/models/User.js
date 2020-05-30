const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    login: { type: String, required: true },
    password: { type: String, required: true },
    movies: [String]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);