<template>
  <div class="home">
    <!-- <div @click="home"> -->
    <img alt="Vue logo" src="../assets/Reelix.png" />
    <!-- </div> -->
    <div>
      <i class="material-icons">home</i>
      <i class="material-icons star">star</i>
      <i class="material-icons favorite">favorite</i>
      <i class="material-icons">check</i>
    </div>
    <MainView />
    <div class="container">
      <NowPlayingView />
      <PopularView />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainView from "@/components/MainView.vue";
import NowPlayingView from "@/components/NowPlayingView.vue";
import PopularView from "@/components/PopularView.vue";

export default {
  name: "HomeView",
  components: {
    MainView,
    NowPlayingView,
    PopularView,
  },
  // methods: {
  // home() {
  //   this.$store.router.push({name: 'HomeView'})
  // }

  // }
};
</script>

<style>
.material-icons.star {
  color: gold;
}

.material-icons.favorite {
  color: palevioletred;
}
</style>
