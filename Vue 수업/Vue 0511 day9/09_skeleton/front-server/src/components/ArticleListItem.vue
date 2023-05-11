<template>
  <div>
    <h4>ArticleListItem components</h4>
    <h5>PK : {{ article.id }}</h5>
    <p>제목 : {{ article.title }}</p>
    <router-link 
    :to="{ name: 'DetailView', 
    params: { id: article.id } }">
    [DETAIL]
    </router-link>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    article: Object
  }
}
</script>

<style>

</style>
