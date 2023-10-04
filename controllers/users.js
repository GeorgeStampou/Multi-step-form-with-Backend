const Users = require("../models/users");
const {createCustomError} = require("../errors/custom-error");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const createUser = async (req, res) =>{
    try {
        const salt = await bcrypt.genSalt();
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const user = await Users.create(req.body);
        res.status(201).json({user});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

module.exports = {getAllUsers, createUser};