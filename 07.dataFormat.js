const TIME = require('./素材/data')

let nowTime = new Date()
nowTime = TIME.dateFormat(nowTime)
console.log(nowTime);

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp</span></h1>'
let str = TIME.htmlEscape(htmlStr)
console.log('转义HTML',str);

str = TIME.htmlUnEscape(htmlStr)
console.log('还原HTML',str); 