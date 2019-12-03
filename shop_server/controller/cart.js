const Koa =require('koa');
const Router=require('koa-router');
let router=new Router();
const mongoose=require('mongoose');

router.post('/addCart',async(ctx)=>{
    const Cart=mongoose.model('Cart');
    const cart=new Cart(ctx.request.body);
    await cart.save().then(()=>{
        ctx.body={
            code:200,
            message:'成功'
        }
    }).catch(err=>{
        ctx.body={
            code:500,
            message:'失败'
        }
        console.log(err);
    })
})
router.get('/getCart',async(ctx)=>{
    const Cart=mongoose.model('Cart');
    await Cart.find({userId:ctx.query.userId}).populate('productId').exec().then((res)=>{
        ctx.body=res;
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports=router;