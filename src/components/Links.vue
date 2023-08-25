<script setup lang="ts">
import LinkCard from "./LinkCard.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const data = ref([]);
const itemRefs = ref([]);

const fetchData = async () => {
  const apiUrl = import.meta.env.VITE_APP_APIBASEURL;

  const getAll = apiUrl + "/links/getAll";
  await axios
    .get(getAll)
    .then((response) => {
      data.value = response.data;
      console.log(data);
    })
    .catch((error) => {
      console.error("Erro na solicitação da API:", error);
    });
};

const handleLinkDeleted = (linkId) => {
  console.log("event printed");
  fetchData();
};

let origin = "";

onMounted(() => {
  fetchData();
  origin = window.location.origin;
});
</script>

<template>
  <div ref="itemRef" v-for="link in data" style="width: 100%">
    <LinkCard
      :name="link.name"
      :shortUrl="origin + '/' + link.code"
      :trueUrl="link.url"
      :views="link.views"
      :linkId="link.id"
      @linkDeleted="handleLinkDeleted"
    />
  </div>
</template>

<style scoped></style>
