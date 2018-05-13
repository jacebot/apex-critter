import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Base from "./views/Base.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "base",
      component: Base
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
