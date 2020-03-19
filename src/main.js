import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import '@/permission' // 权限
import '@/assets/icon/iconfont.css' // icon图标

Vue.config.productionTip = false
// 注册elementui
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
