import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import('./components/main/main.vue')
  },
  {
    path: "/Invite",
    name: "Invite",
    component: () => import('./components/invite/invite.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;