const express = require('express')
const app = express()

// 也可以使用箭头函数
app.use(function(req,res,next) {
    const time = Date.now(0)
    req.startTime = time
    next()
})

app.get('/',(req,res)=>{
    res.send('Home page.' + req.startTime)
})

app.get('/user',(req,res)=>{
    res.send('User page.' + req.startTime)
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})