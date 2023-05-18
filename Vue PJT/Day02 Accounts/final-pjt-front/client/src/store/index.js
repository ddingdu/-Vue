import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

const API_URL = "http://127.0.0.1:8000";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    articles: [],
    token: null,
    isLoggedIn: false,
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false;
    },
  },
  mutations: {
    //auth
    SAVE_TOKEN(state, token) {
      state.token = token;
      router.push({ name: "HomeView" });
    },
    RESET_STATE(state) {
      state.username = "";
      state.password = "";
      console.log("로그아웃 성공!! vuex 뮤테이션이에요");
    },
    // 로그인 상태 변경을 처리하는 뮤테이션
    SET_LOGIN_STATUS(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    GET_ARTICLES(state, articles) {
      state.articles = articles;
    },
  },
  actions: {
    getArticles(context) {
      axios({
        method: "get",
        url: `${API_URL}/articles/`,
        headers: {
          Authorization: `Bearer ${context.state.token}`
        }
      })
        .then((res) => {
          console.log(res, context)
          context.commit("GET_ARTICLES", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(context)
    },
    
    // signup(context, payload) {
    //   const username = payload.username
    //   const password1 = payload.password1
    //   const password2 = payload.password2

    // axios({
    //   method: 'post',
    //   url: "http://127:0.0.1:8000/auth/signup",
    //   // url: `${API_URL}/acounts/signup/`,
    //   data: { username, password1, password2 }
    // })
    // .then(res => {
    //   console.log(res.data)
    // context.commit('SIGN_UP', res.data.key)
    // }
    // )
    // .catch(err => console.log(err))
    // }
  },
  modules: {},
});
