const express = require("express")
const { userModel } = require("../Models/User.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const profileRoute = express.Router()
profileRoute.get("/getProfile", async (req, res) => {
    let { userID } = req.body;
    let userexist = await userModel.findOne({ userID });
   // console.log(userexist)
    res.send({data:{name:userexist.name,email:userexist.email}})
})

module.exports = {profileRoute}