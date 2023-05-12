<template>
  <div class="home">
    <video autoplay>
      <source src="@/assets/lake.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style>
.home {
  max-width: 800px;
  margin: 0 auto;
}
</style>