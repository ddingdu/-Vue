<template>
  <div>
    <h1>프로필 페이지</h1>

      <h1>Wish List</h1>

      <p>이름: {{ user.username }}</p>
      <button @click="getMovie">버튼</button>

      <!-- <MovieDetail :movie="movie" @add-to-wishlist="addToWishlist" /> -->

  </div>
</template>

<script>
import axios from "axios";
// import MovieDetail from "@/components/MovieDetail"
const API_URL = "http://127.0.0.1:8000";

export default {
  name: "ProfileView",
  // components: {
  //   MovieDetail
  // },
  data() {
    return {
      profile: null,
      movie: {
        id: "",
        title: "",
      },
    };
  },
  props: {
    username : {
      type: String,
      required: true,
    },
    // id: {
    //   type: String,
    //   required: true,
    // },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  methods: {
    getMovie() {
      axios
        .get(`${API_URL}/movies/${this.id}`)
        .then((response) => {
          this.movie = response.data;
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    },
    // addToWishlist({ movieId, userId }) {
    //   // 이벤트 핸들러에서 전달받은 영화 정보를 사용
    //   console.log("Movie ID:", movieId);
    //   console.log("User ID:", userId);

    //   // 이후 원하는 동작 수행
    //   // 예시: 해당 영화 정보를 가져오기
    //   axios.get(`${API_URL}/movies/${movieId}`)
    //     .then(response => {
    //       const movie = response.data;
    //       console.log("Movie:", movie);
    //       // 가져온 영화 정보를 사용하여 원하는 작업 수행
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }
  },
};
</script>
