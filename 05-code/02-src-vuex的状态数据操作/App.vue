<template>
  <div>
    <h2>次数:{{$store.state.count}},奇数或者偶数:{{$store.getters.evenOrOdd}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">奇数+</button>
    <button @click="incrementAsync">异步+</button>
  </div>
</template>
<script>
export default {
  methods: {
    //加的操作
    increment() {
      //显示提交
      this.$store.commit('INCREMENT')
    },
    decrement() {
      //显示提交----向mutations中
      this.$store.commit('DECREMENT')
    },
    incrementIfOdd() {
      //隐式提交-----向actions中
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync')
    }
  }
};
</script>
<style scoped>
</style>