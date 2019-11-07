import Vue from 'vue';
import Router from 'vue-router';

// Login Pages
import LoginIndex from './pages/login/Index.vue';

// Quiz Pages
import QuizIndex from './pages/quiz/Index.vue';
import QuizDetail from './pages/quiz/Detail.vue';
import QuizAssess from './pages/quiz/Assess.vue';

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
      path: '/quiz/:code',
      name: 'quiz-detail',
      component: QuizDetail,
    },
    {
      path: '/quiz/:code/assess',
      redirect: '/quiz/:code/assess/1',
    },
    {
      path: '/quiz/:code/assess/:num',
      name: 'quiz-assess',
      component: QuizAssess,
    },
    {
      path: '*',
      redirect: '/quiz',
    },
  ],
});
