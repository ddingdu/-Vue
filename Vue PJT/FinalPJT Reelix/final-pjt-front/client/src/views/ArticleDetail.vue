<template>
  <div>
    <br />
    <br />
    <div class="container mt-5" v-if="!isEditMode">
      <div id="text-left">
        <p>No. {{ article.id }}</p>
      </div>
      <h2>
        <strong>{{ article.title }}</strong>
      </h2>
      <div id="text-right">
        <p>{{ formatDateTime(article.updated_at) }}</p>
      </div>
      <hr />
      <br />
      <h4>{{ article.content }}</h4>
      <br />
      <br />
      <div class="d-flex justify-content-center d-grid gap-2">
        <!-- 수정하기 버튼 -->
        <div
          class="d-flex justify-content-center btn btn-outline-secondary"
          @click="toggleEditMode"
        >
          <i class="material-icons mx-1">edit</i><span>EDIT</span>
        </div>

        <!-- 목록으로 가기 -->
        <router-link
          :to="{ name: 'ArticleView' }"
          class="d-flex justify-content-center btn btn-outline-secondary"
          id="list"
        >
          <i class="material-icons mx-1">arrow_back</i>Back</router-link
        >
      </div>
    </div>
    <!-- 수정 폼 -->
    <div v-if="isEditMode">
      <div class="container">
        <h1><strong>EDIT Page</strong></h1>
        <hr />

        <div v-if="isEditMode">
          <div style="padding: 30px 100px 30px 100px">
            <!-- <div id="text-right"> -->
            <p id="text-right">No. {{ article.id }}</p>
            <!-- </div> -->
            <div class="text-start">
              <label for="input-title" class="form-label">제목</label>
            </div>
            <input
              type="text"
              id="input-title"
              v-model="updatedArticle.title"
              class="form-control"
            />
            <br />
            <div class="text-start">
              <label for="input-content" class="form-label">내용</label>
            </div>
            <textarea
              id="input-content"
              v-model="updatedArticle.content"
              class="form-control"
              style="height: 220px"
            ></textarea>
          </div>

          <div class="d-flex justify-content-center d-grid gap-2">
            <button
              class="d-flex justify-content-center btn btn-outline-secondary"
              @click="saveArticle"
            >
              <i class="material-icons mx-1">save</i>저장
            </button>
            <button
              class="d-flex justify-content-center btn btn-outline-secondary"
              @click="cancelEditMode"
            >
              <i class="material-icons mx-1">cancel</i>취소
            </button>

            <!-- 삭제하기 버튼 -->
            <div
              class="d-flex justify-content-center btn btn-outline-secondary"
              @click="deleteArticle(article)"
              id="detail-view"
            >
              <i class="material-icons mx-1">delete</i>삭제
            </div>
          </div>
        </div>
      </div>
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
      article: "",
      isEditMode: false,
      updatedArticle: {
        title: "",
        content: "",
        updated_at: "",
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
          this.updatedArticle.updated_at = this.article.updated_at;
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

<style scoped>
#text-left {
  text-align: left;
}
#text-right {
  text-align: right;
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
