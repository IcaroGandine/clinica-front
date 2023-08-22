<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <div class="bg">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped>
.bg {
  background-color: #f7f8fb;
  height: 100vh;
  width: 100vw;
}
</style>
