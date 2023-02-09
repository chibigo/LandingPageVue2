import Vue from 'vue';
import VueCarousel from 'vue-carousel';

import App from './App.vue';
import store from './store';
import router from './router';

import '@/style/index.less';
import '@/assets/main.css';
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
