<script setup lang="ts">
defineProps<{
  name: string;
  content: string;
  iconName: string;
}>();
</script>

<template>
  <div class="wrapper">
    <div class="icon">
      <v-icon :icon="iconName" />
    </div>

    <div class="content">
      <p>{{ content }}</p>
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}

p {
  margin: 0;
  font-size: 1.75rem;
  font-weight: bolder;
}

.icon {
  display: flex;
  margin-right: 0.75rem;
  margin-top: 0.2rem;
  color: #95abc1;
}

span {
  color: #95abc1;
}
</style>
