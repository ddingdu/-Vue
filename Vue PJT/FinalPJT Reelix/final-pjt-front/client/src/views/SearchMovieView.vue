<template>
  <div>
    <br />
    <h2>"{{ input }}" 검색 결과입니다.</h2>
    <br />
    <div class="d-flex">
      <div v-for="movie in movies" :key="movie.id" :movie="movie">
        <div v-if="!movies[0]">
          <h2>준비중입니다.</h2>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center"></div>
      <div class="container">
        <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          <div v-for="movie in movies" :key="movie.id">
            <div class="card w-100" style="border-radius: 10px">
              <router-link
                :to="{
                  name: 'MovieDetail',
                  params: { id: movie.id.toString() },
                }"
              >
                <img
                  :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`"
                  class="d-block img-fluid movie-image"
                  :alt="movie.title"
                  style="border-radius: 10px"
                />
              </router-link>
            </div>
            <h5>{{ movie.title }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchMovieView",
  props: {
    input: {
      type: String,
      required: true,
    },
  },
  computed: {
    movies() {
      return this.$store.state.searchresults;
    },
  },
  created() {
    console.log(this.movies);
  },
};
</script>

<style>
.movie-image {
  width: 100%;
  height: 450px;
}

.card {
  width: 200px;
  height: 450px;
}
</style>
