const express = require("express");
const useer = require('./sampldata.json');
const { url } = require("inspector");
const app = express();


app.use(express.urlencoded({extended:false}));

app.get("/header",(req,res)=>{
    res.setHeader("X-Name","John smith");
    res.send("Header Set");
})

app.listen(8000,(req,res)=>{
    console.log(`Server running at port 8000`);
})