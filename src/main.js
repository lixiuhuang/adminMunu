// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.config.productionTip = false
let whiteList = ['/login']
let isLogin = true
router.beforeEach((to, from, next) => {
  if (isLogin) { // 判断登陆的
    next() // hack方法 确保addRoutes已完成
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next({path: `/login?redirect=${to.path}`}) // 否则全部重定向到登录页
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
