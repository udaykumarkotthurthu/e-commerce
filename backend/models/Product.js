const mongoose = require("mongoose");

const Product = new mongoose.Schema({
    key :{
        type : String,
        required:true
    },
    ProductId :{
        type : String,
        required:true,
        unique:true
    },
    ProductName :{
        type : String,
        required:true
    },
    Type :{
        type : String,
        required:true
    },
    Cost :{
        type : String,
        required:true
    },
    Rating :{
        type : String,
        required:true
    },
    Reviews :{
        type : String,
        required:true
    },
    Data :{
        type : String,
        required:true
    },
    Seller :{
        type : String,
        required:true
    },
    URL :{
        type : String,
        required:true
    }
},{collection:'Products'})

const Products = mongoose.model("product",Product);

module.exports = Products;