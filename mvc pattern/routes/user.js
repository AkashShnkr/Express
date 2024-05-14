const express = require("express");
const router= express.Router();
const {handleuserBYId} =  require("../controllers/index");

router.get("/:id",handleuserBYId);



module.exports=router;
