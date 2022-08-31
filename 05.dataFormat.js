const TIME = require('./素材/data')

let nowTime = new Date()
nowTime = TIME.dateFormat(nowTime)
console.log(nowTime);