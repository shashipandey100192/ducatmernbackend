const jwt = require("jsonwebtoken");
const mytype = require('../schimaset/schima');
const keysecret = "sjkdfksjkjfksjdkfdskjfhsdjf";


const authenticat = async(req,res,next)=>{
    try{
        const token = req.headers.authorization;
        const verifytoken = jwt.verify(token,keysecret);
        const rootUser = await mytype.findOne({_id:verifytoken._id});
        console.log(rootUser);
        if(!rootUser)
        {
            throw new Error("user not found");
        }
        req.token = token;
        req.rootUser= rootUser;
        req.userId = rootUser._id;
        next();
    }catch(error)
    {
       res.status(401).json({status:401,massage:"unauthorized no token provider"}); 
    }


}

module.exports = authenticat;