const http = require('http');
const path = require('path');
const fs = require('fs');


const myserver = http.createServer((req,res)=>{
        fs.readFile('./public/index.html',(err,html)=>{
            res.end(html)
        })
      
})


myserver.listen(4800,()=>{
    console.log("server is runing");
});







