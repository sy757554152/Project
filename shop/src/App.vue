<template>
  <div id="app">
    <shop-header></shop-header>
    <router-view></router-view>
    <shop-footer></shop-footer>
  </div>
</template>
<script>
import ShopHeader from './components/ShopHeader'
import ShopFooter from './components/ShopFooter'
export default {
  components:{
    ShopHeader,
    ShopFooter
  }
}
</script>>
<style lang="scss">

</style>
