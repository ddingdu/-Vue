<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="(movie, index) in movies" :key="index">
        <div class="card h-100">
          <img
            :src="getPoster(movie.poster_path)"
            class="card-img-top"
            style="height: 40rem"
            alt="..."
          />
          <div class="card-body m-2">
            <p class="card-title fw-bold fs-4 mb-4">{{ movie.title }}</p>
            <p class="card-text fs-5 lh-lg" id="content">
              {{ truncateText(movie.overview, 100) }}
              <span v-if="movie.overview.length > 100">...</span>
            </p>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-center">
              <span class="material-icons-round gold-star">{{ "star" }}</span>

              <h5 class="text-muted">
                {{ movie.vote_average }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieCard",
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    getMovies() {
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=8dd2aae210680df1fc539934fb5f5ab5&language=ko-KR&page=1`,
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
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength);
      }
      return text;
    },
  },
  created() {
    this.getMovies();
  },
};
</script>

<style>
@font-face {
  font-family: "TTWanjunuricheR";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/TTWanjunuricheR.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}

#content {
  font-family: "TTWanjunuricheR";
}
</style>
