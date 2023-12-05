const mongoose = require('mongoose');

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
    }

});

const mytype = new mongoose.model("lastregistor",myschimapattern);
module.exports = mytype



