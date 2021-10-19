const dotenv= require('dotenv')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors= require('cors');
var fs = require('fs');
var path = require('path');

app.use(express.json());
app.use (express.urlencoded())
app.use(cors())

require('./db/conn');
const User=require('./models/userSchema');
app.use(require('./router/auth'));

app.use(express.static('public'));  
app.use('/uploads', express.static('uploads')); 

// require('dotenv').config({ path: './config.' });
// dotenv.config({ path: './config.env'})

const PORT = 5000;


//'mongodb+srv://divyesh:divyesh@cluster0.ir4qk.mongodb.net/myapp1?retryWrites=true&w=majority' ;


const middleware = (req, res,next) =>{
    console.log("middleware");
    // next();
}

// app.get('/home', middleware, (req, res) => {
//     res.send('Hello world!')
// });

// app.get('/signup', (req, res) => {
//     res.send('Hello signup!')
// });


app.listen( PORT , ()=>{
    console.log(PORT);
    console.log('server run on port ${PORT} ')
})

// const port = process.env.PORT || 8082;

// app.listen(port, () => console.log(`Server running on port ${port}`));