<script setup lang="ts">
defineProps<{
  msg: string;
}>();

import { ref, onMounted } from "vue";
import StatBlock from "./StatBlock.vue";
import axios from "axios";

const el = ref();

onMounted(() => {
  fetchData();
});

const fetchData = () => {
  const apiUrl = "http://localhost:8000/api/links/summary"; // Substitua pela URL real da sua API
  axios
    .get(apiUrl)
    .then((response) => {
      this.data = response.data;
    })
    .catch((error) => {
      console.error("Erro na solicitação da API:", error);
    });
};
</script>

<template>
  <div class="wrapper">
    <p class="stats-title">STATS</p>
    <div class="stats">
      <div class="stat">
        <StatBlock iconName="mdi-link-variant" name="Links" content="71" />
      </div>
      <div class="stat">
        <StatBlock iconName="mdi-eye-outline" name="Views" content="249" />
      </div>
      <div class="stat">
        <StatBlock
          iconName="mdi-cursor-default-click-outline"
          name="Clicks"
          content="53"
        />
      </div>
      <div class="stat">
        <StatBlock
          iconName="mdi-chart-areaspline"
          name="Avg. CTR"
          content="21%"
        />
      </div>
      <div class="stat">
        <StatBlock
          iconName="mdi-clock-time-five-outline"
          name="Avg. Time"
          content="6.37s"
        />
      </div>
    </div>

    <hr />
  </div>
</template>

<style scoped>
.wrapper {
}
.stat {
  padding-right: 6rem;
}

.stat:last-child {
  padding-right: 0px;
}

.stats {
  display: flex;
  flex-direction: row;
}

.stats-title {
  font-weight: bolder;
  font-size: 1.25rem;
  color: #56799b;

  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

hr {
  height: 1px;
  background-color: #ccc;
  border: none;
  margin-top: 1.5rem;
}
</style>
