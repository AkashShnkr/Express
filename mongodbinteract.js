const express = require("express");
const mongoose = require("mongoose");
const userdata= require("./sampldata.json");
const { Db } = require("mongodb");
const app = express();

const PORT = 8000;
app.use(express.urlencoded({extended:false}));
mongoose.connect("mongodb://localhost:27017/Database1")
.then(()=>{
console.log(`Mongodb connected at local`);
}).catch((err)=>{
    console.log(`Error in connecting mnogodb`,err);
});
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
    },
    
})

const usermongo = mongoose.model("col1",userSchema);
const firstdoc = new usermongo({
    firstName: "Akash",
    lastName: "Shankar",
    email: "aksh21is@cmrit.ac.inaa",
    gender: "Male",
});
// firstdoc.save().then(() => console.log("Entry Done.")).catch((err) => console.log(err));
// app.get("/mongodb",(req,res)=>{
//     usermongo.find({},(err,res)=>{
//         if(!err){
//             res.send(res);
//         }
//         else{
//             console.log(err);
//         }
//     }).then(()=>console.log("s")).catch((err)=>console.log("err"));
// })

app.post("/user",async(req,res)=>{
    const body=req.body;
    if(
        !body.firstName ||
        !body.firstName ||
        !body.email ||
        !body.gender 
        
    ){
        return res.status(400).json({msg:"All field are req."});
    }
const result= await usermongo.create({
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email,
        gender:body.gender,
        
    }).then(()=>{
        console.log("Suceess done.")
    }).catch((err)=>{
        console.log(`error occur`,err);
    });
    console.log("result",result);
    return res.status(201).json({msg:"success"});
    
    

})
app.post("/atlas",async(req,res)=>{
    const collection=await user.collection("")
})



app.listen(8000,(req,res)=>{
    console.log(`Server running at PORT ${PORT}`);
})

