<template>
  <div>
    <h1>Article Page Views</h1>
    <router-link :to="{ name:'CreateView' }">[CREATE]</router-link>
    <ArticleList />
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList"

export default {
  name: 'ArticleView',
  components: {
    ArticleList
  },
  computed:{
  },
  created() {
    // 메서드 실행
    this.getArticles()
  },
  methods: {
    getArticles() {
      // created 에서 실행하면 장고로부터 data 불러옴
      this.$store.dispatch('getArticles')
    }
  }
}
</script>

<style>

</style>
