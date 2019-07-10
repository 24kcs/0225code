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
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    // count(){
    //   return this.$store.state.count
    // },
    // evenOrOdd(){
    //   return this.$store.getters.evenOrOdd
    // }
    //包---容器---数组,对象
    //拆包------var arr1=[1,2,3] var arr2=[...arr1]  ----
    //打包:function f1(...args){}   f1(1,2,3,4,5)
    //var obj={name:'小棉花'} console.log(obj.name) console.log(obj["name"])
    ...mapState(["count"]), //count:()=>{return this.$store.state["count"]}
    ...mapGetters(["evenOrOdd"])
  },
  methods: {
    ...mapMutations({
      increment: "INCREMENT",
      decrement: "DECREMENT"
    }),
    ...mapActions(["incrementIfOdd", "incrementAsync"])
  }
};
</script>
<style scoped>
</style>