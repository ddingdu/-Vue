<template>
  <div>
    <h1>후기 게시판</h1>
    <router-link :to="{ name: 'CreateView' }">[작성하기]</router-link>
    <ArticleList />
    <hr />
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList.vue";
// import axios from 'axios'

export default {
  name: "ArticleView",
  components: {
    ArticleList,
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin; // 로그인 여부
    },
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      if (this.isLogin) {
        this.$store.dispatch("getArticles");
      } else {
        alert("로그인이 필요합니다!");
        this.$router.push({ name: "LogInView" });
      }
    },
    // 로그인이 되어있으면 getArticles action 실행
    // 로그인 X라면 login 페이지로 이동
    // getArticles() {
    //   this.$store.dispatch("getArticles");
    // } else {
    //   alert('로그인이 필요한 페이지입니다...')
    //   this.$router.push({ name : 'LogInView'})
    // }
    // getArticles() {
    //   if (this.isLogin) {
    //     axios({
    //       method: "get",
    //       url: "http://127.0.0.1:8000/articles/",
    //       headers: {
    //         Authorization: `Bearer ${this.$store.state.token}`,
    //       },
    //     })
    //       .then((res, context) => {
    //         console.log(res, context);
    //         this.$store.commit("GET_ARTICLES", res.data);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }
    // else {
    //   alert("로그인이 필요한 페이지입니다...");
    //   this.$router.push({ name: "LogInView" });
    // }
  },
};
</script>

<style></style>
