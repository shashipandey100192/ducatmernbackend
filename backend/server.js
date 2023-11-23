const express  = require('express');
const myapp = express();
require('dotenv').config();
const port = process.env.port || 6800

myapp.get("/",(req,res)=>{
    res.send("welcome to express js");
})

myapp.get("/about",(req,res)=>{
    res.send("welcome to about page");
})


myapp.listen(port,()=>{
    console.log(`port running ${port}`);
})

