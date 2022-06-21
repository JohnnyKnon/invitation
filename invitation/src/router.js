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
  {
    path: "/Bugo",
    name: "Bugo",
    component: ()=> import('./components/bugo/bugo.vue')
  },
  {
    path: "/Thanks",
    name: "Thanks",
    component: () => import('./components/thanks/thanks.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;