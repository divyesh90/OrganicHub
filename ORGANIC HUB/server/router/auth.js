const express= require('express');
const { model } = require('mongoose');
const router= express.Router();
const path= require('path');
const  fs = require('fs');
const multer = require('multer');

require('../db/conn');


// const Farmer =require('../models/userSchema');
const {Customer,Farmer,FarmerForm} =require('../models/userSchema');

router.use(express.static(__dirname+"./public/"));

    
router.get('/products',  async (req, res) => {

    const email= req.query.email;
    console.log(email)

    try{
        const fproducts= await FarmerForm.find({email : email})
        console.log("done   ");
        // console.log(fproducts)
        res.json(fproducts);

    }
    catch(err){
        res.json('error' + err)
    }
   
});


router.get('/cproducts',  async (req, res) => {

    const email= req.query.email;
    console.log(email)

    try{
        const cproducts = await FarmerForm.find()
        console.log("done  ");
        // console.log(fproducts)
        res.json(cproducts);

    }
    catch(err){
        res.json('error' + err)
    }
   
});



router.post('/signup',  (req, res) => {
    console.log(req.body);
    console.log('Hello world from post signup!')

    const { name, utype, email, password }= req.body
    if(utype=="Farmer"){
        console.log("farmer")

        Farmer.findOne({email: email},(err,farmer)=>{
            if(farmer){
                res.json({ message: "User Already Register" })
            }
            else{
    
                const farmer = new Farmer({
                    name: name,
                    email: email,
                    password: password,
                })

                Farmer.insertMany(farmer)
                    .then(value => {
                        console.log(" in post farmer")
                          res.json( { message: "Successfully Register "})
                        console.log(" farmer  Saved Successfully");
                    })
                    .catch(error => {
                        res.json( {massage: " farmer not register"})
                        res.json( {err})
                        console.log(error);
                    })


            //   farmer.save( err => {
            //         if(err){
            //             res.json( {massage: "Not register"})
            //             res.json( {err})
            //         }
            //         else{
            //             console.log(" in post farmer")
            //             res.json( { message: " Farmer Successfully Register  "})
            //         }
            //     })
    
            }
        })

    }
    else if (utype=="Customer"){

        Customer.findOne({email: email},(err,user)=>{
            if(user){
                res.json({ message: "User Already Register" })
            }
            else{
    
                const user = new Customer({
                    name: name,
                    email: email,
                    password: password,
                })

                Customer.insertMany(user)
                    .then(value => {
                        console.log(" in post custmer")
                          res.json( { message: "Successfully Register "})
                        console.log(" Customer Saved Successfully");
                    })
                    .catch(error => {
                        res.json( {massage: "not register"})
                        res.json( {err})
                        console.log(error);
                    })
  
                // user.save( err => {
                //     if(err){
                //         res.json( {massage: "not register"})
                //         res.json( {err})
                //     }
                //     else{
                //         console.log(" in post custmer")
                //         res.json( { message: "Successfully Register "})
                //     }
                // })
    
            }
        })

    }
    else{
        console.log("not register farmer and user")
        res.json( {massage: "not register"})
        res.json( {err})

    }
    
});


router.post('/login',  (req, res) => {
    console.log(req.body);
    console.log('Hello world from post login!')

    const {utype,email, password }= req.body

    if(utype=="Farmer"){


        Farmer.findOne({email: email},(err,user)=>{
            console.log("in farmer");
            if(user){
                if( password == user.password)
                {
                    user.password="*******";
                    res.json({ message:  {user}+" User Login Successfilly", user: user })
                }
                else{
                    console.log(password);
                    console.log(user);
                    res.json({ message: "Password Incorrect" })
                }   
            }
            else{
                res.json({ message: "User Not Register" })
            }
        })
        
    }
    else if(utype=="Customer"){
        
        Customer.findOne({email: email},(err,user)=>{
            console.log(" in customer")
            if(user){
                if( password == user.password)
                {
                    res.json({ message: " User Login Successfilly", user: user })
                }
                else{
                    console.log(password);
                    console.log(user);
                    res.json({ message: "Password Incorrect" })
                }   
            }
            else{
                res.json({ message: "User Not Register" })
            }
        })

    }
    else{
        res.json({ message: "User Not Register" })
    }

    
});




var Storage = multer.diskStorage({
    destination:"./public/uploads/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now()+ path.extname(file.originalname));
        console.log(" in filename ")
    }
});
 
var upload = multer({
     storage: Storage
     }).single('file');




router.post( '/rproduct', upload ,(req, res, next)  =>{
    console.log("data   ...")
    console.log(req.body.pname);

    const{pname,pcategory,price,discount,sellprice,description,email}=req.body
    console.log('Hello world from post rproducts!')
    console.log(pname)
    const pdetails = new FarmerForm({
        pname: pname,
        pcategory: pcategory,
        price: price,
        discount: discount,
        sellprice: sellprice,
        decription: description,
        pimg: req.file.filename,
        email: email,

    })

    FarmerForm.insertMany(pdetails)
        .then(value => {
            console.log(" in post rprouct")
              res.json( { message: "Successfully Register Product "})
            console.log(" Product Saved Successfully");
        })
        .catch(error => {
            res.json( {massage: " Product not register"})
            res.json( {err})
            console.log(error);
        })



});


 


module.exports = router;