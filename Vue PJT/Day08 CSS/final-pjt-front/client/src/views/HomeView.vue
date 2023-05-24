<template>
  <div class="home">
    <!-- <div>
      <i class="material-icons">home</i>
      <i class="material-icons star">star</i>
      <i class="material-icons">check</i>
    </div> -->
    <div id="main-view" class="with-background">
    <MainView />
    </div>
    <div class="container">
      <NowPlayingView />
      <br>
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
};
</script>

<style scoped>
@font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

#main-view {
  height: 600px;
}
.with-background {
  background-image: url('@/assets/AboutTime.jpg');
}


#choice {
  font-family: 'LINESeedKR-Bd';

}
.material-icons.star {
  color: gold;
}

.material-icons.favorite {
  color: palevioletred;
}
</style>
