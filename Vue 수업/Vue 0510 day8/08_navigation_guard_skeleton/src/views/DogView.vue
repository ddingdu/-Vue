<template>
  <div>
    <!-- 이미지가 없으면 메시지 띄우기 -->
    <p v-if="!imgSrc">{{ message }}</p>
    <img v-if="imgSrc" :src="imgSrc" alt="">
    <br>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DogView',
  data() {
    return {
      imgSrc: null,
      message: "로딩중입니다 .... "
    }
  },
  methods: {
    getDogImage() {
      const breed = this.$route.params.breed
      const dogImageSearchUrl = `https://dog.ceo/api/breed/${breed}/images/random`

      axios({
        method: 'get',
        url: dogImageSearchUrl,
      })
      .then((response) => {
        // console.log(response)
        const dogImgSrc = response.data.message
        // data 에 새로 받아온 이미지 넣기
        this.imgSrc = dogImgSrc
      })
      .catch((error) => {
        console.log(error)
        // this.message = `${this.$route.params.breed} 는 없는 품종입니다`
        this.$router.push('/404')  // 404로 보내기
      })
    }
  },
  // 접속하자마자 이미지 뜨도록
  created() {
    this.getDogImage()
  }
}
</script>

<style>

</style>