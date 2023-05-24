<template>
  <div>
    <form @submit.prevent="createComment">
      <input type="text" v-model="content" />
      <div class="btn btn-outline secondary" @click="saveComment">저장</div>
    </form>

    <div v-for="comment in comments" :key="comment.id">
      <li v-if="comment.movie == movieId">
        {{ comment.content }}
      </li>
    </div>

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
      // movie: null,
    };
  },
  methods: {
    createComment() {
      const content = this.content;
      const movieId = this.movieId;
      console.log(movieId);
      console.log(this.comments[9].movie);
      // const movieId = this.movie.id;
      // const userId = this.userId;

      axios
        .post(`${API_URL}/movies/${movieId}/comments/`, { content })
        .then((response) => {
          this.comments.push(response.data);
          console.log("댓글 생성 성공");
          // this.getComments(); // 댓글 목록을 다시 불러옴
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

<style></style>
