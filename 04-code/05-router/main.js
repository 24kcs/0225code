
//引入Vue
import Vue from 'vue'
//引入App.vue
import App from './App.vue'

//引入router
import router from './router'


//实例化Vue,并做相关的配置或者是注册插件
new Vue({
  el: '#app',
  components: {
    App
  },
  //创建模版
  template: '<App/>',
  router   //挂载路由器,注册--------在组件中,都可以使用this.$router对象
})