import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import imageViewer from "vue-image-viewer";

import App from './App.vue';
import store from './store';
import router from './router';

import '@/style/index.less';
import '@/assets/main.css';
Vue.use(VueCarousel);
Vue.use(imageViewer);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
