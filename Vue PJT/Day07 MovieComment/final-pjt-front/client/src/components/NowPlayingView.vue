<template>
  <div>
    <h1>현재 상영중 | 개봉 예정작</h1>
    <div id="carouselNowPlaying" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselNowPlaying"
          v-for="(group, index) in groupedMovies"
          :key="index"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(group, index) in groupedMovies"
          :key="index"
          :class="{ active: index === 0 }"
        >
          <div class="row">
            <div class="col-3" v-for="movie in group" :key="movie.id">
              <div class="movie-item">
                <router-link
                  :to="{
                    name: 'MovieDetail',
                    params: { id: movie.id.toString() },
                  }"
                >
                  <img
                    :src="getPoster(movie.poster_path)"
                    class="d-block w-100"
                    :alt="movie.title"
                    style="height: 30rem"
                  />                  
                </router-link>
                  <h3>{{ movie.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselNowPlaying"
        role="button"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselNowPlaying"
        role="button"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const API_URL = "http://127.0.0.1:8000";

export default {
  name: "NowPlayingView",
  data() {
    return {
      movies: [],
    };
  },
  computed: {
    groupedMovies() {
      const chunkSize = 4;
      const chunks = [];
      for (let i = 0; i < this.movies.length; i += chunkSize) {
        chunks.push(this.movies.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
  methods: {
    getPoster(posterPath) {
      if (posterPath) {
        return `https://image.tmdb.org/t/p/w500${posterPath}`;
      }
    },
  },
  created() {
    axios
      .get(`${API_URL}/movies/`) // 실제로는 Django 서버의 API 엔드포인트를 사용해야 합니다.
      .then((response) => {
        // release_date가 2023-05-01 이후인 데이터만 가져오도록 필터링
        this.movies = response.data.filter(
          (movie) => movie.release_date >= "2023-05-01"
        );
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style>
.movie-item {
  text-align: center;
}
</style>
