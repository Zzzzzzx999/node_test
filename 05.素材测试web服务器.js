const http =require('http')
const fs = require('fs')
const path= require('path')
const server = http.createServer()
server.on('request',(req,res)=>{
    // /testFile/123.txt
    // /testFile/index.html
    // /testFile/index.css
    // /testFile/index.js
    let fpath=''
    if (req.url==='/') {
        fpath = path.join(__dirname,'./testFile/index.html')   
    }else{
        fpath = path.join(__dirname,'/clock',req.url)
    }
    fs.readFile(fpath,'utf8',(err,dataStr)=>{
        if (err) return res.end('404 Not Found.')
        res.end(dataStr);
    })
})
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})