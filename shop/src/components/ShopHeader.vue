<template>
    <div>
        <van-nav-bar :title="name" class="header">
            <van-icon name="search" slot="left"></van-icon>
            <van-icon name="cart-o" slot="right"></van-icon>
        </van-nav-bar>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed:{
            ...mapState(['name'])
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
    }
</style>