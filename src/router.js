import Vue from 'vue';
import Router from 'vue-router';

// Login Pages
import LoginIndex from './pages/login/Index.vue';

// Quiz Pages
import QuizIndex from './pages/quiz/Index.vue';
import QuizDetail from './pages/quiz/Detail.vue';
import QuizStart from './pages/quiz/Start.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes: [
    {
      path: '/login',
      name: 'login-index',
      component: LoginIndex,
    },
    {
      path: '/quiz',
      name: 'quiz-index',
      component: QuizIndex,
    },
    {
      path: '/quiz/:id',
      name: 'quiz-detail',
      component: QuizDetail,
    },
    {
      path: '/quiz/:id/start',
      name: 'quiz-start',
      component: QuizStart,
    },
  ],
});
