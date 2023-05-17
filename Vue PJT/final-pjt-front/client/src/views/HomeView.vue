<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Reelix.png" />
    <MainView />
    <NowPlayingView />
    <PopularView />
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
