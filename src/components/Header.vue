<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <header>
    <div>test</div>
  </header>
</template>

<style scoped>
header {
  background: white;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
