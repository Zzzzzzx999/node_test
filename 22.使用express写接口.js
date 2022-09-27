// 导入 express 模块
const express = require('express')

// 创建 express 的服务器实例
const app = express()

// 配置解析表单数据的中间件
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const cors = require('cors')

// 必须载配置 cors 中间件之前,配置 JSONP 的接口
app.get('/api/jsonp',(req,res)=>{
    // TODO：定义JSONP 接口具体的实现过程
    // 1.得到函数的名称
    const funcName = req.query.callback

    // 2.定义要发送到客户端的数据对象
    const data={name:'zhou',age:22}

    // 3.拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`

    // 4.把拼接的字符串，响应给客户端
    res.send(scriptStr)
})
app.use(cors())

const router = require('./23.apiRouter')
app.use('/api',router)

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80,()=>{
    console.log('Express server running at http://127.0.0.1');
})