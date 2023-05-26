<template>
  <div>
    <h3>Popular MOVIE</h3>
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
                    style="height: 30rem; border-radius: 10px"
                  />
                </router-link>
                <!-- <h3>{{ movie.title }}</h3> -->
              </div>
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
const API_URL = "http://127.0.0.1:8000";

export default {
  name: "PopularView",
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
      .get(`${API_URL}/movies/`) 
      .then((response) => {

        this.movies = response.data.filter(
          (movie) => movie.vote_average >= "8.3"
        );
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>
@font-face {
  font-family: "GyeonggiTitleM";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GyeonggiTitleM.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

h3 {
  font-family: "GyeonggiTitleM";
  text-align: left;
}

.movie-item {
  text-align: center;
}
</style>
