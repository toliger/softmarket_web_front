import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Shop from "./views/Shop.vue";
import Cards from "./views/Cards.vue";

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
      path: "/shop/:id",
      name: "shop",
      component: Shop
    },
    {
      path: "/shop/:id/:subid",
      name: "Subshop",
      component: Shop
    },
    {
      path: "/cards",
      name: "Cards",
      component: Cards
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
