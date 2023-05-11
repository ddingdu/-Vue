<template>
  <div class="wrap">
    <h2>시작</h2>
    <div class="detail">
      <div class="prev d-flex align-items-center">
        <span class="btn" @click="toHome">이전</span>
      </div>
      <div><img src="../assets/happeed.png" alt="" class="image"></div>
      <div class="next d-flex align-items-center">
        <span class="btn" @click="toHappling">다음</span>
      </div>
    </div>
    <h2>해피드</h2>
  </div>
</template>

<script>
export default {
  name: "Happeed",
  methods: {
    toHome() {
      this.$router.push({ name : "home" })
    },
    toHappling() {
      this.$router.push({ name : "happling"})
    }
  }
}
</script>

<style>
.wrap {
  margin-top: 50px;
  text-align: center;
  border: 1px solid gray;
  padding: 20px;
  border-radius: 10px;
  box-shadow: lightgray 0px 6px 12px 12px;
}

.detail {
  display: flex;
}

.image {
  width: 300px;
}

.d-flex {
  display: flex;
}

.align-items-center{
  align-items: center;
}

.btn {
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
}
</style>