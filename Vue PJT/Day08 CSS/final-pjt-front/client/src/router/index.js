import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/accounts/signup",
    name: "SignUpView",

    component: () => import("../views/accounts/SignUpView.vue"),
  },
  {
    path: "/accounts/login",
    name: "LogInView",
    component: () => import("../views/accounts/LogInView.vue"),
  },
  {
    path: "/articles",
    name: "ArticleView",
    component: () => import("../views/ArticleView.vue"),
  },
  {
    path: "/create",
    name: "CreateView",
    component: () => import("../views/CreateView.vue"),
  },
  {
    path: `/:id`,
    name: "ArticleDetail",
    component: () => import("../views/ArticleDetail.vue"),
  },
  {
    path: `/movies/:id`,
    name: "MovieDetail",
    component: () => import("../components/MovieDetail.vue"),
    props: true,
  },
  {
    path: `/recommend/:keyword`,
    name: "RecommendView",
    component: () => import("../views/RecommendView.vue"),
    props: true,
  },
  {
    path: `/profile/:username`,
    name: "ProfileView",
    component: () => import("../views/accounts/ProfileView.vue"),
    props: true,
  },
  {
    path: '/movies/search/',
    name: 'SearchMovieView',
    component: () => import("../views/SearchMovieView.vue"),
    // props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
