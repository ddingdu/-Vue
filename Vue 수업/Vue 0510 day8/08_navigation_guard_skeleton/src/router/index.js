import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView.vue'
import LoginView from '@/views/LoginView.vue'
import DogView from '@/views/DogView.vue'
import NotFound404 from '@/views/NotFound404.vue'

Vue.use(VueRouter)

const isLoggedIn = true

const routes = [
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hello/:userName',
    name: 'hello',
    component: HelloView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter(to, from, next) {
      if (isLoggedIn === true) { //로그인 되어 있다면
        console.log('이미 로그인 함')
        next({ name: 'home'})
      } else { 
        next() // 로그인 안되어 있다면, 로그인 페이지로 이동 (원래 가려고 했던데가 Login 이니까)
      }
    }
  },
  {
    path: '/dog/:breed',
    name: 'dog',
    component: DogView,
  },
  {
    // 위에 해당하지 않다면(설정하지 않은 모든 url은 404페이지로!
    // (가장 아래 위치해야함)
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router/index.js
// router.beforeEach((to, from, next) => {
//   // CODE HERE
//   // console.log('to', to)
//   // console.log('from', from)
//   // console.log('next', next)

//   // 로그인 여부 판단
//   // const isLoggedIn = true // 로그인 됨
//   const isLoggedIn = false // 로그인 안됨

//   // 로그인이 필요한 페이지 지정 (authPages 라는 배열을 만들어서 hello 넣기)
//   // const authPages = ['hello', 'about', 'home']
//   const allowAuthPages = ['login']

//   // 앞으로 이동할 페이지(to)가 로그인이 필요한 페이지인지 확인 (to.name:가야할 페이지의 이름)
//   // const isAuthRequired = authPages.includes(to.name)
//   const isAuthRequired = !allowAuthPages.includes(to.name)

//   // 로그인 필요한 페이지인데, 로그인 안되어 있다면, Login으로 이동
//   if (isAuthRequired && !isLoggedIn) {
//     console.log('Login으로 이동!')
//     next({ name: 'login' })
//   } else { // 아니면 원래 가고싶은 곳으로 이동시키기
//     console.log('to로 이동!')
//     next()
//   }
// })
export default router
