<template>
    <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="wap-home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item name="category" icon="records" to="/category">分类</van-tabbar-item>
        <van-tabbar-item name="cart" icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item name="mine" icon="contact" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        data(){
            return{
                active:'home'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>