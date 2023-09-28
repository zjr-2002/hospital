//路由
import {createRouter,createWebHistory} from 'vue-router'

import home from '@/pages/home/index.vue'
import hospital from '@/pages/hospital/index.vue'

const routes = [
  //默认跳转
  { path: '/',redirect:'/home' },
  { path: '/home', name: 'home', component: home },
  { path: '/hospital', component: hospital },
]


export default createRouter({
  history:createWebHistory(),
  routes,
  //滚动行为
  scrollBehavior(){return{left:0,top:0}
  }
})