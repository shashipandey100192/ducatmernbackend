const http = require('http');
const path = require('path');
const fs = require('fs');
const port = 4800;

const myserver = http.createServer((req,res)=>{
        if(req.url==="/")
        {
            fs.readFile('./public/index.html',(err,html)=>{
                res.end(html)
            })
        }
        
      
})


myserver.listen(port,()=>{
    console.log(`server is runing ${port}`);
});







