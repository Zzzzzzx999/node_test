const express = require('express')
const app = express()

// const mw = function(req,res,next){
//     console.log('这是简单的中间件函数');
//     // 把流转关系,转交给下一个中间件或路由
//     next()
// }

// app.use(mw)

// 也可以使用箭头函数
app.use(function(req,res,next) {
    console.log('这是简单的中间件函数');
    // 把流转关系,转交给下一个中间件或路由
    next()
})

app.get('/',(req,res)=>{
    res.send('Home page.')
})

app.get('/user',(req,res)=>{
    res.send('User page.')
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})