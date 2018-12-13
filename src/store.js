import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import { users } from "./users.module";
import { auth } from "./auth.module";

const vuexPersist = new VuexPersist({
  key: "my-app",
  storage: localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    auth
  },
  state: {
    basket: []
  },
  mutations: {
    addarticle(state, payload) {
      for (let i in state.basket) {
        if (state.basket[i].id == payload) {
          state.basket[i].amount++;
          return;
        }
      }
      state.basket.push({ id: payload, amount: 0 });
    },
    removearticle(state, payload) {
      let res = [];
      for (let i in state.basket) {
        if (state.basket[i].id != payload) res.push(state.basket[i]);
      }
      state.basket = res;
    }
  },
  actions: {
    addarticle: async ({ commit }, payload) => {
      commit("addarticle", payload);
      return true;
    },
    removearticle: async ({ commit }, payload) => {
      commit("removearticle", payload);
      return true;
    }
  },
  plugins: [vuexPersist.plugin]
});
