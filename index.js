const express = require("express");
const user = require("./MOCK_DATA (1).json")
const app = express();


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
    




app.listen(8000,(req,res)=>{
    console.log(`Server is running on the port 8000`);
})