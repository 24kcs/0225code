<template>
  <div>
    <ul>
      <li v-for="m in message" :key="m.id">
        <router-link replace :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>---
        <button @click="pushShow(m.id)">push查看</button>
        ---
        <button @click="replaceShow(m.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.message = [
        { id: 1, title: "message001" },
        { id: 3, title: "message003" },
        { id: 5, title: "message005" }
      ];
    }, 1000);
  },
  methods: {
    pushShow(id) {
      //编程式 
      this.$router.push(`/home/message/detail/${id}`);
    },
    replaceShow(id) {
      this.$router.replace(`/home/message/detail/${id}`);
    }
  }
};
</script>
<style scoped>
</style>