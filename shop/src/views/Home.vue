<template>
    <div class="container">
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
        <div class="variety">
            <p class="variety-title">推荐商品</p>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import url from "@/service.config.js";
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        components:{
            swiper,
            swiperSlide
        },
        data(){
            return{
                productslist:[],
                swipe:[],
                hotSwiper:[],
                swiperOption:{
                    slidesPerView:3
                }
            }
        },
        created(){
            let urlSwipe=url.getSwipeItem;
            axios.get(urlSwipe)
            .then(res=>{
                this.swipe=res.data;
                console.log(this.swipe);
            })
            .catch(()=>{
                console.log('no');
            })
            let urlHotSwiper=url.getHotSwiperItem;
            axios.get(urlHotSwiper)
            .then(res=>{
                this.hotSwiper=res.data;
                console.log(this.hotSwiper);
            })
            .catch(()=>{
                console.log('no');
            })
            let urlProductsList=url.getVarietyItem;
            axios.get(urlProductsList)
            .then(res=>{
                this.productslist=res.data;
                console.log(this.productslist);
            })
            .catch(()=>{
                console.log('no');
            })
        },
        methods:{
            getAxios(url,list){
                axios.get(url)
                .then(res=>{
                    list=res.data;
                    console.log(list);
                })
                .catch(()=>{
                    console.log('no');
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
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
            font-size: 0.24rem;
            &-title{
                width: 100%;
                margin: 0;
                height: 0.5rem;
                padding-left:0.2rem;
                box-sizing: border-box;
                line-height: 0.5rem;
                text-align: left;
                font-weight: bold;
            }
            &-swiper{
                width: 100%rem;
                height: 3rem;
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

    }
</style>