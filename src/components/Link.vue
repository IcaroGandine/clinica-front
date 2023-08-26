<script setup lang="ts">
defineProps<{
  msg: string;
}>();

import { ref, onMounted } from "vue";
import axios from "axios"; // Certifique-se de importar o axios
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const linkCode = route.params.code;

const link = ref(null);

const getByCode = async () => {
  const apiUrl = import.meta.env.VITE_APP_APIBASEURL;

  const getByCodeEndpoint = apiUrl + `/links/getByCode/${linkCode}`;
  await axios
    .get(getByCodeEndpoint)
    .then((response) => {
      link.value = response.data;
      increment();
    })
    .catch((error) => {
      console.error("Erro na solicitação da API:", error);
    });
};

const increment = async () => {
  const apiUrl = import.meta.env.VITE_APP_APIBASEURL;

  const incrementEndpoint = apiUrl + `/links/increment-clicks/${link.value.id}`;
  await axios
    .put(incrementEndpoint)
    .then((response) => {
      window.location.href = link.value.url;
    })
    .catch((error) => {
      console.error("Erro na solicitação da API:", error);
    });
};

onMounted(() => {
  getByCode();
});
</script>

<template>Redirecting...</template>

<style scoped></style>
