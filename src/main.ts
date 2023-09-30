import { createApp } from 'vue'
import '@/style/reset.scss'
import App from '@/App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
// 引入dark
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
})
// 注册全局组件

app.component('HospitalTop',HospitalTop)
app.component('HospitalBottom',HospitalBottom)
app.use(router)
// app.use(ElementPlus)
app.mount('#app')

