import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/js/rem.js'
import '@/assets/css/reset.css'
import '@/mock/mock.js'
//vant完全引入
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant);
import { NavBar,Icon,Tabbar,TabbarItem,Swipe, SwipeItem,Lazyload,Loading  } from 'vant';
Vue.use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Loading);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
