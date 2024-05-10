const express = require("express");
const user = require("./sampldata.json");
const fs= require("fs");
const app = express();

app.use(express.urlencoded({extended:false}));
app.use("/users",(req,res)=>{
    const html=`
    <ul>
    ${user.map((u)=>
        
        `<li>${u.first_name}</li>
         <li>${u.id}</li>
        <br/>
        
        `
).join("")}
       
        </ul>`   
        res.send(html);
      })
app.get("/api/users/:id",(req,res)=>{
    const id= Number(req.params.id);
    const userss=user.find((user)=>user.id===id);
   return res.json(userss);

   
})
app.post("/api/users/:id",(req,res)=>{
const body=req.body;
 console.log(body);
 user.push(body);
 fs.writeFile("./sampldata.json",JSON.stringify(user),(err,data)=>{
    return res.json({status:"success"})
 })

})
app.patch("/api/users/:id",(req,res)=>{
    const body=req.body;
    console.log(body);
    const id=body.id;
    const userput=user.find((users)=>users.id===id);
    userput.id=body.newid;
     //user.push(userput);
     
     fs.writeFile("./sampldata.json",JSON.stringify(user),(err,data)=>
        {
        return res.json({status:"sucess"})
     });


   
})



app.delete("/api/users/:id",(req,res)=>{
    const body=req.body;
    const deleteid=body.delete;
    const deleteuser=user.find((user)=> user.id===deleteid);
    console.log(deleteuser);
   delete(deleteuser);
   
   fs.writeFile("./sampldata.json",JSON.stringify(user),(err,data)=>
    {
    return res.json({status:"sucess"})
 });


})




app.listen(8000,(req,res)=>{
    console.log(`Server is running on the port 8000`);
})