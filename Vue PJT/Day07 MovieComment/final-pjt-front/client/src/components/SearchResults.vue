<template>
  <div>
    <h2>Search Results</h2>
    <ul>
      <li v-for="movie in searchResults" :key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
    
  </div>
</template>

<script>
import axios from "axios";
const API_URL = "http://127.0.0.1:8000";

export default {
  name: 'SearchResults',
  props: ['searchResults'],  // 검색 결과를 받아올 props 정의
  data() {
    return {
      movie: {
        id: "",
        title: "",
      },
    }
  },
  created() {
    axios
      .get(`${API_URL}/movies/${this.id}`)
      .then((response) => {
        this.movie = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
}

</script>

<style>

</style>