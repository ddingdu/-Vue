import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'message in store',
  },
  //
  getters: {  // computed 와 비슷한 기능, 계산된 값
    messageLength(state) {
      return state.message.length
    },
    doubleLength(state, getters) {
      return getters.messageLength * 2
    }
  },
  mutations: {
    // 상태를 바꾸기 위해 state 들어감
    CHANGE_MESSAGE(state, payload) {
      // console.log(state)
      // console.log(payload)

      // 직접적으로 접근해서 변수에 담긴 데이터를 바꿔줌
      state.message = payload
    }
  },
  actions: {
    // message : 앱뷰에서 넘겨준 new Message
    changeMessage(context, message) {
      // console.log(message)
      // CHANGE MESSAGE 라는 mutaiton
      context.commit('CHANGE_MESSAGE', message)
    }
  },
  modules: {
  }
})
