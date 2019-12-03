<template>
    <div>
        <van-nav-bar title="商品分类" class="header"></van-nav-bar>
        <div>
            <van-card v-for="(obj,index) in cartList" :key="index" :price="obj.productId.price" :desc="obj.productId.company" :title="obj.productId.name" :thumb="obj.productId.img">
                <div slot="footer">
                    <van-button size="mini" @click="delCart(obj.productId._id, index)">删除</van-button>
                </div>
            </van-card>
        </div>
        <van-submit-bar v-show="isShow" class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit"></van-submit-bar> 
    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/service.config.js'
    import {mapState} from 'vuex'
    export default {
        data(){
            return{
                cartList:[],
                isShow:false
            }
        },
        computed:{
            ...mapState(['userInfo']),
            totalPrice(){
                return this.cartList.reduce((sum,elem)=>{
                    sum+=parseInt(elem.productId.price);
                    return sum;
                },0)*10*10;
            }
        },
        created(){
            if(!this.userInfo.login){
                this.$toast.fail("请先登录");
                setTimeout(()=>{
                    this.$router.push(this.userInfo.path);
                },1000)
            }else{
                axios({
                    url:url.getCart,
                    method:'get',
                    params:{
                        userId:this.userInfo.id
                    }
                }).then((res)=>{
                    console.log(res);
                    this.cartList=res.data;
                }).catch(err=>{
                    console.log(err);
                })
                this.isShow=true;
            }
        },
        methods:{
            delCart(id,index){
                this.cartList.splice(index,1);
                console.log(id);
            },
            onSubmit(){
                this.$toast.success('进入付款页面');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .submit-bar{
        margin-bottom: 1rem;
    }

</style>