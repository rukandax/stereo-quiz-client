import Vue from 'vue';
import Router from 'vue-router';

import QuizIndex from './pages/quiz/Index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes: [
    {
      path: '/quiz',
      name: 'quiz-index',
      component: QuizIndex,
    },
  ],
});
