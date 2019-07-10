<!--template这个模版中,只能出现一对根标签-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
//js代码
//引入组件
import HelloWorld from './components/HelloWorld'

export default {
  //组件的名字,是针对当前的这个.vue文件的
  name: 'App',
  //注册组件
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
