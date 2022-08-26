import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import Reg from "../views/registration.vue";
import donate from "../views/page.vue";
import Contribute from "../views/contri.vue"

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/contri",
    name: "Contri",
    component: Contribute,
  },
  {
    path: "/donate",
    name: "donate",
    component: donate,
  },
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/reg",
    name: "registration",
    component: Reg

  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
