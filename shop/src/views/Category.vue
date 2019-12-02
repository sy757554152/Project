<template>
    <div>
        <van-nav-bar title="商品分类" class="header">
            <van-icon name="search" slot="left"></van-icon>
            <van-icon slot="right" @click="login()">{{userInfo.userName}}</van-icon>
        </van-nav-bar>
        <van-row class="category">
            <van-col span="8">
                <van-sidebar v-model="action" class="category-type">
                    <van-sidebar-item v-for="(obj,index) in typeList" :key="index" :title="obj.typeName" v-model="typeId" @click="changeType(obj.typeId,index)"></van-sidebar-item>
                </van-sidebar>
            </van-col>
            <van-col span="16" class="container">
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                    <van-list v-model="isLoading" @load="onLoad" class="category-list" :finished="finished">
                        <div class="category-list-product" v-for="(obj,index) in productList" :key="index" @click="gotoDetail(obj._id)">
                            <img class="category-list-product-img" :src="obj.img" alt="">
                            <p class="category-list-product-name">{{obj.name}}</p>
                            <p class="category-list-product-price">{{obj.price}}</p>
                        </div>
                    </van-list>
                </van-pull-refresh>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/service.config.js'
    import {mapState} from 'vuex';
    import {mapMutations} from 'vuex';
    export default {
        computed:{
            ...mapState(['userInfo'])
        },
        data(){
            return{
                typeList:[],
                typeId:1,
                productList:[],
                limit:10,
                finished:false,
                isLoading:true,
                action:0
            }
        },
        methods:{
            ...mapMutations([]),
            login(){
                if(this.userInfo.login){
                    this.$router.push(`/mine${this.userInfo.path}`);
                }else{
                    this.$router.push('/mine');
                }
            },
            changeType(typeId,index){
                this.action=index;
                this.typeId=typeId;
                this.productList=[];
                this.finished=false;
                this.getproducts();
            },
            getproducts(){
                this.isLoading=true;
                axios({
                    url:url.getProductsByType,
                    method:'get',
                    params:{
                        typeId:this.typeId,
                        start:this.productList.length,
                        limit:this.limit
                    }
                }).then((res)=>{
                    console.log(res);
                    if(res.data.length!=0){
                        this.productList=this.productList.concat(res.data);
                    }
                    else{
                        this.finished=true;
                    }
                    this.isLoading=false;
                }).catch(err=>{
                    console.log(err);
                })
            },
            onLoad() {
                setTimeout(() => {
                    this.getproducts();
                }, 2000);
            },
            onRefresh() {
                setTimeout(() => {
                    this.productList = [];
                    this.getproducts();
                }, 2000);
            },
            gotoDetail(productId){
                this.$router.push(`/detail/${productId}`)
            }
        },
        created(){
            axios({
                url:url.getTypes
            }).then(res=>{
                console.log(res.data);
                this.typeList=res.data;
                this.changeType(this.typeId,this.action);
            }).catch(err=>{
                console.log(err);
            })
        }
    }
</script>

<style lang="scss" scoped>
    
    .category{
        margin-bottom: 1rem;
        .container{
            position: fixed;
            top: 46px;
            bottom: 1rem;
            right: 0;
            overflow-y: scroll;
        }
        &-list{
            display: flex;
            flex-wrap: wrap;
            &-product{
                width: 40%;
                padding: 0 10px;
                text-align: center;
                &-img{
                    width: 2rem;
                    height: 2rem;
                }
                &-name{
                    overflow:hidden;
                    text-overflow:ellipsis;
                    display:-webkit-box;
                    -webkit-line-clamp:2;
                    -webkit-box-orient:vertical;
                }
            }
        }
    }
</style>