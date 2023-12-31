'Access-Control-Allow-Origin'
const express  = require('express');
const cors = require('cors');
const route = express();
require('dotenv').config();
const myrouted = require('./routes/myroute');
require('./database/connection');
const port = process.env.port || 6800
const cookieparser = require('cookie-parser');



route.use(express.json());
route.use(cors());
route.use(myrouted);
route.use(cookieparser());




route.listen(port,()=>{
    console.log(`port running ${port}`);
})



