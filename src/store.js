import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    questions: [],
    createdAt: 0,
    multipleAnswers: [],
    chosenAnswers: [],
    quiz: {},
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
    updateQuestions(state, payload) {
      state.questions = payload;
    },
    updateCreatedAt(state, payload) {
      state.createdAt = payload;
    },
    updateAnswers(state, payload) {
      state.multipleAnswers = payload;
    },
    updateChosenAnswers(state, payload) {
      state.chosenAnswers = payload;
    },
    updateQuiz(state, payload) {
      state.quiz = payload;
    },
  },
  getters: {
    totalQuestions(state) {
      return state.questions.length;
    },
  },
});
