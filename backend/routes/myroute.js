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




route.post("/create",async(req,res)=>{
    const {email,phone,gender,pass,dob,profile} = req.body;
    const adduser = new mytype({
        phone,gender,pass,dob,email,profile
    });
    await adduser.save();
    res.status(200).json(adduser);
    console.log(adduser);
});



// delete api
route.delete("/deleterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const a = await mytype.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
});

/*single data api*/
route.get("/single/:id",async(req,res)=>{
    const {id} = req.params;
    const singledata = await mytype.findById({_id:id});
    res.json(singledata);
    console.log(singledata);
});

route.patch("/updaterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await mytype.findByIdAndUpdate(id,req.body,{new:true});
    console.log(recordupdate);
    res.status(201).json(recordupdate);
});






module.exports=route
