<script setup lang="ts">
import LinkCard from "./LinkCard.vue";
import { ref, onMounted } from "vue";

defineProps<{
  dialog: boolean;
}>();

const emit = defineEmits(["confirm", "close"]);
const confirm = () => {
  emit("confirm");
};

const close = () => {
  emit("close");
};
</script>

<template>
  <v-dialog :modelValue="dialog" width="auto">
    <v-card>
      <v-card-text>
        <slot></slot>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="close">Não</v-btn>
        <v-btn color="primary" @click="confirm">Sim</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
