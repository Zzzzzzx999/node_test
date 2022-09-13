const path= require('path')
const express = require('express')
const app = express()

// 这里的/this是挂载前缀
app.use('/this',express.static(path.join(__dirname + '/testFile')))
// app.use(express.static('testFile'))

app.listen(80, () => {  
    console.log('express server running at http://127.0.0.1');
})