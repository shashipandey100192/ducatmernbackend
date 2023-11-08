const http = require('http');
const path = require('path');
const fs = require('fs');


const myserver = http.createServer((req,res)=>{
        if(req.url==="/")
        {
            fs.readFile('./public/index.html',(err,html)=>{
                res.end(html)
            })
        }
        else if(req.url==="/about")
        {
            fs.readFile('./public/about.html',(err,html)=>{
                res.end(html)
            })
        }
        else{
            fs.readFile('./public/errorpage.html',(err,html)=>{
                res.end(html)
            })
        }
        
      
})


myserver.listen(4800,()=>{
    console.log("server is runing");
});







