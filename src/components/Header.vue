<script setup lang="ts">
defineProps<{
  msg: string;
}>();

import { useRouter } from "vue-router";
import { ref, onMounted, watch } from "vue";
import { useSearchStore } from "@/stores/search";
const router = useRouter();
const store = useSearchStore();

const inputValue = ref("");

const searchValue = store.search;

const createLink = async () => {
  router.push("/create");
};

watch(inputValue, (newValue) => {
  store.search = newValue;
});
</script>

<template>
  <header>
    <v-btn @click="emitSearch" :ripple="false" variant="plain">
      <v-icon icon="mdi-magnify" />
    </v-btn>

    <input v-model="inputValue" placeholder="Search URL or name" />
    <v-btn @click="createLink" :ripple="false" variant="plain">
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
