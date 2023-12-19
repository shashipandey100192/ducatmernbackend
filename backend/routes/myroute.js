'Access-Control-Allow-Origin'
const express = require('express');
const route = express.Router();
const mytype = require('../schimaset/schima');
const authenticat = require('../midilware/midelware');
const bcrypt = require("bcryptjs");

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




route.post("/login", async(req,res)=>{
    
    const {email,pass} = req.body;
    console.log(req.body);
    if(!email || !pass){
        return res.status(422).json({error:"user and password dont match"});
       
    }
    try{
        const uservalidation = await mytype.findOne({email:email});
        console.log(uservalidation);
        if(uservalidation){
            const mathdata = await bcrypt.compare(pass,uservalidation.pass);
            console.log(mathdata);
            if(!mathdata){
                res.status(422).json({error:"password not match",status:422});
            }else{
                //token generate after successful find data
                    const token = await uservalidation.customgeenratefunction();
                // cookies generate
                    res.cookie("usecookie",token,{
                        expires:new Date(Date.now()+9000000),
                        httpOnly:true
                    });
                    const result = {
                        uservalidation,
                        token,
                        uservalidation
                    }
                    return res.status(201).json({status:201,result});
                    
            }
        }
    } catch(error)
    {}
    
});


// user validation
route.get("/validuser",authenticat,async(req,res)=>{
    // console.log("show this message after done authenticat varification");
    try{
        const firsttimevalid = await mytype.findOne({_id:req.userId});
        res.status(201).json({status:201,firsttimevalid});
    }
    catch(error)
    {
        res.status(401).json({status:401,error})
    }
});







module.exports=route
