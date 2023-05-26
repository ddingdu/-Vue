<template>
  <div>
    <div class="container p-5">
      <h1><strong>Review Board</strong></h1>
<br>
      <router-link
        :to="{ name: 'CreateView' }"
        v-if="isLoggedIn"
        id="create-btn"
        class="d-flex justify-content-center btn btn-outline-secondary"
      >
        <i class="material-icons" style="color: #fffff">add</i
        ><span>New</span></router-link
      >
    </div>
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
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
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

<style scoped>
#create-btn {
  text-decoration: none;
}
</style>
