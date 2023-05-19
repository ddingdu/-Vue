<template>
  <div id="app">
    <!-- 네비게이션 바 -->
    <nav class="navbar navbar-expand-lg bg-light" style="height: 60px">
      <div class="container-fluid fs-6 fw-bold">
        <router-link class="navbar-brand mx-3 fs-3" :to="{ name: 'HomeView' }">
          Reelix
        </router-link>
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
        <div class="collapse navbar-collapse bg-light" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link :to="{ name: 'HomeView' }" class="nav-link m-2">
              <i class="material-icons">home</i>
              Home
            </router-link>
            <router-link
              :to="{ name: 'LogInView' }"
              class="nav-link m-2"
              v-if="!isLoggedIn"
              >Sign In</router-link
            >
            <router-link
              :to="{ name: 'SignUpView' }"
              class="nav-link m-2"
              v-if="!isLoggedIn"
            >
              Sign Up
            </router-link>
            <router-link :to="{ name: 'ArticleView' }" class="nav-link m-2"
              >Review</router-link
            >
            <b-button variant="secondary" @click="logout" v-if="isLoggedIn"
              >Logout</b-button
            >
          </div>
          <div class="container mb-3" id="search-bar">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-secondary" type="submit">
                Search
                <!-- <i class="material-icons">search</i>    -->
              </button>
            </form>
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
@font-face {
  font-family: "SUITE-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2")
    format("woff2");
  font-weight: 400;
  font-style: normal;
}
#app {
  font-family: "SUITE-Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #4e667e;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}
.d-flex {
  display: flex;
}

#search-bar {
  width: 300px;
}
</style>
