<template>
  <div>
    <!-- <h1>키워드별 영화추천 뷰 입니당</h1> -->
    <div>
      <div
        class="keyword-image"
        :style="{ backgroundImage: `url(${getMovieImage()})` }"
      >
        <h3 id="keywordTitle"># {{ keyword }}</h3>
      </div>
    </div>
    <!-- <img
      :src="getMovieImage(movieId)"
      class="d-block img-fluid movie-image"
      :alt="keyword"
      id="keywordPicture"
      style="height: 500px"
    /> -->
    <div class="container">
      <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <div v-for="movie in filteredMovies" :key="movie.id" class="col p-1">
          <div class="card w-100" style="border-radius: 10px;">
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
                style="border-radius: 10px;"
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
  name: "RecommendView",
  data() {
    return {
      movies: [],
      matching: {
        새로운_세계: [14, 878],
        유난히_긴_밤: [10402],
        사랑: [10749],
        위로: [16, 10751],
        하하하: [35],
        몰입: [53, 80],
        스펙터클: [12, 28],
        스트레스_해소: [27, 9648],
      },
      keywordImages: {
        새로운_세계: require("@/assets/sf.jpg"),
        유난히_긴_밤: require("@/assets/music.jpg"),
        사랑: require("@/assets/love.jpg"),
        위로: require("@/assets/family.jpg"),
        하하하: require("@/assets/comedy.jpg"),
        몰입: require("@/assets/crime.jpg"),
        스펙터클: require("@/assets/action.jpg"),
        스트레스_해소: require("@/assets/horror.jpg"),
      },
    };
  },
  computed: {
    keyword() {
      return this.$route.params.keyword;
    },
    filteredMovies() {
      const matchingGenreIds = this.matching[this.keyword];
      const filteredSet = new Set();
      this.movies.forEach((movie) => {
        movie.genre_ids.forEach((genre) => {
          if (matchingGenreIds.includes(genre.id)) {
            filteredSet.add(movie);
          }
        });
      });
      return Array.from(filteredSet);
    },
  },
  methods: {
    getMovieImage() {
      return this.keywordImages[this.keyword];
    },
  },
  created() {
    axios
      .get(`${API_URL}/movies/`) // 실제로는 Django 서버의 API 엔드포인트를 사용해야 합니다.
      .then((response) => {
        console.log("성공");
        this.movies = response.data;
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

.keyword-image {
  width: 100%;
  height: 450px;
  background-size: cover;
  background-position: center;
}

#keywordTitle {
  color: white;
  text-align: right;
  padding: 15px;

}
</style>