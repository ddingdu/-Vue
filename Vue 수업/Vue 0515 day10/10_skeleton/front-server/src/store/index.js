import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import router from '../router'

const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    articles: [
    ],
  },
  getters: {
  },
  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles
    },
    // signup & login -> 완료하면 바로 
    SAVE_TOKEN(state, token) {
      state.token = token
      router.push({ name: 'ArticleView' }) // store/index.js $router 접근 불가,, why?
    }
  },
  actions: {
    getArticles(context) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/articles/`,
      })
        .then((res) => {
        // console.log(res, context)
          context.commit('GET_ARTICLES', res.data)
        })
        .catch((err) => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
