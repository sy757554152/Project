import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Category from '../views/Category'
import Cart from '../views/Cart'
import Mine from '../views/Mine'
import LoginMine from '../views/LoginMine'
import ProductDetail from '../views/ProductDetail'
import ShopFooter from '../components/ShopFooter'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components:{
      default:Home,
      'shop-footer':ShopFooter
    }
  },
  {
    path:'/category',
    name:'category',
    components:{
      default:Category,
      'shop-footer':ShopFooter
    }
  },
  {
    path:'/cart',
    name:'cart',
    components:{
      default:Cart,
      'shop-footer':ShopFooter
    }
  },
  {
    path:'/mine',
    name:'mine',
    components:{
      default:Mine,
      'shop-footer':ShopFooter
    }
  },{
    path:'/detail/:id',
    name:'detail',
    component:ProductDetail
  },{
    path:'/mine/:loginName',
    name:'login',
    components:{
      default:LoginMine,
      'shop-footer':ShopFooter
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
