const express = require("express");
const user = require('./sampldata.json');
const fs=require('fs');

const app = express();


app.use(express.urlencoded({extended:false}));


app.post('/userstatus',(req,res)=>{
    const body=req.body;
    if(!body.first_name || !body.last_name || !body.age  || !body.profession){
        return res.status(400).json({"msg":"Bad Request"});
    }
    user.push(body);
    fs.writeFile("./datahere.json",JSON.stringify(user),(err,data)=>{
        return res.status(201).json({status:"succuess"});
    })
    
})
app.post("/api/users/:id",(req,res)=>{
    const body=req.body;
     console.log(body);
     user.push(body);
     fs.writeFile("./sampldata.json",JSON.stringify(user),(err,data)=>{
        return res.json({status:"success"})
     })})

app.listen(8000,(req,res)=>{
    console.log(`Server running at port 8000`);
})