const fs = require('fs')
const path = require('path')

// 定义正则表达式，匹配标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname+'/素材/案例1.html'),'utf8',function(err,dataStr) {
    if (err) return console.log('文件读取失败',err.message);
    console.log('读取文件成功');
    // resolveCSS(dataStr)
    // resolveScript(dataStr)
    // resolveHtml(dataStr)
    resolveAllPage(dataStr)
})

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    const newCss = r1[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname+'/testFile/index.css'),newCss,function (err) {
        if(err) return console.log('写入失败',err.message);
        console.log('写入成功');        
    })
}

function resolveScript(htmlStr) {
    const r1 = regScript.exec(htmlStr)
    const newScript = r1[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname + '/testFile/index.js'),newScript,function(err){
        if(err) return console.log('写入失败');
        console.log('写入成功！');
    })
}

function resolveHtml(htmlStr){
    const newHtml = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regScript,'<link rel="stylesheet" href="./index.js">')
    fs.writeFile(path.join(__dirname+'/testFile/index.html'),newHtml,function(err) {
        if (err) return console.log('html写入失败');
        console.log('html写入成功');
    })
}

function resolveAllPage(htmlStr){
    const r1 = regStyle.exec(htmlStr)
    const newCss = r1[0].replace('<style>','').replace('</style>')
    
    const r2 = regScript.exec(htmlStr)
    const newScript = r2[0].replace('<script>','').replace('</script>','')
    
    const newHtml = htmlStr.replace(regScript,'<link rel="stylesheet" href="./index.css">').replace(regStyle,'<link rel="stylesheet" href="./index.css">')
    
    fs.writeFile(path.join(__dirname+'/testFile/index.css'),newCss,function (err) {
        if(err) return console.log('写入失败',err.message);
        console.log('css写入成功');        
    })
    fs.writeFile(path.join(__dirname + '/testFile/index.js'),newScript,function(err){
        if(err) return console.log('写入失败');
        console.log('js写入成功！');
    })
    fs.writeFile(path.join(__dirname+'/testFile/index.html'),newHtml,function(err) {
        if (err) return console.log('html写入失败');
        console.log('html写入成功');
    })
}