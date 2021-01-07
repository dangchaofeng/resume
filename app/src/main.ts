import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入项目样式表
import './assets/less/index.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");