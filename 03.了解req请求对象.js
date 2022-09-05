//加载自定义模块
const http = require('http')
const server= http.createServer()
server.on('request',(req,res)=>{
    const url = req.url
    const method = req.method
    const str =`Your request url is ${url},and request method is ${method}`
    const str_CN=`你请求的URL地址是${url},请求method类型是${method}`
    console.log(str_CN);

    // 手动设置内容的编码格式
    res.setHeader('Content-Type','text/html;charset=utf-8')
    
    res.end(str_CN)
})
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})