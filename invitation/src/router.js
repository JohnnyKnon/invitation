import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "App",
    component: () => import('./App.vue')
  },
  {
    path: "/Invite",
    name: "Invite",
    component: () => import('./invite.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;