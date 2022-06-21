import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import('./components/main/main.vue')
  },
  // Sub Default
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
  },
  // Request Form
  {
    path: "/ThanksPhoto",
    name: "ThanksPhoto",
    component: () => import('./components/request/thanks/thanksRequestPhoto.vue')
  },
  {
    path: "/ThanksWord",
    name: "ThanksWord",
    component: () => import('./components/request/thanks/thanksRequestWord.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;