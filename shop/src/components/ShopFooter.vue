<template>
    <van-tabbar v-model="active" @change="change">
        <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="records" to="/category">分类</van-tabbar-item>
        <van-tabbar-item icon="cart" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact" @click="changeRouter()">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    export default {
        data(){
            return{
                active:0
            }
        },
        computed:{
            ...mapState(['userInfo'])
        },
        methods:{
            ...mapMutations([]),
            changeRouter(){
                if(this.userInfo.login){
                    this.$router.push(`/mine${this.userInfo.path}`);
                }else{
                    this.$router.push('/mine');
                }
            },
            change(){
                localStorage.setItem('active',this.active);
            }
        },
        created(){
            this.active=parseInt(localStorage.getItem('active'));
        }
    }
</script>

<style lang="scss" scoped>

</style>