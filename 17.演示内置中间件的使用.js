// 导入 express 模块
const express = require('express')

// 创建 express 的服务器实例

const app = express()

// 通过 express,json() 这个中间件,解析表单中的 JSON 格式的数据
app.use(express.json())
// 通过 express.urlencoded() 这个中间件,来解析表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended:false}))

app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send('ok!')
})

app.post('/book',(req,res)=>{
    console.log(req.body);
    res.send('ok!')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80,()=>{
    console.log('Express server running at http://127.0.0.1');
})