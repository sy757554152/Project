const Router=require('koa-router');
let router=new Router();
const mongoose=require('mongoose');

router.post('/registUser',async(ctx)=>{
    // console.log('请求成功');
    // ctx.body='请求成功';

    // 获取model
    const User =mongoose.model('User');
    // 接收post请求封装成user对象
    let newUser =new User(ctx.request.body);
    // 使用save()保存用户信息
    await newUser.save()
    .then(()=>{
        ctx.body={
            code:200,
            message:'注册成功'
        }
    }).catch((err)=>{
        ctx.body={
            code:500,
            message:err
        }
    });
})

router.post('/loginUser',async(ctx)=>{
    // 接受前端发送的数据
    
    let loginUser=ctx.request.body;
    let userName=loginUser.userName;
    let password=loginUser.password;
    // 引入model
    const User=mongoose.model('User');
    // 查询用户名是否存在 存在去比较
    await User.findOne({userName:userName}).exec().then(async (result)=>{
        if(result){
            let newUser=new User();
            await newUser.comparePassword(password,result.password).then((isMatch)=>{
                console.log(isMatch);
                if(isMatch){
                    ctx.body={
                        code:200,
                        message:'登陆成功'
                    }
                }else{
                    ctx.body={
                        code:201,
                        message:'登录失败'
                    }
                }
            })
        }else{
            ctx.body={
                code:201,
                message:'用户名不存在'
            }
        }
    })
    
})
module.exports=router;