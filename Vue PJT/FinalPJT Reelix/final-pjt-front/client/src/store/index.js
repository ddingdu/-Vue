import Vue from "vue";
import Vuex from "vuex";
// import router from "@/router";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const API_URL = "http://127.0.0.1:8000";

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    articles: [],
    token: null,
    isLoggedIn: false,
    user: null,
    searchresults: [],
    movies: [],
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false;
    },
  },
  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles;
    },
    SAVE_USER(state, user) {
      state.user = user;
      console.log(state.user);
    },
    //auth
    SAVE_TOKEN(state, token) {
      state.token = token;
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/accounts/userinfo/",
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      }).then((res) => {
        this.commit("SAVE_USER", res.data);
      });
    },

    SET_LOGIN_STATUS(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },

    GET_RESULTS(state, results) {
      state.searchresults = results
    },
    
  },
  actions: {
    getArticles(context) {
      axios({
        method: "get",
        url: `${API_URL}/articles/`,
        headers: {
          Authorization: `Bearer ${context.state.token}`,
        },
      })
        .then((res) => {
          console.log(res.data);
          context.commit("GET_ARTICLES", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getResults(context, movie) {
      context.commit('GET_RESULTS', movie)
    },
    signUp(context, data) {
      context.commit("SAVE_TOKEN", data.access);
    },
    login(context, data) {
      context.commit("SAVE_TOKEN", data.access);
      context.commit("SET_LOGIN_STATUS", true); 
    },
  },
  modules: {},
});
