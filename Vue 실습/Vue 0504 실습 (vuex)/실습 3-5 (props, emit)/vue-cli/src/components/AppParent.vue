<template>
  <div id="parent">
  <h1>AppPaernt</h1>
  <input type="text" v-model="parentData" @input="parentChanged">
  <p>appData : {{ appData }}</p>
  <p>parentData : {{ parentData }}</p>
  <p>childData : {{ childData }} </p>
  <AppChild :app-data="appData" :parent-data="parentData" @childChanged="childChanged"></AppChild>
  </div>
</template>

<script>
import AppChild from "@/components/AppChild"

export default {
  name: "AppParent",
  components: {
    AppChild,
  },
  props: {
    appData: String
  },
  data() {
    return {
      parentData: "",
      childData: "",
    }
  },
  methods: {
    parentChanged() {
      this.$emit("parentChanged", this.parentData)
    },
    childChanged(childData) {
      this.childData = childData
      this.$emit("childChanged", childData)
      
    }
  }
}
</script>

<style>
#parent {
  border: 3px dotted blueviolet;
}
</style>