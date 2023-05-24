<template>
  <div class="article-list">
    <h3>Article List</h3>
    <ArticleListItem
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import ArticleListItem from "@/components/ArticleListItem";

export default {
  name: "ArticleList",
  components: {
    ArticleListItem,
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    },
  },

  // created() {
  //   const payload = this.$store.state.articles; 
  //   this.$store.dispatch('getArticles', payload)
  // }

};
</script>

<style>
.article-list {
  text-align: start;
}
</style>
