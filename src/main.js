import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAxios from 'axios'
// import VueAxios from 'vue-axios'
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import '@/permission' // 权限
import '@/assets/icon/iconfont.css' // icon图标

Vue.config.productionTip = false
Vue.prototype.$axios = VueAxios // 全局注册，使用方法为:this.$axios

// 注册elementui
Vue.use(ElementUI, VueAxios)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
