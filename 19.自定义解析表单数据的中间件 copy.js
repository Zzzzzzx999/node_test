// 导入 express 模块
const express = require('express')
// 导入 Node.js 内置的 querystring
const Qs = require('Qs')

// 创建 express 的服务器实例

const app = express()

// 这是解析表单数据的中间件
app.use((req,res,next)=>{
    // 定义中间件具体的业务逻辑
    let str=''
    req.on('data', (chunk) => {
        str += chunk
    })
    req.on('end',() => {
        const body = Qs.parse(str)
        req.body = body
        console.log(body);
        next()
    })
})

app.post('/user',(req,res)=>{
    res.send(req.body)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80,()=>{
    console.log('Express server running at http://127.0.0.1');
})