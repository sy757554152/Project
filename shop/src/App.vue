<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <router-view name="shop-footer"></router-view>
  </div>
</template>

<script>
export default {

}
</script>>
<style lang="scss">

</style>
