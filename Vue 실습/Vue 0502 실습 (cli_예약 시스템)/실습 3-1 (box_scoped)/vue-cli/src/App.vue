<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HomeView />
    <AboutView />
  </div>
</template>

<script>
import AboutView from './views/AboutView.vue'
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: {
    AboutView,
    HomeView,
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
