const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let ObjectId=Schema.Types.ObjectId;

const cartSchema=new Schema({
    Id:ObjectId,
    productId:{
        type:ObjectId,
        ref:'Product'//指向联合查询的model
    },
    userId:ObjectId,
    createdDate:{type:Date,default:Date.now()}
})

mongoose.model('Cart',cartSchema);