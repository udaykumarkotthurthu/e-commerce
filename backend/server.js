const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();
app.use(express.json());
app.use(cors());
const userRoutes = require("./routes/userRoutes");
app.use("/data",userRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Mongodb is connected successfully..."))
.catch((err) => console.error("mongodb is not connected",err));

app.get("/",(res) => {
    res.send("The API is running...");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,(err) => {
    if(err){
        console.log(err);
    }else{
        console.log(`The app is running on port ${PORT}`);
    }
})