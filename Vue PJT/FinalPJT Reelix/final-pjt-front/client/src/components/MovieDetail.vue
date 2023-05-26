<template>
  <div class="container">
    <div>
      <div class="mt-4">
        <b-card
          :img-src="`https://image.tmdb.org/t/p/w400/${movie.poster_path}`"
          :img-alt="movie.title"
          img-left
          class="mb-3 img-fluid"
        >
          <b-card-text style="padding: 50px">
            <br />

            <h2 style="text-align: center">{{ movie.title }}</h2>
            <br />

            <div
              class="d-flex justify-content-center align-items-center favorite btn btn-outline-secondary"
              :class="{ clicked: isLike }"
              style="width: 250px; margin: auto"
              id="wish-btn"
              @click="wishCreate"
            >
              <i class="material-icons m-1">favorite</i
              ><span><strong>찜 (Wish List)</strong></span>
            </div>

            <div class="container mt-5" style="text-align: left">
              <p class="px-5">
                <strong>줄거리 : </strong> {{ movie.overview }}
              </p>
            </div>
            <div class="d-flex col justify-content-between align-items-center">
              <div class="col d-flex justify-content-center align-items-center">
                <i class="material-icons m-1" style="color: #f8e80d">star</i>
                <span><strong>평점 : </strong> {{ movie.vote_average }}</span>
              </div>
              <div class="col">
                <span><strong>개봉일 : </strong> {{ movie.release_date }}</span>
              </div>
            </div>
          </b-card-text>
        </b-card>
      </div>
    </div>
    <br />
    <div>
      <h4>한 줄 감상평</h4>
      <MovieComment :movieId="this.movie.id.toString()" />
    </div>
    <br />
    <h2>배우</h2>
    <b-card>
      <div class="scroll-container">
        <div class="scroll-content d-flex flex-wrap">
          <div v-for="cast in movie.cast_ids" :key="cast.id">
            <b-card
              :title="cast.name"
              :img-src="getProfile(cast.profile_path)"
              :img-alt="cast.name"
              img-top
              tag="article"
              style="max-width: 200px; max-height: 400px; flex-shrink: 0"
              class="mb-2"
            >
              <b-card-text>
                <p style="max-height: 100px; text-overflow: ellipsis">
                  {{ cast.character }}
                </p>
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </b-card>
    <br />
    <h2>예고편</h2>
    <div class="iframebox">
      <iframe
        :src="videoUrl"
        frameborder="0"
        allowfullscreen
        width="100%"
        height="600px"
      ></iframe>
    </div>
    <br />
  </div>
</template>

<script>
import axios from "axios";
import MovieComment from "@/components/MovieComment.vue";
const API_URL = "http://127.0.0.1:8000";

export default {
  components: { MovieComment },
  name: "MovieDetail",
  data() {
    return {
      movie: {
      },
      isLike: false,
      videoUrl: null,
      // isClicked: false,
      // clickedUserId: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },

  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const movieId = this.id;
    this.getVideos(movieId);
  },
  methods: {
    wishCreate() {
  //     if (this.user.id !== this.clickedUserId) {
  //   return;
  // }
      // this.isClicked = !this.isClicked;
      console.log(this.movie)
      // localStorage.setItem("isClicked", this.isClicked);

      axios({
        method: "post",
        url: `http://127.0.0.1:8000/movies/${this.id}/${this.user.id}/likes/`,
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
        .then((res) => {
          console.log(res);
          this.movie = res.data
          if (this.movie.Like_users.includes(this.user.id)) {
            this.isLike = true
          } else {
            this.isLike = false
          }

          console.log(this.isLike)

        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProfile(profilePath) {
      if (profilePath) {
        return `https://image.tmdb.org/t/p/w500${profilePath}`;
      }
    },
    getVideos(movieId) {
      const apiKey = "8dd2aae210680df1fc539934fb5f5ab5";
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

      axios
        .get(url)
        .then((response) => {
          this.videos = response.data.results;
          if (this.videos.length > 0) {
            const firstVideoKey = this.videos[0].key;
            const videoUrl = this.getVideoUrl(firstVideoKey);
            this.videoUrl = videoUrl;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getVideoUrl(videoKey) {
      return `https://www.youtube.com/embed/${videoKey}`;
    },
    getMovie() {
      axios
        .get(`http://127.0.0.1:8000/movies/${this.id}`)
        .then((response) => {
          this.movie = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    const isClicked = localStorage.getItem("isClicked");
    this.isClicked = isClicked === "true";
    axios
      .get(`${API_URL}/movies/${this.id}`)
      .then((response) => {
        this.movie = response.data;
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

#poster-img {
  width: 30%;
}

h4 {
  font-family: "GyeonggiTitleM";
}

h2 {
  font-family: "GyeonggiTitleM";
  text-align: left;
}
.scroll-container {
  overflow-x: auto;
  position: relative; 
}

.scroll-content {
  display: flex;
}

.scroll-container::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px; 
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    white 50%,
    white
  ); 
}

.iframebox {
  width: 100%;
}

#wish-btn {
  align-items: center;
  border-color: #d99696;
}

.favorite {
  color: #d99696;
  transition: transform 0.3s ease;
}

.favorite:hover {
  transform: scale(1.2);
  background-color: #d99696;
  border-color: #d99696;
  color: white;
}

.clicked {
  background-color: #d99696;
  border-color: #d99696;
  color: white;
}
</style>
