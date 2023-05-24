<template>
  <div>
    <h1>Article Detail</h1>
    <div v-if="!isEditMode">
      <p>글 번호 : {{ article.id }}</p>
      <p>제목 : {{ article.title }}</p>
      <p>내용 : {{ article.content }}</p>
      <p>작성시간: {{ formatDateTime(article.created_at) }}</p>
      <p>수정시간: {{ formatDateTime(article.updated_at) }}</p>
      <div class="btn btn-outline-secondary" @click="toggleEditMode">
        수정하기
      </div>
    </div>
    <!-- 수정 폼 -->
    <div v-if="isEditMode">
      <label for="input-title">제목</label>
      <input type="text" id="input-title" v-model="updatedArticle.title" />

      <label for="input-content">내용</label>
      <textarea id="input-content" v-model="updatedArticle.content"></textarea>

      <div class="btn btn-outline-primary" @click="saveArticle">저장</div>
      <div class="btn btn-outline-secondary" @click="cancelEditMode">취소</div>
    </div>

    <div class="btn btn-outline-danger" @click="deleteArticle(article)">
      삭제하기
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import axios from "axios";
import router from "@/router";
const API_URL = "http://127.0.0.1:8000";

export default {
  name: "ArticleDetail",
  data() {
    return {
      article: {
        title: "",
        content: "",
      },
      isEditMode: false,
      updatedArticle: {
        title: "",
        content: "",
      },
    };
  },
  created() {
    this.getArticleDetail();
  },
  methods: {
    getArticleDetail() {
      axios({
        method: "get",
        url: `${API_URL}/articles/${this.$route.params.id}/`,
      })
        .then((res) => {
          console.log(res);
          this.article = res.data;
          this.updatedArticle.title = this.article.title;
          this.updatedArticle.content = this.article.content;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toggleEditMode() {
      this.isEditMode = true;
    },
    cancelEditMode() {
      this.isEditMode = false;
    },
    saveArticle() {
      axios({
        method: "put",
        url: `${API_URL}/articles/${this.article.id}/`,
        data: this.updatedArticle,
      })
        .then((res) => {
          console.log(res);
          this.article = res.data;
          this.isEditMode = false;
          alert("게시글이 수정되었습니다!");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteArticle(article) {
      axios({
        method: "delete",
        url: `${API_URL}/articles/${article.id}/`,
      })
        .then((res) => {
          console.log(res);
          // this.article = res.data;
          alert("게시글이 삭제되었습니다!");
          this.$store.dispatch("getArticles");
          router.push({ name: "ArticleView" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    formatDateTime(dateTime) {
      return dayjs(dateTime).format("YYYY-MM-DD HH:mm");
    },
  },
};
</script>
