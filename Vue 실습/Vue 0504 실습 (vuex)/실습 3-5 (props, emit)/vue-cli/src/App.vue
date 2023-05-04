<template>
  <div id="app">
  <h1>App</h1>
  <input type="text" v-model="appData">
  <p>appData : {{ appData }}</p>
  <p>parentData : {{ parentData }}</p>
  <p>childData : {{ childData }}</p>
  <AppParent :app-data="appData" @parentChanged="parentChanged" @childChanged="childChanged"></AppParent>
  </div>
</template>

<script>
import AppParent from "@/components/AppParent"

export default {
  name: 'App',
  data() {
    return {
    appData: "",
    parentData: "",
    childData: "",
    }
  },
  components: {
    AppParent,
  },
  methods: {
    parentChanged(parentData) {
      this.parentData = parentData   
    },
    childChanged(childData) {
      this.childData = childData 
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
  border: 3px dotted skyblue;
}
</style>
