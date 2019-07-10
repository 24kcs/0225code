//引入
import Vue from 'vue'
//引入路由对象
import VueRouter from 'vue-router'

import routes from './routes.js'
//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes
})
