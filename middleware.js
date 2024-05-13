const express = require("express");
const user = require("./sampldata.json");
const app=express();

app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
    req.reqUsername="john ..";
    
    next();
})

app.use("/users",(req,res)=>{
    console.log("Middleware no. 2");
    console.log( req.reqUsername);
    
   
})
console.log("running checkpoint");
app.get("/user/:id",(req,res)=>{
    // const users=req.body;
    const id=Number(req.params.id);
    const userid=user.find((user)=> user.id===id);
    return res.json(userid);
})


app.listen(8000,(req,res)=>{
    console.log(`Server is running at PORT 8000`);
})