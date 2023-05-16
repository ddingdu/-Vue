<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to="{ name: 'CreateView' }">[CREATE]</router-link>
    <ArticleList />
    <hr>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'ArticleView',
  components: {
    ArticleList,
  },
  computed:{
    isLogin() {
      return this.$store.getters.isLogin  // 로그인 여부를 알려줌
    }

  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {

      if (this.isLogin) {
        this.$store.dispatch('getArticles')
      } else {
        alert('로그인 필요한 페이지 입니다.')
        this.$router.push({ name: 'LogInView'})
      }
    }
  }
}
</script>

<style>

</style>
