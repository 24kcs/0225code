<template>
  <ul>
    <li>ID:{{$route.params.id}}</li>
    <li>TITLE:{{detail.title}}</li>
    <li>CONTENT:{{detail.content}}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      messageDetail: [
        { id: 1, title: "message001", content: "content001" },
        { id: 3, title: "message003", content: "content003" },
        { id: 5, title: "message005", content: "content005" }
      ],
      detail: {}
    };
  },
  //界面显示之后
  mounted() {
    //字符串的类型
    //坑------在mounted中只能获取一次的id值,其他的获取不到
     this.showDetail(this.$route);
  },
  watch: {
    $route(val) {
      this.showDetail(val);
    }
  },
  methods: {
    showDetail(val) {
      const id = val.params.id;
      this.detail = this.messageDetail.find(detail => detail.id === +id);
    }
  }
};
</script>
<style scoped>
</style>