import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Shop from "@/components/Shop";

Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/shop/:id",
      name: "Shop",
      component: Shop
    }
  ]
});

export default router;
