import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";
import Create from "../components/Create.vue";
import Edit from "../components/Edit.vue";
import Link from "../components/Link.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Main },
    { path: "/create", component: Create },
    { path: "/edit/:id", component: Edit },
    { path: "/link/:code", component: Link },
  ],
});

export default router;
