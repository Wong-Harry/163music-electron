import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
