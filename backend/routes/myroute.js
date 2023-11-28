const express = require('express');
const route = express.Router();

route.get("/",(req,res)=>{
    res.send("welcome to express js");
})

route.get("/about",(req,res)=>{
    res.send("welcome to about page");
})



module.exports=route
