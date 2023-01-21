const express = require("express")
const { calculateModel } = require("../Models/User.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const calcRoute = express.Router()
calcRoute.post("/calculate", async (req, res) => {
    let { Total_Number_of_Years, Annual_Interest_Rate, Annual_Instalment_Amount } = req.body;
    let n = Total_Number_of_Years 
    let i = Annual_Interest_Rate / 100
    let p = Annual_Instalment_Amount;
    var f = p * ((((i + 1) ** n) - 1) / i)
    var total_inv_amount = p * n;
    var ig = f - total_inv_amount;
    res.send({f:Math.round(f),inv:Math.round(total_inv_amount),ig:Math.round(ig)})
})

module.exports = {calcRoute}