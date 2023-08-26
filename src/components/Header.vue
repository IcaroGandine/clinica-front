<script setup lang="ts">
defineProps<{
  msg: string;
}>();

import { useRouter } from "vue-router";
const router = useRouter();

const createLink = async () => {
  router.push("/create");
};

const searchLink = async () => {
  //  const apiUrl = import.meta.env.VITE_APP_APIBASEURL;
  // const deleteEndpoint = apiUrl + "/links/delete/" + props.linkId.toString();
  // await axios
  //   .delete(deleteEndpoint)
  //   .then((response) => {
  //     emit("linkDeleted", props.linkId);
  //   })
  //   .catch((error) => {
  //     console.error("Erro na solicitação da API:", error);
  //   });
};
</script>

<template>
  <header>
    <v-btn @click="searchLink" :ripple="false" variant="plain">
      <v-icon icon="mdi-magnify" />
    </v-btn>

    <input placeholder="Search or paste URL" />
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
