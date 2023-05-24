<template>
  <div class="main">
    <div id="choice">
      <div
        class="btn btn-outline-light rounded-pill mx-2 px-3 fs-6"
        id="sf"
        @click="recommendMovie('새로운_세계')"
      >
        # 새로운 세계
      </div>
      <div
        class="btn btn-outline-light rounded-pill mx-2 px-3 fs-6"
        id="music"
        @click="recommendMovie('유난히_긴_밤')"
      >
        # 유난히 긴 밤
      </div>

      <div
        class="btn btn-outline-light rounded-pill mx-2 px-3 fs-6"
        id="romance"
        @click="recommendMovie('사랑')"
      >
        # 사랑
      </div>
      <div
        class="btn btn-outline-light rounded-pill mx-2 px-3 fs-6"
        id="family"
        @click="recommendMovie('위로')"
      >
        # 위로
      </div>
      <div
        class="btn btn-outline-light rounded-pill mx-2 px-3 fs-6"
        id="comedy"
        @click="recommendMovie('하하하')"
      >
        # 하하하
      </div>
      <div
        class="btn btn-outline-light rounded-pill mx-2 px-3 fs-6"
        id="crime"
        @click="recommendMovie('몰입')"
      >
        # 몰입
      </div>
      <div
        class="btn btn-outline-light rounded-pill mx-2 px-3 fs-6"
        id="adventure"
        @click="recommendMovie('스펙터클')"
      >
        # 스펙터클
      </div>
      <div
        class="btn btn-outline-light rounded-pill mx-2 px-3 fs-6"
        id="horror"
        @click="recommendMovie('스트레스_해소')"
      >
        # 스트레스 해소
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainView",
  methods: {
    recommendMovie(keyword) {
      this.$router.push(`/recommend/${keyword}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.with-background {
  background-image: url("@/assets/AboutTime.jpg");
}

#choice {
  padding: 20px;
}

.btn {
  color: #d99696;
  border-color:whitesmoke;
}
.btn:hover {
  color: white; /* Color for nav-link on hover */
  background-color: #d99696;
  border: none;
}

</style>
