const mongoose = require("mongoose");
const {createCustomError} = require("../errors/custom-error");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
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

UserSchema.post("save", (error, doc, next)=>{
    if(error.name === "MongoServerError" && error.code === 11000){
        const key = Object.keys(error.keyPattern);
        next( createCustomError(500, `This ${key} already exists`));
    }
    else {
        next(error);
    }
})

module.exports = mongoose.model("User", UserSchema);