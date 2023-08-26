<script setup lang="ts">
defineProps<{
  msg: string;
}>();

import { ref } from "vue";
import axios from "axios"; // Certifique-se de importar o axios
import { useRouter } from "vue-router";
const router = useRouter();

const urlValue = ref("");
const nameValue = ref("");

const createLink = async () => {
  const apiUrl = import.meta.env.VITE_APP_APIBASEURL;

  const body = {
    url: urlValue.value,
    name: nameValue.value,
  };

  const createEndpoint = apiUrl + "/links/create";
  await axios
    .post(createEndpoint, body)
    .then((response) => {
      router.push("/");
    })
    .catch((error) => {
      console.error("Erro na solicitação da API:", error);
    });
};
</script>

<template>
  <div class="container">
    <div>
      <p>Url</p>
      <input v-model="urlValue" />
    </div>
    <div class="margin">
      <p>Name</p>
      <input v-model="nameValue" />
    </div>

    <button @click="createLink">Create shortened link</button>
  </div>
</template>

<style scoped>
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

.container {
  margin: 2rem;
}

.margin {
  margin-bottom: 1rem;
}
</style>
