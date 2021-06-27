import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

import "@/assets/sass/template.scss";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  // eslint-disable-next-line prettier/prettier
  render: h => h(App),
}).$mount("#app");
