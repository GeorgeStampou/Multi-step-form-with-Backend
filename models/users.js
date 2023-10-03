const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String
    },
    repeatPass: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String,
        trim: true
    },
    zipCode: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    newsletter: {
        type: Boolean,
        default: false
    },
    terms: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("User", UserSchema);