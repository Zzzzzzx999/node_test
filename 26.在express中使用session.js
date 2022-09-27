// 导入 express 模块
const express = require('express')

// 创建 express 的服务器实例

const app = express()

const session = require('express-session')

app.use(session({
    secret:'cat',
    resave:false,
    saveUninitialized:true
}))
app.use(express.static('./testFile/index.html'))
app.use(express.urlencoded({extended:false}))
app.post('/api/login',(req,res)=>{
    if(req.body.username !== 'admin' || req.body.password !== '000000'){
        return res.send({status:1,msg:'登录失败'})
    }
    req.session.user = req.body  //用户的信息
    req.session.login = true     //用户的登录状态

    res.send({status:0,msg:'登陆成功'})
})

app.get('/api/username',(req,res)=>{
    if(!req.session.login){
        return res.send({status:1,msg:'fail'})
    }
    res.send({
        status:0,
        msg:'success',
        username:req.session.username,
    })
})

// 推出登录的接口
app.post('/api/logout',(req,res)=>{
    req.session.destroy()
    res.send({
        status:0,
        msg:'退出登录成功'
    })
})


// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80,()=>{
    console.log('Express server running at http://127.0.0.1');
})