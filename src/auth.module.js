import SIGNIN from "@/graphql/Signin.gql";
import REGISTER from "@/graphql/Register.gql";
import { defaultClient as apolloClient } from "@/vue-apollo";
import VueJwtDecode from "vue-jwt-decode";

let initialState = {
  status: { loggedIn: false },
  token: null,
  user: {}
};
const token = localStorage.getItem("token");
if (token) {
  let decode = VueJwtDecode.decode(token);
  if (decode.exp > Date.now() / 1000) {
    initialState = {
      status: { loggedIn: true },
      token,
      user: {
        name: "John Doe",
        email: decode.email
      }
    };
  }
}

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    signinUser: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        apolloClient
          .mutate({
            mutation: SIGNIN,
            variables: payload
          })
          .then(res => {
            localStorage.setItem("token", res.data.login);
            let user = VueJwtDecode.decode(res.data.login);
            commit("login", {
              name: "John Doe",
              mail: user.email
            });
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    registerUser: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        apolloClient
          .mutate({
            mutation: REGISTER,
            variables: payload
          })
          .then(({ data }) => {
            localStorage.setItem("token", data.register);
            commit("register", {
              token: data.register
            });
            resolve("ok");
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    logout({ commit }) {
      localStorage.removeItem("token");
      commit("logout");
    }
  },
  mutations: {
    login(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    register(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    logout(state) {
      state.status = { loggedIn: false };
      state.user = null;
    }
  },
  getters: {
    user: state => state.user,
    isLoggedIn: state => state.status.loggedIn
  }
};
