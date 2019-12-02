<template>
    <div class="container">
        <van-nav-bar title="首页" class="header">
            <van-icon name="search" slot="left"></van-icon>
            <van-icon slot="right" @click="login()">{{userInfo.userName}}</van-icon>
        </van-nav-bar>
        <van-swipe :autoplay="3000" class="swipe">
            <!-- 轮播图 -->
            <van-swipe-item class="swipe-item" v-for="(obj,index) in swipe" :key="index">
                <img v-lazy="obj.img" alt="">
            </van-swipe-item>
        </van-swipe>
        <!-- 热门商品 -->
        <div class="hot">
            <p class="hot-title">热门商品</p>
            <swiper class="hot-swiper" :options="swiperOption">
                <swiper-slide class="hot-swiper-slide" v-for="(obj,index) in hotSwiper" :key="index">
                    <div class="hot-swiper-slide-space">
                        <img class="hot-swiper-slide-space-img" :src="obj.img" alt="">
                        <div>{{obj.name}}</div>
                        <div>{{obj.price}}</div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!-- 推荐商品 -->
        <div class="variety">
            <p class="variety-title">推荐商品</p>
            <ul class="variety-list">
                <li class="variety-list-thing" v-for="(obj,index) in productShowlist" :key="index">
                    <img :src="obj.img" alt="">
                    <div class="variety-list-thing-name">{{obj.name}}</div>
                    <div>{{obj.price}}</div>
                </li>
            </ul>
        </div>
        <!-- 加载 -->
        <van-loading class="loading" size="24px" v-show="flag" type="spinner" vertical>加载中...</van-loading>
    </div>
</template>

<script>
    import axios from "axios";
    import url from "@/service.config.js";
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import {mapState} from 'vuex';
    import {mapMutations} from 'vuex';
    export default {
        computed:{
            ...mapState(['userInfo'])
        },
        components:{
            swiper,
            swiperSlide,
        },
        data(){
            return{
                productslist:[],
                productShowlist:[],
                swipe:[],
                hotSwiper:[],
                swiperOption:{
                    slidesPerView:3
                },
                num:0,
                flag:false,
            }
        },
        created(){
            let urlSwipe=url.getSwipeItem;
            axios.get(urlSwipe)
            .then(res=>{
                this.swipe=res.data;
                // console.log(this.swipe);
            })
            .catch(()=>{
                console.log('no');
            })
            let urlHotSwiper=url.getHotSwiperItem;
            axios.get(urlHotSwiper)
            .then(res=>{
                this.hotSwiper=res.data;
                // console.log(this.hotSwiper);
            })
            .catch(()=>{
                console.log('no');
            })
            let urlProductsList=url.getVarietyItem;
            this.getAxios(urlProductsList);
        },
        methods:{
            getAxios(url){
                this.flag=true;
                axios.get(url)
                .then(res=>{
                    let shopList=new Array();
                    shopList=res.data;
                    this.productShowlist=[...this.productShowlist,...shopList];
                    this.flag=false;
                }).catch(()=>{
                    console.log('no');
                })
            },
            login(){
                if(this.userInfo.login){
                    this.$router.push(`/mine${this.userInfo.path}`);
                }else{
                    this.$router.push('/mine');
                }
            },
            ...mapMutations([])
        },
        mounted(){
            window.onscroll = () => {
                var scrollTop =document.documentElement.scrollTop || document.body.scrollTop;//滚动条距离顶部的高度
                var clientHeight =document.documentElement.clientHeight || document.body.clientHeight;//页面可视高度
                var scrollHeight =document.documentElement.scrollHeight || document.body.scrollHeight;//文档总高度
                if (Math.abs(scrollHeight - scrollTop - clientHeight) <1) {//Math.abs()  绝对值
                    this.getAxios(url.getVarietyItem);
                }
            };
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        position: relative;
        background: #eee;
        .swipe{
            width: 100%;
            background: #fff;
            height: 3rem;
            &-item{
                width: 100%;
                height: 3rem;
                img{
                    width: 100%;
                    height: 3rem;
                }
            }
        }
        .hot{
            width: 100%;
            margin-top: 0.2rem;
            background: #fff;
            &-title{
                width: 100%;
                height: 0.5rem;
                padding-left:0.2rem;
                box-sizing: border-box;
                line-height: 0.5rem;
                text-align: left;
                font-weight: bold;
            }
            &-swiper{
                width: 100%rem;
                height: 3.5rem;
                padding-left:0.1rem; 
                &-slide{
                    width: 2rem;
                    text-align: center;
                    &-space{
                        width: 2rem;
                        img{
                            width: 2rem;
                            height: 2rem;
                        }
                        div{
                            overflow:hidden;
                            text-overflow:ellipsis;
                            display:-webkit-box;
                            -webkit-line-clamp:2;
                            -webkit-box-orient:vertical;
                        }
                    }
                }
            }
        }
        .variety{
            width: 100%;
            margin-top: 0.2rem;
            margin-bottom: 1rem;
            background: #fff;
            &-title{
                width: 100%;
                height: 0.5rem;
                line-height: 0.5rem;
                text-align: center;
                font-weight: bold;
            }
            &-list{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                text-align: center;
                &-thing{
                    flex: 45%;
                    img{
                        width: 2rem;
                        height: 2rem;
                    }
                    &-name{
                        height: 1rem;
                        padding: 0 0.6rem 0 0.6rem;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        display:-webkit-box;
                        -webkit-line-clamp:2;
                        -webkit-box-orient:vertical;
                    }
                }
            }
        }
        .loading{
            position: fixed;
            top:50%;
            left: 50%;
            transform:translate(-50%,-50%);
        }
    }
</style>