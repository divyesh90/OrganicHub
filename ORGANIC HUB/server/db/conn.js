const mongoose = require('mongoose');


const DB = 'mongodb+srv://divyesh:divyesh@cluster0.ir4qk.mongodb.net/myapp1?retryWrites=true&w=majority';

mongoose.connect( DB, {
    useNewUrlParser: true,  
  useUnifiedTopology: true 
}).then(()=> {
    // console.log(DB);
   console.log("connection succesful");
}).catch((err)=> console.log(err));


