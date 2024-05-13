const express = require("express");
const app=express();
const userRoute = require("./routes/user");
const {connectionMongoDB}=require("./connection")

connectionMongoDB("mongodb://127.0.0.1:27017/mondaymongodb");



app.use("/user",userRoute);



app.listen(8000,(req,res)=>{
       console.log(`Server is running at port 8000`)
    });