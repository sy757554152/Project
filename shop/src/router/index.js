import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Category from '../views/Category'
import Cart from '../views/Cart'
import Mine from '../views/Mine'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/category',
    name:'category',
    component:Category
  },
  {
    path:'/cart',
    name:'cart',
    component:Cart
  },
  {
    path:'/mine',
    name:'mine',
    component:Mine
  }
]

const router = new VueRouter({
  routes
})

export default router
