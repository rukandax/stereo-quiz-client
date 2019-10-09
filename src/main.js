import $ from 'jquery';
import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueCookie from 'vue-cookie';

import App from './App.vue';

import router from './router';
import store from './store';

// Importing Bootstrap 4
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Global Style Configuration
require('@/assets/css/global.scss');

// Font Awesome Style
require('@fortawesome/fontawesome-free/css/all.css');

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

Vue.use(VueCookie);

new Vue({
  data() {
    return {
      flashType: 'success',
      flashMessage: '',
    };
  },
  router,
  store,
  methods: {
    flashInit() {
      $('#flash-message').toast({ delay: 5000 });
    },
    flash(message = '', type = 'success') {
      this.flashType = type;
      this.flashMessage = message;

      $('#flash-message').toast('show');
    },
  },
  render: h => h(App),
}).$mount('#app');
