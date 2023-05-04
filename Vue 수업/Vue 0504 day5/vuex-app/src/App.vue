<template>
  <div id="app">
    <h1>{{ message }}의 길이는 {{ messageLength }}</h1>
    <h2>곱하기 2 = {{ doubleLength }}</h2>

    <!-- 인풋태그에 입력한 데이터 바꿔주고 싶음 -->
    <input type="text" @keyup.enter="changeMessage" v-model="inputData">

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    // 사용자가 입력한 데이터
    return {
      inputData: null
    }
  },
  methods: {
    changeMessage() {
      const newMessage = this.inputData
      // changeMessage 라는 이름을 가진 액션을 실행
      this.$store.dispatch('changeMessage', newMessage)
      this.inputData = null
    }
  },
  components: {
    // HelloWorld
  },
  computed: {
    message() {
      return this.$store.state.message
    },
    messageLength() {
      return this.$store.getters.messageLength
    },
    doubleLength() {
      return this.$store.getters.doubleLength
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
