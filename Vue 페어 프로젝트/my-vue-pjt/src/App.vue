<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg">
      <div
        id="navi"
        class="container-fluid d-flex justify-content-center my-2 fs-5"
      >
        <router-link :to="{ name: 'movies' }" class="nav-link m-2"
          >Movie</router-link
        >
        |
        <router-link :to="{ name: 'random' }" class="nav-link m-2"
          >Random Pick</router-link
        >
        |
        <router-link :to="{ name: 'watchlist' }" class="nav-link m-2"
          >Wish List</router-link
        >
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@font-face {
  font-family: "TheJamsil5Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2")
    format("woff2");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Hahmlet-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/Hahmlet-Regular.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}
#navi a {
  font-family: "TheJamsil5Bold";
  font-weight: bold;
  text-decoration-line: none;
  color: beige;
}

#app {
  font-family: "Hahmlet-Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  margin-bottom: 30px;
  background-color: #526a7f;
}

#navi a.router-link-exact-active {
  color: lightcoral;
}
</style>
