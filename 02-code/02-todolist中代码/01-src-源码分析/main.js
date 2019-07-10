// 引入Vue
import Vue from 'vue'
// 引入父级组件
import App from './App.vue'
// 干掉不想要的提交
// Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  //选择器
  el: '#app',
  //注册组件
  components: { App, },
  //注册模版
  template: '<App/>'
})
