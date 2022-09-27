// 1.导入 mysql 模块
const mysql = require('mysql')

// 2.建立与 mysql 数据库的连接关系
const db = mysql.createPool({
    host:'127.0.0.1',  // 数据库的IP地址
    user:'root',       // 登录数据库的账号
    password:'mysql',  // 登录数据库的密码
    database:'mydb_01',       // 指定要操作哪个数据库
})

// 测试 mysql 模块能否正常工作
/* db.query('select 1',(err,results) => {
    // 能够成功的执行sql语句
    if(err) return console.log(err.message);
    console.log(results);
}) */

// 查询 users 表中的所有数据
/* const sqlStr = 'select * from users'
db.query(sqlStr,(err,results) => {
    if(err) console.log(err.message)
    // 如果执行的是 select 查询语句,则执行的结果是数组 
    console.log(results);
})
 */

// 向 users 表中,新增一条数据,其中 username 的值为 Spyder-man,password 的值为pcc123
/* const user = {username:'Spyder-man',password:'pcc123'}
const sqlStr = 'insert into users (name,password) values (?,?)'
db.query(sqlStr,[user.username,user.password],(err,results) => {
    if(err) return console.log(err.message)
    if(results.affectedRows === 1){
        console.log('插入数据成功');
    }
}) */

// 演示插入数据的便捷方式
/* const user = {name:'Spyder-man2',password:'pcc689'}
const sqlStr = 'insert into users set ?'
db.query(sqlStr,user,(err,results) => {
    if(err) return console.log(err.message)
    if(results.affectedRows === 1){
        console.log('插入数据成功');
    }
}) */

// 演示更新数据的方式
/* const user = {id:5,username:'cg',password:'cgcg123'}
const sqlStr = 'update users set name=?,password=? where id=?'
db.query(sqlStr,[user.username,user.password,user.id],(err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows >0){
        console.log('数据更新成功');
    }
}) */

// 演示更新数据的便捷方式
/* const user = {id:5,name:'cg',password:'cgcg222'}
const sqlStr = 'update users set ? where id=?'
db.query(sqlStr,[user,user.id],(err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows >0){
        console.log('数据更新成功');
    }
}) */

// 演示删除
/* const sqlStr = 'delete from users where id=?'
db.query(sqlStr,5,(err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows >0){
        console.log('数据删除成功');
    }
}) */

// 标记删除
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr,[1,4],(err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows > 0){
        console.log('标记删除成功！');
    }
})