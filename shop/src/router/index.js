import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home'
// import Category from '../views/Category'
// import Cart from '../views/Cart'
// import Mine from '../views/Mine'
let Home=()=> import('../views/Home')
let Category=()=> import('../views/Category')
let Cart=()=> import('../views/Cart')
let Mine=()=> import('../views/Mine')
import LoginMine from '../views/LoginMine'
import ProductDetail from '../views/ProductDetail'
import ShopFooter from '../components/ShopFooter'
import Error from '../views/Error'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components:{
      default:Home,
      'shop-footer':ShopFooter
    },
    meta:{
      keepAlive: true
    }
  },
  {
    path:'/category',
    name:'category',
    components:{
      default:Category,
      'shop-footer':ShopFooter
    },
    meta:{
      keepAlive: true
    }
  },
  {
    path:'/cart',
    name:'cart',
    components:{
      default:Cart,
      'shop-footer':ShopFooter
    },
    meta:{
      keepAlive: true
    }
  },
  {
    path:'/mine',
    name:'mine',
    components:{
      default:Mine,
      'shop-footer':ShopFooter
    },
    meta:{
      keepAlive: true
    }
  },
  {
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
  },{
    path:'*',
    component:Error
  }
]

const router = new VueRouter({
  routes
})

export default router
