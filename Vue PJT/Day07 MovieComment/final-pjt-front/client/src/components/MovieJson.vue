<template>
  <div>
    <h1>Movie List</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.pk">
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.overview }}</p>
        <img :src="getImageUrl(movie.poster_path)" alt="Poster" />
        <p>Release Date: {{ movie.release_date }}</p>
        <p>Vote Average: {{ movie.vote_average }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = "http://127.0.0.1:8000";

export default {
  name: 'MovieJson',
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    axios
      .get(`${API_URL}/movies/`) // 실제로는 Django 서버의 API 엔드포인트를 사용해야 합니다.
      .then(response => {
        this.movies = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    getImageUrl(posterPath) {
      if (posterPath) {
        return `https://image.tmdb.org/t/p/w500${posterPath}`;
      }
      return '';
    },
  },
};
</script>
