<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName" />
      <button @click="search">Search</button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      searchName: ""
    };
  },
  methods: {
    //搜索的方法---------当前的按钮的搜索的方法
    search() {
      //获取输入的内容,并去掉空格
      const searchName = this.searchName.trim();
      //向actions提交,action的分发
      this.$store.dispatch("search", searchName);
    }
  }
};
</script>
<style scoped>
</style>