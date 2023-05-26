<template>
  <div>
    <b-form @submit.prevent="createComment" class="d-flex justify-content-center align-items-center">
        <b-input v-model="content" style="width: 700px;" class="m-3"/>
        <b-button id="save-btn" @click="saveComment">저장</b-button>
    </b-form>
    <br />
    <div v-for="comment in comments" :key="comment.id">
      <h5 v-if="comment.movie == movieId">
        {{ comment.content }}
      </h5>
    </div>
    <br>

    <hr />
  </div>
</template>

<script>
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export default {
  name: "MovieComment",
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      content: "",
      comments: [],
    };
  },
  methods: {
    createComment() {
      const content = this.content;
      const movieId = this.movieId;
      console.log(movieId);
      

      axios
        .post(`${API_URL}/movies/${movieId}/comments/`, { content })
        .then((response) => {
          this.comments.push(response.data);
          console.log("댓글 생성 성공");
        })
        .catch((error) => {
          console.error("댓글 생성 실패", error);
        })
        .finally(() => {
          this.content = "";
        });
    },
    getComments() {
      axios
        .get(`${API_URL}/movies/comments/`)
        .then((response) => {
          console.log("댓글 목록 가져오기 성공");
          this.comments = response.data; // 가져온 댓글 목록을 저장
          console.log(this.comments);
        })
        .catch((error) => {
          console.error("댓글 목록 가져오기 실패", error);
        });
    },
    saveComment() {
      this.createComment();
    },
  },
  created() {
    // this.movie = { id: this.movieId };
    // console.log(this.movie);
    // console.log(this.movie.id);
    // console.log(this.movieId);
    this.getComments(); // 컴포넌트 생성 시 댓글 목록을 가져옴
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

#save-btn {
  background-color: #d99696;
  border: none;
}

.form-control:focus {
  border-color: #ddb1b1;
  box-shadow: 0 0 0 0.2rem #fad7d7;
  outline: none;
  background-color: white;
  transition: border-color 0.3s ease #d99696;
  border-radius: 0.5rem;
}
</style>
