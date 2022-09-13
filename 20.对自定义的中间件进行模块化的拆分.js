// 导入 express 模块
const express = require('express')


// 创建 express 的服务器实例

const app = express()

// 导入自己封装的中间件模块
const customBodyParser = require('./21.custom-body-parser')
// 将自定义中间件函数注册为全局可用中间件
app.use(customBodyParser)

app.post('/user',(req,res)=>{
    res.send(req.body)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80,()=>{
    console.log('Express server running at http://127.0.0.1');
})