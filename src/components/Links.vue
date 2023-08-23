<script setup lang="ts">
import LinkCard from "./LinkCard.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const data = ref(null);
const fetchData = async () => {
  const apiUrl = "http://localhost:8000/api/links/getAll"; // Substitua pela URL real da sua API
  await axios
    .get(apiUrl)
    .then((response) => {
      data.value = response.data;
      console.log(data);
    })
    .catch((error) => {
      console.error("Erro na solicitação da API:", error);
    });
};

onMounted(fetchData);
</script>

<template>
  <div v-for="link in data" style="width: 100%">
    <LinkCard
      :name="link.name"
      :shortUrl="'localhost:5173/' + link.code"
      :trueUrl="link.url"
      :views="link.views"
    />
  </div>
</template>

<style scoped></style>
