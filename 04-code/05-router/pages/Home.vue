<template>
  <div>
    <h2>Home的</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link to="/home/news" class="router-link-exact-active">News</router-link>
      </li>
      <li>
        <router-link to="/home/message" class="router-link-exact-active">Message</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>