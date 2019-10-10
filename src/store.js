import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    questions: [],
    answers: [],
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
    updateQuestions(state, payload) {
      state.questions = payload;
    },
    updateAnswers(state, payload) {
      state.answers = payload;
    },
  },
  getters: {
    totalQuestions(state) {
      return state.questions.length;
    },
  },
});
