<template>
    <div>
        <van-nav-bar title="商品详情" class="header">
            <van-icon name="arrow-left" slot="left" @click="goback()"></van-icon>
        </van-nav-bar>
        <div>
            <img :src="detail.img" alt="" class="detail-img">
            <div class="detail">
                <p class="detail-name">{{detail.name}}</p>
                <p class="detail-price">￥{{detail.price}}</p>
                <p>公司：{{detail.company}}</p>
                <p>产地：{{detail.city}}</p>
            </div>
        </div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart" />
            <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
            <van-goods-action-button type="danger" text="立即购买" @click="buy" />
        </van-goods-action>
    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/service.config.js'
    import {mapState} from 'vuex'
    export default {
        data(){
            return{
                detail:{}
            }
        },
        computed:{
            ...mapState(['userInfo'])
        },
        methods:{
            goback(){
                this.$router.go(-1);
            },
            goCart(){
                this.$router.push('/cart');
            },
            addCart(){
                if(this.userInfo.login){
                    console.log(this.userInfo.login);
                }
                else{
                    this.$toast.fail('请登录');
                    setTimeout(()=>{
                        this.$router.push(this.userInfo.path);
                    },1000);
                }
            },
            buy(){

            }
        },
        created(){
            axios({
                url:url.getDetail,
                method:'get',
                params:{
                    id:this.$route.params.id
                }
            }).then(res=>{
                console.log(res);
                this.detail=res.data;
            }).catch(err=>{
                console.log(err);
            })
        }
    }
</script>

<style lang="scss" scoped>
    .detail-img{
        width: 100%;
        height: 5rem;
    }
    .detail{
        padding: 0.2rem;
        &-name{
            color: #333;
            font-weight: bolder;
        }
        &-price{
            color: #ff7300;
            font-size: 0.4rem;
        }
    }
</style>