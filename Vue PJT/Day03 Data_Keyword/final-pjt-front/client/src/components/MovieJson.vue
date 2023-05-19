<template>
  <div>
    <h1>MovieJson 테스트 중 !</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieJson",
  data() {
    return {
      
    };
  },
  methods: {
    signup() {
      axios({
        method: "post",
        url: "http://127.0.0.1:8000/movies/fixtures/movie.json",
        data: { 

         },
      });

    },
  },
};
</script>

<style></style>
