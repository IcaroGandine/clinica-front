import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";
import Create from "../components/Create.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Main },
    { path: "/create", component: Create },
  ],
});

export default router;
