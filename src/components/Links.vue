<script setup lang="ts">
import LinkCard from "./LinkCard.vue";
import { watch, ref, onMounted, defineProps, toRefs } from "vue";
import axios from "axios";
import { useSearchStore } from "@/stores/search";
import { storeToRefs } from "pinia";

const data = ref([]);
const itemRefs = ref([]);
const selectedFilter = ref(null);
const store = useSearchStore();
const { search } = storeToRefs(store);

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

const getFiltered = async (filter) => {
  const apiUrl = import.meta.env.VITE_APP_APIBASEURL;

  const hasSearchTerm = search && search != "";
  if (!filter) filter = "name";

  const getByFilter = hasSearchTerm
    ? apiUrl + `/links/getByFilter?filter=${filter}&search=${search.value}`
    : apiUrl + `/links/getByFilter?filter=${filter}`;
  await axios
    .get(getByFilter)
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

const filterBy = (filter) => {
  selectedFilter.value = filter;
  getFiltered(filter);
};

let origin = "";

onMounted(() => {
  fetchData();
  origin = window.location.origin;
});

watch(search, (newValue) => {
  getFiltered(selectedFilter.value);
  console.log(selectedFilter);
});
</script>

<template>
  <div class="filters">
    Filter by:
    <v-chip
      @click="filterBy('name')"
      :class="selectedFilter == 'name' ? 'selected' : ''"
      variant="outlined"
    >
      Name </v-chip
    ><v-chip
      @click="filterBy('clicks')"
      :class="selectedFilter == 'clicks' ? 'selected' : ''"
      variant="outlined"
    >
      Clicks </v-chip
    ><v-chip
      @click="filterBy('views')"
      :class="selectedFilter == 'views' ? 'selected' : ''"
      variant="outlined"
    >
      Views
    </v-chip>
    <v-chip
      @click="filterBy('updated')"
      :class="selectedFilter == 'updated' ? 'selected' : ''"
      variant="outlined"
    >
      Recently updated
    </v-chip>
  </div>

  <div ref="itemRef" v-for="link in data" style="width: 100%">
    <LinkCard
      :name="link.name"
      :shortUrl="origin + '/link/' + link.code"
      :trueUrl="link.url"
      :views="link.views"
      :linkId="link.id"
      @linkDeleted="handleLinkDeleted"
    />
  </div>
</template>

<style scoped>
.filters {
  margin-bottom: 1rem;
}

.v-chip {
  margin: 0.25rem;
  cursor: pointer;
  background-color: white;
}

.v-chip:hover {
  background: lightgrey;
}

.selected {
  background-color: lightgrey;
}
</style>
