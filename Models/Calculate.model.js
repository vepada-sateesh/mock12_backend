const mongoose = require("mongoose")

let calculateSchema = mongoose.Schema({
    Annual_Instalment_Amount: { type: Number, required: true },
    Annual_Interest_Rate: { type: Number, require: true },
    Total_Number_of_Years:{type:Number,require:true}
})

const calculateModel = mongoose.model("find", calculateSchema)
module.exports = {calculateModel}