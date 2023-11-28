const mongose = require('mongoose');
const db = "mongodb+srv://mernuser:supperpassword@cluster0.cqczybv.mongodb.net/mydatabase";
mongose.connect(db)
.then((d)=>{
    console.log("db connections ok");
})
.catch((err)=>{
    console.log(err);
})