import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import bank from "./components/bank.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/bank/:bank_id",
      name: "bank",
      component: bank
    },
  ]
});
