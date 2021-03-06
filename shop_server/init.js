const mongoose=require('mongoose');
const db ='mongodb://localhost/shop'

//引入schema
const glob=require('glob');
const path=require('path');
exports.initSchema=()=>{
    glob.sync(path.resolve(__dirname,'./model','*js')).forEach(require);
};
// 连接数据库
exports.connect=()=>{
    // 连接数据库
    mongoose.connect(db,{useNewUrlParser:true});
    // 监听数据库连接
    mongoose.connection.on('disconnected',()=>{
        mongoose.connect(db);
    });
    // 数据库出错
    mongoose.connection.on('error',()=>{
        console.log('error');
        mongoose.connect(db);
    });
    // 连接上时
    mongoose.connection.once('open',()=>{
        console.log('mongodb is start');
    })
}