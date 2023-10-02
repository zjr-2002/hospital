//路由
import {createRouter,createWebHistory} from 'vue-router'

import home from '@/pages/home/index.vue'
// import hospital from '@/pages/hospital/index.vue'

const routes = [
  //默认跳转
  { path: '/',redirect:'/home' },
  { path: '/home', name: 'home', component: home },
  { 
    path: '/hospital', 
    component: () =>import('@/pages/hospital/index.vue'),
    children:[
      {
        path: '', 
        component: () =>import('@/pages/hospital/register/index.vue')
      },
      {
        path: 'details', 
        component: () =>import('@/pages/hospital/details/index.vue')
      },
      {
        path: 'notice', 
        component: () =>import('@/pages/hospital/notice/index.vue')
      },
      {
        path: 'closure', 
        component: () =>import('@/pages/hospital/closure/index.vue')
      },
      {
        path: 'queryCancel', 
        component: () =>import('@/pages/hospital/query-cancel/index.vue')
      },
    ]
  },
]


export default createRouter({
  history:createWebHistory(),
  routes,
  //滚动行为
  scrollBehavior(){return{left:0,top:0}}
})