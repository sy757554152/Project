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
import {GoodsAction,Card ,
  GoodsActionIcon,SubmitBar ,
  GoodsActionButton,List,PullRefresh  ,Sidebar, SidebarItem, Row, Col,NavBar,Icon,Tabbar,TabbarItem,Swipe, SwipeItem,Lazyload,Loading,Tab,Tabs,Field,CellGroup,Button,Toast} from 'vant';
Vue.use(SubmitBar ).use(Card).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(List).use(PullRefresh).use(Sidebar).use(SidebarItem).use(Row).use(Col).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Loading).use(Tab).use(Tabs).use(Field).use(CellGroup).use(Button).use(Toast);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
