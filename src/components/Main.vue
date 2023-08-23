<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./Header.vue";
import Stats from "./Stats.vue";
import Links from "./Links.vue";
</script>

<template>
  <div class="bg">
    <Header />
    <div class="content-wrapper">
      <Stats />
      <Links />
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-color: #f7f8fb;
  height: 100vh;
  width: 100vw;
}

.content-wrapper {
  padding: 0 15rem 0 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
