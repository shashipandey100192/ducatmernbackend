'Access-Control-Allow-Origin'
const express = require('express');
const route = express.Router();
const mytype = require('../schimaset/schima');

route.get("/",(req,res)=>{
    res.send("welcome to express js");
})

route.get("/about",(req,res)=>{
    res.send("welcome to about page");
})

/*get api data*/
route.get("/getalldata",async(req,res)=>{
    const alldata = await mytype.find();
    res.json(alldata);
    console.log(alldata);
});



module.exports=route
