<template>
      <div class="container">
    <br>
    <h1><strong>Create Page</strong></h1>
    <hr>
    <form @submit.prevent="createArticle">
      <div style="padding: 30px 100px 30px 100px">
        <div class="text-start">
          <label for="input-title" class="form-label">제목</label>
        </div>
        <input type="text" id="input-title" v-model.trim="title" class="form-control" /><br />

        <div class="text-start">
          <label for="input-content" class="form-label">내용</label>
        </div>
        <textarea id="input-content" cols="30" rows="10" v-model="content" class="form-control"></textarea><br />

        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-outline-secondary">
            <i class="material-icons mx-1">save</i>저장
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export default {
  name: "CreateView",
  data() {
    return {
      title: null,
      content: null,
    };
  },
  methods: {
    // 게시글 작성 로직
    createArticle() {
      const title = this.title;
      const content = this.content;

      // if (!title) {
      //   alert("제목 입력해주세요");
      //   return;
      // } else if (!content) {
      //   alert("내용 입력해주세요");
      //   return;
      // }
      axios({
        method: "post",
        url: `${API_URL}/articles/`,
        data: { title, content },
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
        .then((res) => {
          console.log(res);
          // this.$store.commit("GET_ARTICLES", res.data);
          this.$router.push({ name: "ArticleView" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
