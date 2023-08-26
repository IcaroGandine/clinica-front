<script setup lang="ts">
defineProps<{
  msg: string;
}>();

import { ref, onMounted } from "vue";
import axios from "axios"; // Certifique-se de importar o axios
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const urlValue = ref("");
const nameValue = ref("");
const codeValue = ref("");
const linkId = route.params.id;

const getLink = async () => {
  const apiUrl = import.meta.env.VITE_APP_APIBASEURL;

  const getByIdEndpoint = apiUrl + `/links/getById/${linkId}`;
  await axios
    .get(getByIdEndpoint)
    .then((response) => {
      urlValue.value = response.data.url;
      codeValue.value = response.data.code;
      nameValue.value = response.data.name;
    })
    .catch((error) => {
      console.error("Erro na solicitação da API:", error);
    });
};

const editLink = async () => {
  const apiUrl = import.meta.env.VITE_APP_APIBASEURL;

  const body = {
    url: urlValue.value,
    name: nameValue.value,
  };

  const editEndpoint = apiUrl + `/links/update/${linkId}`;
  await axios
    .put(editEndpoint, body)
    .then((response) => {
      router.push("/");
    })
    .catch((error) => {
      console.error("Erro na solicitação da API:", error);
    });
};

onMounted(getLink);
</script>

<template>
  <div class="container">
    <div>
      <p>Code</p>
      <input disabled v-model="codeValue" />
    </div>
    <div>
      <p>Url</p>
      <input v-model="urlValue" />
    </div>

    <div class="margin">
      <p>Name</p>
      <input v-model="nameValue" />
    </div>

    <button @click="editLink">Edit link</button>
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
