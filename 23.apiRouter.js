const express = require('express')
const router = express.Router()

// 在这里挂载对应的路由
router.get('/get',(req,res)=>{
    const query = req.query
    res.send({
        status: 0,              // 0表示处理成功。 1表示处理失败
        msg:'GET 请求成功！',    // 状态的描述
        data:query,             // 需要响应给客户端的数据
    })
})

// 定义 POST 接口
router.post('/post',(req,res)=>{
    const body = req.body
    res.send({
        status:0,
        msg:'POST 请求成功!',
        data:body,
    })
})

//定义 DELETE 接口
router.delete('/delete',(req,res)=>{
    res.send({
        status:0,
        msg:'DELETE请求成功',
    })
})

module.exports = router