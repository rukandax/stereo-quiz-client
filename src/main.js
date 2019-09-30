import Vue from 'vue';

import App from './App.vue';

import router from './router';
import store from './store';

// Global Style Configuration
require('@/assets/css/global.scss');

// Font Awesome Style
require('@fortawesome/fontawesome-free/css/all.css');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
