const express = require("express");
const router= express.Router();


router.get("/:id",(req,res)=>{
    const id= Number(req.params.id);
    const userss=user.find((user)=>user.id===id);
   return res.json(userss);

});



module.exports=router;
