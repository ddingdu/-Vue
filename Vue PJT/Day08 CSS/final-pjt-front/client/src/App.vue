<template>
  <div id="app">
    <!-- 네비게이션 바 -->
    <ul class="nav nav-tabs align-items-center">
      <li class="nav-item">
        <router-link :to="{ name: 'HomeView' }" class="nav-link m-2">
          <div class="d-flex justify-content-center">
            <i class="material-icons" style="color: #d99696">home</i>
            <!-- <span>Home</span> -->
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'ArticleView' }" class="nav-link m-2"
          >Review</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'ProfileView', params: { username: this.$store.state.user.username }}"
          class="nav-link m-2"
          style="color: #d99696"
          v-if="isLoggedIn"
          >Profile</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'LogInView' }"
          class="nav-link m-2"
          v-if="!isLoggedIn"
          >Sign In</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'SignUpView' }"
          class="nav-link m-2"
          v-if="!isLoggedIn"
          >Sign Up
        </router-link>
      </li>
      <li class="nav-item">
        <div
          class="nav-link m-2"
          style="color: #d99696"
          @click="logout"
          v-if="isLoggedIn"
        >
          Logout
        </div>
      </li>

      <!-- 서치바 -->

      <div class="container" id="search-bar">
        <form class="d-flex" role="search">
          <input placeholder="Search" /> <router-link :to="{ name: 'SearchMovieView' }">
          <button class="btn btn-outline-secondary" type="submit">
            <div class="d-flex justify-content-center">
              <span>Search</span>

             
                <i class="material-icons">search</i>
            </div>
          </button></router-link>
        </form>
      </div>

      <router-link
        class="navbar-brand mx-3 fs-3"
        style="color: #d99696; padding: 5px"
        :to="{ name: 'HomeView' }"
        ># Reelix
      </router-link>
    </ul>

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

<style scoped>
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

a {
  color: #d99696;
}

a.router-link-exact-active {
  color: #8d81a6;
}
.nav-link:hover {
  color: #8d81a6; /* Color for nav-link on hover */
}
.d-flex {
  display: flex;
}

#search-bar {
  width: 300px;
}
</style>
