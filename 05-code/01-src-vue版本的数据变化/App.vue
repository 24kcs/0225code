<template>
  <div>
    <h2>次数:{{count}},奇数或者偶数:{{evenOrOdd}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">奇数+</button>
    <button @click="incrementAsync">异步+</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      //数据状态
      count:0
    }
  },
  methods: {
    increment(){
      this.count++
    },
    decrement(){
      this.count--
    },
    incrementIfOdd(){
      if(this.count%2!==0){
        this.count++
      }
    },
    incrementAsync(){
      setTimeout(() => {
        this.count++
      }, 1000);
    }
  },
  computed: {
    evenOrOdd(){
      return this.count%2===0?'偶数':'奇数'
    }
  }
};
</script>
<style scoped>
</style>