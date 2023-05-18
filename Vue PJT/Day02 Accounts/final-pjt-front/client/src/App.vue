<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="{ name: 'HomeView' }"
          >Reelix</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link :to="{ name: 'HomeView' }" class="nav-link m-2"
              >Home</router-link
            >
            <router-link
              :to="{ name: 'LogInView' }"
              class="nav-link m-2 btn btn-primary"
              v-if="!isLoggedIn"
              >로그인</router-link
            >
            <router-link :to="{ name: 'SignUpView' }" class="nav-link m-2" v-if="!isLoggedIn"
              >회원가입</router-link
            >
            <router-link :to="{ name: 'ArticleView' }" class="nav-link m-2"
              >후기게시판</router-link
            >
            <b-button variant="secondary" @click="logout" v-if="isLoggedIn"
              >로그아웃</b-button
            >
          </div>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.username = "";
      this.password = "";

      this.$store.commit("RESET_STATE");
      this.$store.commit("SET_LOGIN_STATUS", false);
      console.log("로그아웃 성공!!");
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.d-flex {
  display: flex;
}
</style>
