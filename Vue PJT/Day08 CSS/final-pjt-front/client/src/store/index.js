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
      state.user = user
      console.log(state.user)
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
        this.commit('SAVE_USER', res.data)
        // console.log(state.user)

      });
    },
    // RESET_STATE(state) {
    //   state.token = null; // 토큰 초기화
    //   state.username = "";
    //   state.password = "";
    //   console.log("로그아웃 성공!! vuex 뮤테이션이에요");
    // },
    // 로그인 상태 변경을 처리하는 뮤테이션
    SET_LOGIN_STATUS(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    // SEARCH_MOVIE(state, movies) {
    //   state.search_movies = movies
    // },
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
    signUp(context, data) {
      context.commit("SAVE_TOKEN", data.access);
    },
    login(context, data) {
      context.commit("SAVE_TOKEN", data.access);
      context.commit("SET_LOGIN_STATUS", true); // 로그인 상태 변경
    },
    // search_movie(context, query) {
    //   const BASE_URL = "http://127.0.0.1:8000/movies/search"
    //   axios.post(BASE_URL, {
    //     params: {
    //       query: query,
    //     }
    //   })
    //   .then((response) => {
    //     const movies = response.data
    //     context.commit("SEARCH_MOVIE", movies)
    //     if (router.currentRoute.name !== "SearchView") {
    //       router.push({name:"SearchView"})
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // },
    // login(context, credentials) {
    //   return new Promise((resolve, reject) => {
    //     axios
    //       .post(`${API_URL}/auth/login/`, credentials)
    //       .then((response) => {
    //         const token = response.data.token;
    //         context.commit('SAVE_TOKEN', token); // 토큰 저장
    //         context.commit('SET_LOGIN_STATUS', true); // 로그인 상태 변경
    //         resolve();
    //       })
    //       .catch((error) => {
    //         reject(error);
    //       });
    //   });

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
