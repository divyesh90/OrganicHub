const e = require('express');
const mongoose= require('mongoose')

const FarmerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const FarmerFormSchema = new mongoose.Schema({
    pname: String,
    pcategory: String,
    price: Number,
    discount: Number,
    sellprice: Number,
    decription: String,
    pimg:String,
    email:String, 

  

})

const CustmorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const Farmer = new mongoose.model("farmer", FarmerSchema);
const Customer = new mongoose.model("customer", CustmorSchema);
const FarmerForm = new mongoose.model("product", FarmerFormSchema);

module.exports = {Customer, Farmer,FarmerForm}
