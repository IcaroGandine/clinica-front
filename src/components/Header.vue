<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <header>
    <v-btn :ripple="false" variant="plain">
      <v-icon icon="mdi-magnify" />
    </v-btn>

    <input placeholder="Search or paste URL" />
    <v-btn :ripple="false" variant="plain">
      <v-icon icon="mdi-plus" />
    </v-btn>
  </header>
</template>

<style scoped>
header {
  background: white;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

input {
  height: 2rem;
  border: 0px;
  background-color: #eff2f6;
  border-radius: 0.25rem;
  min-width: 35rem;
  padding: 0.5rem;
  text-align: center;
}

input:focus::placeholder {
  color: transparent;
}
</style>
