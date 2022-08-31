const fs = require('fs')
const path = require('path')
fs.writeFile(path.join(__dirname+'/testFile/123.txt'),'Hello World!!!',function(err){
    if (err) {
        return console.log("写入失败"+err.message);        
    }
    console.log("写入成功");
})
fs.readFile(path.join(__dirname+'/testFile/123.txt'),'utf8',function(err,dataStr){
    if (err) {
        return console.log("读取失败"+err.message)        
    }
    console.log("读取成功，数据为"+dataStr);
})