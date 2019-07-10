<template>
  <div>
    <h2>我是健哥</h2>
    <Test/>
  </div>
</template>

<script>
//引入组件
import Test from './components/Test.vue'
export default {
  name:'App',
  //注册组件
  components: {
    Test
  }
}
</script>

<style scoped>
  h2{
    background-color: pink;
    color:red;
  }
</style>

