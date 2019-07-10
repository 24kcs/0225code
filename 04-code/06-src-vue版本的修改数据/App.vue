<template>
  <div>
    <h2>次数:{{count}},当前的数字是:{{evenOrOdd}}</h2>
    <button @click="increament">加的操作+</button>
    <button @click="decrement">减的操作-</button>
    <button @click="incrementIfOdd">奇数的时候相加+</button>
    <button @click="incrementAsync">异步的相加+</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //数据,数据的值可能随时改变,数据状态可能会随时改变---数据状态
      count: 0
    };
  },
  methods: {
    increament() {
      //数据的状态
      this.count++;
    },
    decrement() {
      //数据的状态
      this.count--;
    },
    incrementIfOdd() {
      if (this.count % 2 !== 0) {
        //数据的状态
        this.count++;
      }
    },
    incrementAsync() {
      setTimeout(() => {
        //数据的状态
        this.count++;
      }, 1000);
    }
  },
  computed: {
    evenOrOdd() {
      return this.count % 2 === 0 ? "偶数" : "奇数";
    }
  }
};
</script>
<style scoped>
</style>