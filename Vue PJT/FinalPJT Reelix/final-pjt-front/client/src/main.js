import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/js/bootstrap.js";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

router.afterEach(() => {
  window.scrollTo(0, 0);
});


new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
