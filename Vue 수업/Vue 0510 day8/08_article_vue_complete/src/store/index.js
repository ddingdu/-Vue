import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
// import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    article_id : 1,
    // 데이터가 쌓일 배열
    articles: [
      // {
      //   id: 1,
      //   title: 'title1',
      //   content: 'content1',
      //   createdAt: new Date().getTime(),
      // }
    ]
  },
  getters: {
  },
  mutations: {
    CREATE_ARTICLE(state, article){
      state.articles.push(article)
      // 자동으로 pk 1씩 증가하도록 추가
      state.article_id = state.article_id + 1
    },
    DELETE_ARTICLE(state, id){
      state.articles = state.articles.filter((article)=>{
        return !(article.id===id)
      })
    }
  },
  actions: {
    createArticle(context, payload){
      const article = {
        id: context.state.article_id,
        title: payload.title,
        content: payload.content,
        createdAt: new Date().getTime(),
      }
      context.commit('CREATE_ARTICLE', article) 
    }
  },
  modules: {
  }
})