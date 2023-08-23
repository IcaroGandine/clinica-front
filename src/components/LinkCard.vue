<script setup lang="ts">
defineProps<{
  name: string;
  shortUrl: string;
  trueUrl: string;
  views: number;
}>();
</script>

<template>
  <div class="wrapper">
    <div class="text">
      <span class="name">
        {{ name }}
      </span>

      <a href="" class="url">
        {{ shortUrl }}
      </a>
    </div>

    <div class="actions">
      <div class="views">
        <span class="views-number">{{ views }}</span> <v-icon icon="mdi-poll" />
      </div>

      <button class="no-color" :ripple="false" variant="plain">
        <v-icon style="cursor: pointer" icon="mdi-content-copy" />
      </button>

      <button class="no-color" :ripple="false" variant="plain">
        <v-icon style="cursor: pointer" icon="mdi-square-edit-outline" />
      </button>

      <button class="no-color" :ripple="false" variant="plain">
        <v-icon style="cursor: pointer" icon="mdi-trash-can-outline" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  background: white;
  border-radius: 10px;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.5rem;

  justify-content: space-between;
  align-items: center;
}

.name {
  font-size: 1.25rem;
  font-weight: bold;
}

.text {
  display: flex;
  flex-direction: column;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: #829cb6;
}

.views {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 2rem;
  font-size: 0.8rem;
}

.views-number {
  margin-right: 0.35rem;
  margin-top: 0.3rem;
}

.v-btn {
  min-width: 0px;
}

button {
  transition: none;
  background-color: inherit;
  border: none;
  color: #829cb6;
}
</style>
