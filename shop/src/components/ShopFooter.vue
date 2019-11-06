<template>
    <van-tabbar v-model="active">
        <van-tabbar-item v-for="(obj,index) in menu" :key="index" @click.native="change(obj.title)" :name="obj.name" :icon="obj.icon" :to="obj.path">{{obj.title}}</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    export default {
        data(){
            return{
                active:'home',
                menu:[
                    {
                        name:'home',
                        icon:'wap-home-o',
                        path:'/',
                        title:'商城'
                    },{
                        name:'category',
                        icon:'records',
                        path:'/category',
                        title:'分类'
                    },{
                        name:'cart',
                        icon:'shopping-cart-o',
                        path:'/cart',
                        title:'购物车'
                    },{
                        name:'mine',
                        icon:'contact',
                        path:'/mine',
                        title:'我的'
                    }
                ]
            }
        },
        computed:{
            ...mapState(['name'])
        },
        methods:{
            ...mapMutations(['change'])
        }
    }
</script>

<style lang="scss" scoped>

</style>