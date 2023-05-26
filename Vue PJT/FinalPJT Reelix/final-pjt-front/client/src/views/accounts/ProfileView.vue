<template>
  <div>

    <br />
      <br />
    <div class="d-flex justify-content-center align-items-center">
      <h2>
        <strong>{{ user.username }} 's Wish List</strong>
        <i class="material-icons m-2">favorite</i>
      </h2>
    </div>

    <br />
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const API_URL = "http://127.0.0.1:8000";

export default {
  name: "ProfileView",
  data() {
    return {
      profile: null,
      movies: [],
    };
  },
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  created() {
    axios
      .get(`${API_URL}/movies/`)
      .then((response) => {
        const movies = response.data.filter((movie) =>
          movie.Like_users.includes(this.user.id)
        );
        console.log(movies);
        this.movies.push(...movies);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>
.movie-image {
  width: 100%;
  height: 450px;
}

.card {
  width: 200px;
  height: 450px;
}
</style>
