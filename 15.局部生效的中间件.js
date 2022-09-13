// 导入 express 模块
const express = require('express');
const res = require('express/lib/response');

// 创建 express 的服务器实例

const app = express()

const mw1 = function(req,res,next){
    console.log('调用了局部生效的中间件');
    next()
}

app.get('/',mw1,(req,res)=>{
    res.send('Home page.')
})

app.get('/user',(req,res)=>{
    res.send('User page.')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80,()=>{
    console.log('Express server running at http://127.0.0.1');
})