<template>
  <div id="child">
  <h1>AppChild</h1>
  <input type="text" v-model="childData" @input="childChanged">
  <p>appData : {{ appData }}</p>
  <p>parentData : {{ parentData }}</p>
  <p>childData : {{ childData }}</p>
</div>
</template>

<script>
export default {
  name: 'AppChild',
  data() {
    return {
      childData: "",
    }
  },
  props: {
    appData: String,
    parentData: String
  },
  methods: {
    childChanged() {
      this.$emit("childChanged", this.childData)
    }
  }
}
</script>

<style>
#child {
  border: 3px dotted palevioletred;
}
</style>