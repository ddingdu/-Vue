import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Happeed from '../views/Happeed.vue'
import Happling from '../views/Happling.vue'
import Happlossome from '../views/Happlossome.vue'
import Happlower from '../views/Happlower.vue'
import NotFound404 from '../views/NotFound404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/happeed',
    name: 'happeed',
    component: Happeed
  },
  {
    path: '/happling',
    name: 'happling',
    component: Happling
  },
  {
    path: '/happlossome',
    name: 'happlossome',
    component: Happlossome
  },
  {
    path: '/happlower',
    name: 'happlower',
    component: Happlower
  },
  {
    path: '*',
    redirect: '/404'
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
