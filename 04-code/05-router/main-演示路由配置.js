
//引入Vue
import Vue from 'vue'
//引入App.vue
import App from './App.vue'

// import VueRouter from 'vue-router'
// //声明使用插件
// Vue.use(VueRouter)

// const router = new VueRouter({
//   routes:[
//     {path:'/地址',component:组件的名字}

//   ]
// })

//实例化Vue,并做相关的配置或者是注册插件
new Vue({
  el: '#app',
  components: {
    App
  },
  //创建模版
  template: '<App/>',
  //router  //挂载路由器---注册了路由----在某个组件中,this.$router访问路由器
})