const fs = require('fs')
/* fs.writeFile("testWrite.txt","Hello World",function(error) {
    if (error) {
        return console.log(error.message);
    }
    console.log("文件写入成功");    
})
fs.readFile(__dirname+'/testWrite.txt','utf8',function(err,dataStr){
    if (err) {
        return console.log('文件读取失败', err.message); 
    }
    console.log('文件读取成功' + dataStr);
}) */
fs.writeFile('testWrite2.txt','这次我自己写',function (err) {
    if (err) {
        return console.log(err.message);
    }
    console.log('写入成功');
})
fs.readFile(__dirname+'/testWrite2.txt','utf8',function(err,dataStr){
    if (err) {
        return console.log('文件读取失败' + err.message);
    }
    console.log('文件读取成功,数据为:',dataStr);
})