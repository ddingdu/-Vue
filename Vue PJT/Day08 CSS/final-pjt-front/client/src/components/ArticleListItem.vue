<template>
  <div class="box">
    <h1>{{ article.title }}</h1>
    <h2>{{ article.content }}</h2>
    <hr />
    <p>작성자 : {{ article.username }}</p>
    <router-link :to="{ name: 'ArticleDetail', params: { id: article.id } }"
      >[Detail]
    </router-link>
  </div>
</template>

<script>
// import ArticleDetail from '@/views/ArticleDetail.vue';

export default {
  name: "ArticleListItem",
  props: {
    article: Object,
  },
  // created() {
  //   const payload = this.$store.state.articles;
  //   this.$store.dispatch('getArticles', payload)
  // }
};
</script>

<style>
.box {
  border: 1px solid black;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
</style>
