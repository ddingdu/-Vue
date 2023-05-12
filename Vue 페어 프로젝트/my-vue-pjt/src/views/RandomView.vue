<template>
  <div class="container">
    <div class="d-grid gap-2 col-4 offset-4">
      <div
        @click="selectRandomMovie"
        id="button"
        class="btn btn-outline-secondary fs-4"
      >
        Random Pick
      </div>
    </div>
    <div v-if="randomMovie" class="mt-4">
      <div class="row row-cols-1 row-cols-md-3 justify-content-center">
        <div class="col">
          <div class="card h-100">
            <img
              v-if="randomMovie.poster_path"
              :src="getPoster(randomMovie.poster_path)"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body m-2">
              <p class="card-title fw-bold fs-4 mb-4">
                {{ randomMovie.title }}
              </p>
              <p class="card-text fs-5 lh-lg" id="content">
                {{ randomMovie.overview }}
              </p>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-center">
                <span class="material-icons-round gold-star">{{ "star" }}</span>
                <h5 class="text-muted">{{ randomMovie.vote_average }}</h5>
              </div>
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
  name: "RandomView",
  data() {
    return {
      movies: [],
      randomMovie: null,
    };
  },
  methods: {
    getMovies() {
      return axios({
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
    getRandomMovie(movies) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      return movies[randomIndex];
    },
    selectRandomMovie() {
      this.getMovies().then(() => {
        this.randomMovie = this.getRandomMovie(this.movies);
      });
    },
    getPoster(posterPath) {
      if (posterPath) {
        return `https://image.tmdb.org/t/p/w500/${posterPath}`;
      }
    },
  },
  created() {
    this.selectRandomMovie();
  },
};
</script>

<style>
@font-face {
  font-family: "NeoDunggeunmoPro-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/NeoDunggeunmoPro-Regular.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}
#button {
  font-family: "NeoDunggeunmoPro-Regular";
}
</style>