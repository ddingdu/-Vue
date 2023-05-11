<template>
  <div id="app">
    <h1>캐릭터 진화 단계 가이드</h1>
    <nav class="d-flex">
      <router-link class="button" to='/'>Home</router-link>
      <router-link class="button" :to="{ name:'happeed' }">Start</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default{
  name: "app",
}
</script>

<style>
#app {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
}

.d-flex {
  display: flex;
}

.button {
  text-decoration: none;
  border: 2px solid #fad714;
  padding: 10px;
  margin: 10px;
}

</style>
