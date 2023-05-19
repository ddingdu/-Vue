<template>
  <div>
    <h1>인기순위</h1>
    <div id="carouselPopular" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselPopular"
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
              <img
                :src="getPoster(movie.poster_path)"
                class="d-block w-100"
                :alt="movie.title"
                style="height: 40rem"
              />
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselPopular"
        role="button"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselPopular"
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

export default {
  name: "PopularView",
  data() {
    return {
      movies: [],
    };
  },
  computed: {
    groupedMovies() {
      // 3개씩 그룹으로 나누기 위해 movies 배열을 조각으로 나눕니다.
      const chunkSize = 4;
      const chunks = [];
      for (let i = 0; i < this.movies.length; i += chunkSize) {
        chunks.push(this.movies.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
  methods: {
    getMovies() {
      axios
        .get("https://api.themoviedb.org/3/movie/popular", {
          params: {
            api_key: "8dd2aae210680df1fc539934fb5f5ab5",
            language: "ko-KR",
            page: 1,
          },
        })
        .then((res) => {
          console.log(res);
          this.movies = res.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getPoster(posterPath) {
      if (posterPath) {
        return `https://image.tmdb.org/t/p/w500/${posterPath}`;
      }
    },
  },
  created() {
    this.getMovies();
  },
};
</script>

<style></style>
