const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Type:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique: true
    },
    Phone:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Cart:{
        type:[String],
        default:[]
    },
    Orders:{
        type:[String],
        default:[]
    }
},{collection:'Users'});

const User = mongoose.model("user",userSchema);

module.exports = User;