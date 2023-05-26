<template>
  <div class="box px-5">
    <p>No. {{ article.id }}</p>
    <h2>
      <strong>{{ article.title }}</strong>
    </h2>
    <div class="d-flex justify-content-between d-grid gap-2">
      <h4>{{ article.content }}</h4>
      <router-link
        :to="{ name: 'ArticleDetail', params: { id: article.id } }"
        class="d-flex justify-content-center"
        id="detail-view"
        ><i class="material-icons" style="color: #fffff">zoom_in</i
        ><span>자세히</span>
      </router-link>
    </div>
    <br />
    <div class="d-flex justify-content-between d-grid gap-2">
      <h6>작성자 : {{ article.username }}</h6>
      <h6>{{ formatDateTime(article.updated_at) }}</h6>
    </div>
    <hr />
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "ArticleListItem",
  props: {
    article: Object,
  },
  methods: {
    formatDateTime(dateTime) {
      return dayjs(dateTime).format("YYYY-MM-DD HH:mm");
    },
  },
};
</script>

<style scoped>
.box {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
#detail-view {
  text-decoration: none;
  color: #d99696;
}
</style>
