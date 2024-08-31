const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('connection is established');
    })
    .catch(() => {
        console.log('connection failed');

    })

const loginSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
    
})

const collection = new mongoose.model("collection",loginSchema);

module.exports=collection