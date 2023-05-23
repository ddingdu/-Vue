<template>
  <!-- HomeView의 Keyword List -->
  <div>
    <div class="my-4" id="choice">
      <div
        class="btn btn-outline-secondary rounded-pill mx-2 px-3 fs-6"
        id="sf"
        @click="recommendMovie('새로운_세계')"
      >
        # 새로운 세계
      </div>
      <div
        class="btn btn-outline-secondary rounded-pill mx-2 px-3 fs-6"
        id="music"
        @click="recommendMovie('유난히_긴_밤')"
      >
        # 유난히 긴 밤
      </div>

      <div
        class="btn btn-outline-secondary rounded-pill mx-2 px-3 fs-6"
        id="romance"
        @click="recommendMovie('사랑')"
      >
        # 사랑
      </div>
      <div
        class="btn btn-outline-secondary rounded-pill mx-2 px-3 fs-6"
        id="family"
        @click="recommendMovie('위로')"
      >
        # 위로
      </div>
      <div
        class="btn btn-outline-secondary rounded-pill mx-2 px-3 fs-6"
        id="comedy"
        @click="recommendMovie('하하하')"
      >
        # 하하하
      </div>
      <div
        class="btn btn-outline-secondary rounded-pill mx-2 px-3 fs-6"
        id="crime"
        @click="recommendMovie('몰입')"
      >
        # 몰입
      </div>
      <div
        class="btn btn-outline-secondary rounded-pill mx-2 px-3 fs-6"
        id="adventure"
        @click="recommendMovie('스펙터클')"
      >
        # 스펙터클
      </div>
      <div
        class="btn btn-outline-secondary rounded-pill mx-2 px-3 fs-6"
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
  name: "KeywordView",
  methods: {
    recommendMovie(keyword) {
      this.$router.push(`/recommend/${keyword}`);
    },
  },
};
</script>

<style></style>
