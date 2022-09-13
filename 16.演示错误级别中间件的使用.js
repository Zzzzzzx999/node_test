// 导入 express 模块
const express = require('express')

// 创建 express 的服务器实例

const app = express()

app.get('/',(req,res)=>{
    throw new Error('系统错误001!')
    res.send('Home page.')
})

app.use((err,req,res,next)=>{
    console.log('发生了错误'+err.message);
    res.send('Error:'+err.message)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80,()=>{
    console.log('Express server running at http://127.0.0.1');
})