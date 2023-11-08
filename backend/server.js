const http = require('http');

const myserver = http.createServer((req,res)=>{
        // res.write("welcome         to node site");
        // res.write("<h1>create node server </h1>");
        // res.write("<h2>write something </h2>")
        res.write("<div><h1>headingeeeeeeeeeeeeeeepppppppppppp</h1><h2>heading two</h2></div>")
        res.end();
})


myserver.listen(4800,()=>{
    console.log("server is runing");
});







