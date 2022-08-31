const path = require('path')
const fs = require('fs') 

// path.join的应用
const abcPath = path.join('/a','/f','/dsds','../','abcs','w')
console.log(abcPath);

fs.readFile(path.join(__dirname,'/testWrite2.txt'),'utf8',function (err,dataStr) {
    if (err) {
        return console.log('文件读取失败'+err.message);
    }
    console.log('文件读取成功',dataStr+nameWithoutExt);
})

// path.basename的应用
const fpath = '../e/a/faf/dsfsd/index.html'
const fullName = path.basename(fpath)
console.log(fullName);
const nameWithoutExt = path.basename(fpath,'.html')
console.log(nameWithoutExt);

const extName = path.extname(fpath)
console.log('这是文件扩展名部分：',extName);