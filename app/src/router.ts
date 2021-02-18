import Vue from "vue";
import Router from "vue-router";
import Reprendre from "./pages/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Reprendre",
      component: Reprendre
    }
  ]
});