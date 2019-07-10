

//引入Vue
import Vue from 'vue'
//引入App.vue
import App from './App.vue'

//事件总线(无非就是给Vue的prototype上添加一个属性,只不过这个属性的值是实例对象)
Vue.prototype.$bus = new Vue()

//实例化Vue,并做相关的配置或者是注册插件
new Vue({
  el: '#app',
  components: {
    App
  },
  //创建模版
  template: '<App/>'
})