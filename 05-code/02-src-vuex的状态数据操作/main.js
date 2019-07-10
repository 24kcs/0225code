
//引入Vue
import Vue from 'vue'
//引入App.vue
import App from './App.vue'
//实例化Vue,并做相关的配置或者是注册插件
//引入写好的仓库
import store from './vuex/store.js'
new Vue({
  el: '#app',
  components: {
    App
  },
  //创建模版
  template: '<App/>',
  store  //必须是store------注册了store,就可以在任何的组件中,通过this.$store.调用相关的方法
})