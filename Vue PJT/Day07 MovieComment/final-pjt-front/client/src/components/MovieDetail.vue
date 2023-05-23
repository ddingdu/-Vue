<template>
  <div class="container">
    <div>
      <div class="mt-4">
        <b-card
          :img-src="`https://image.tmdb.org/t/p/w400/${movie.poster_path}`"
          :img-alt="movie.title"
          img-left
          class="mb-3 img-fluid">
          <b-card-text>
            <h1>{{ movie.title }}</h1>
            <br />
            <p><strong>줄거리 : </strong> {{ movie.overview }}</p>
            <p><strong>Popularity:</strong> {{ movie.popularity }}</p>
            <p><strong>Release Date:</strong> {{ movie.release_date }}</p>
            <p><strong>Vote Average:</strong> {{ movie.vote_average }}</p>
            <p><strong>Vote Count:</strong> {{ movie.vote_count }}</p>
          </b-card-text>
        </b-card>
      </div>
    </div>
<MovieComment :movieId="movie.id.toString()" />
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
                <!-- 내용의 크기 조정 -->
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </b-card>

    <h2>예고편</h2>
    <div class="iframebox">
      <iframe :src="videoUrl" frameborder="0" allowfullscreen width="100%" height="700px"></iframe>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MovieComment from '@/components/MovieComment.vue';
const API_URL = "http://127.0.0.1:8000";

export default {
  components: { MovieComment },
  name: "MovieDetail",
  data() {
    return {
      movie: {
        id: "",
        title: "",
      },
      videoUrl: null,
    };
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
  },
  // Detail 페이지 접속 시 해당 영화 정보 출력
  created() {
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

<style>
#poster-img {
  width: 30%;
}

.scroll-container {
  overflow-x: auto;
  position: relative; /* 추가 */
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
  height: 8px; /* 원하는 높이 조정 */
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    white 50%,
    white
  ); /* 스크롤 그라데이션 */
}

.iframebox {
  width: 100%;
}
</style>