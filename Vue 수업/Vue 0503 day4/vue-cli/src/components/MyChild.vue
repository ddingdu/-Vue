<template>
  <div>
    <h3>This is child component</h3>
    <p>{{ staticProps }}</p>
    <p>{{ myProps }}</p>
    <button @click="childToParent">클릭!</button>
    <!-- 변수와 input창 연동시키기, 엔터키 눌렀다 뗄때 childInput 실행 -->
    <input type="text" v-model="childInputData" @keyup.enter="childInput">
  </div>
</template>

<script>
export default {
  name: 'MyChild',
  data: function () {
    return {
      childInputData: null,
    }
  },
  props: {
    staticProps: String,
    myProps: String,
  },
  methods: {
    childToParent: function() {
      this.$emit('child-to-parent', 'child Data')
    },
    // 이벤트를 발생 시킴, 사용자가 입력한 데이터를 받아서 보내줌
    childInput: function() {
      this.$emit('child-input', this.childInputData)
      this.childInputData=""
    }
  }
}
</script>

<style>
  
</style>
