// 导入 Node.js 内置的 querystring
const Qs = require('Qs')

const bodyParser = (req,res,next)=>{
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
}

module.exports = bodyParser