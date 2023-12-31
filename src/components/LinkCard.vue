<script setup lang="ts">
import { ref, onMounted } from "vue";
import DeleteDialog from "./DeleteDialog.vue";
import { defineProps, defineEmits } from "vue";
import axios from "axios"; // Certifique-se de importar o axios
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps<{
  name: string;
  shortUrl: string;
  trueUrl: string;
  views: number;
  linkId: number;
}>();

const dialog = ref(false);
const emit = defineEmits(["linkDeleted"]);

const deleteLink = async () => {
  const apiUrl = import.meta.env.VITE_APP_APIBASEURL;

  const deleteEndpoint = apiUrl + "/links/delete/" + props.linkId.toString();
  await axios
    .delete(deleteEndpoint)
    .then((response) => {
      emit("linkDeleted", props.linkId);
    })
    .catch((error) => {
      console.error("Erro na solicitação da API:", error);
    });
};

const openDialog = () => {
  dialog.value = true;
};

const closeDialog = () => {
  dialog.value = false;
};

const onConfirm = () => {
  deleteLink();
  closeDialog();
};

const onClose = () => {
  closeDialog();
};

const editLink = () => {
  router.push(`/edit/${props.linkId}`);
};
</script>

<template>
  <div class="wrapper">
    <div class="text">
      <span class="name">
        {{ name }}
      </span>

      <a :href="shortUrl" class="url">
        {{ shortUrl }}
      </a>
    </div>

    <div class="actions">
      <div class="views">
        <span class="views-number">{{ views }}</span> <v-icon icon="mdi-poll" />
      </div>

      <button class="no-color" :ripple="false" variant="plain">
        <v-icon style="cursor: pointer" icon="mdi-content-copy" />
      </button>

      <button
        @click="editLink"
        class="no-color"
        :ripple="false"
        variant="plain"
      >
        <v-icon style="cursor: pointer" icon="mdi-square-edit-outline" />
      </button>

      <button
        @click="openDialog"
        class="no-color"
        :ripple="false"
        variant="plain"
      >
        <DeleteDialog :dialog="dialog" @close="onClose" @confirm="onConfirm">
          Tem certeza que deseja apagar o link?
        </DeleteDialog>
        <v-icon style="cursor: pointer" icon="mdi-trash-can-outline" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  background: white;
  border-radius: 10px;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.5rem;

  justify-content: space-between;
  align-items: center;
}

.name {
  font-size: 1.25rem;
  font-weight: bold;
}

.text {
  display: flex;
  flex-direction: column;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: #829cb6;
}

.views {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 2rem;
  font-size: 0.8rem;
}

.views-number {
  margin-right: 0.35rem;
  margin-top: 0.3rem;
}

.v-btn {
  min-width: 0px;
}

button {
  transition: none;
  background-color: inherit;
  border: none;
  color: #829cb6;
}
</style>
