const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const keysecret = "sjkdfksjkjfksjdkfdsksdfjsjkhfjsdghfjfhsdjf";

const myschimapattern = new mongoose.Schema({
    email:{
        type:String
    },
    phone:{
        type:String
    },
    gender:{
        type:String
    },
    dob:{
        type:String
    },
    pass:{
        type:String
    },
    profile:{
        type:String
    },
    tokens:[
        {
            token:{
                type:String,
                require:true,
            }
        }
    ]

});

//hass password
myschimapattern.pre("save", async function(next){
    if(this.isModified("pass")){
        this.pass = await bcrypt.hash(this.pass,12);
    }
    next();
});


myschimapattern.methods.customgeenratefunction = async function(){
    try{
        let mytoken = jwt.sign({_id:this._id},keysecret,{
            expiresIn:"1d"
        });
        this.tokens = this.tokens.concat({token:mytoken});
        await this.save();
            return mytoken;

    }
    catch(error){
        res.status(422).json(error);
    }

}



const mytype = new mongoose.model("lastregistor",myschimapattern);
module.exports = mytype



