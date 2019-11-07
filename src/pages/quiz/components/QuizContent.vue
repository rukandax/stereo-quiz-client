<template>
  <div v-if="currentQuestion" class="card shadow mb-4">
    <div class="card-body">
      <div class="d-flex align-items-start mb-5">
        <div class="btn btn-secondary mr-3">{{ currentNumber }}</div>
        <div class="question">
          <div class="question-text h5 mb-4">
            {{ currentQuestion }}
          </div>
          <div
            v-for="(answer, answerIndex) in currentMultipleAnswer"
            :key="`answer-${answerIndex}`"
            @click="answerQuiz(answer.index)"
            class="
              cursor-pointer
              d-flex
              align-items-start
              h6
              p-3
              text-left
              mb-4
              btn
              btn-block
              btn-outline-secondary
            "
            :class="chosenAnswer === answer.index ? 'btn-secondary text-white' : 'btn-outline-secondary'"
          >
            <div class="btn btn-dark mr-3">
              {{ ANSWER_LETTER[answerIndex] }}
            </div>
            <div class="answer-text mt-1">
              {{ answer.text }}
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div
          @click="prevNumber()"
          :disabled="currentNumber <= 1"
          :class="{ 'disabled' : currentNumber <= 1 }"
          class="cursor-pointer btn btn-primary"
        >
          <i class="fas fa-chevron-circle-left mr-2"></i> Soal Sebelumnya
        </div>
        <div
          @click="toggleFlagQuiz()"
          class="cursor-pointer btn text-dark"
          :class="chosenFlag ? 'btn-warning' : 'btn-outline-warning'"
          data-toggle="tooltip"
          data-placement="top"
          title="
            Soal yang ditandai akan berwarna kuning di Status Assessment
          "
        >
          <i class="fas fa-flag mr-2"></i> Tandai Soal
        </div>
        <div
          @click="nextNumber()"
          :disabled="currentNumber >= totalQuestions"
          :class="{ 'disabled' : currentNumber >= totalQuestions }"
          class="cursor-pointer btn btn-primary"
        >
          Soal Selanjutnya <i class="fas fa-chevron-circle-right ml-2"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { mapState, mapGetters } from 'vuex';

import RequestMixin from '@/mixins/request-mixin';

const ANSWER_LETTER = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
];

export default {
  mixins: [
    RequestMixin,
  ],
  data() {
    return {
      ANSWER_LETTER,
      chosenAnswer: -1,
      chosenFlag: false,
    };
  },
  computed: {
    ...mapGetters(['totalQuestions']),
    ...mapState([
      'questions',
      'multipleAnswers',
      'chosenAnswers',
    ]),
    currentNumber() {
      return parseInt(this.$route.params.num, 10);
    },
    currentCode() {
      return this.$route.params.code;
    },
    currentQuestion() {
      if (!this.questions.length) {
        return [];
      }

      return this.questions[this.currentNumber - 1];
    },
    currentMultipleAnswer() {
      if (!this.multipleAnswers.length) {
        return [];
      }

      return this.multipleAnswers[this.currentNumber - 1];
    },
    currentAnswer() {
      if (!this.chosenAnswers.length) {
        return [];
      }

      return this.chosenAnswers[this.currentNumber - 1];
    },
    answerPayload() {
      return {
        code: this.currentCode,
        number: this.currentNumber,
        answer: this.chosenAnswer,
        flag: this.chosenFlag,
      };
    },
  },
  mounted() {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });

    this.axiosGet(`/quiz/${this.currentCode}/data`)
      .then(({ data }) => {
        this.updateQuizData(data);
      });
  },
  methods: {
    updateQuizData(data) {
      if (!data.question_data.length) {
        this.$root.flash('Terjadi kesalahan, silahkan coba lagi', 'danger');
        this.$router.push('/quiz');
      }

      this.$store.commit('updateQuestions', JSON.parse(data.question_data));
      this.$store.commit('updateAnswers', JSON.parse(data.answer_data));
      this.$store.commit('updateChosenAnswers', JSON.parse(data.chosen_answer));
      this.$store.commit('updateCreatedAt', data.created_at);
      this.$store.commit('updateQuiz', data.quiz_data);
    },
    updateCurrentAnswer() {
      this.chosenAnswer = this.currentAnswer.index;
      this.chosenFlag = this.currentAnswer.flag;
    },
    submitQuiz() {
      this.axiosPost('/quiz/answer', this.answerPayload)
        .then(({ data }) => {
          this.$store.commit('updateChosenAnswers', JSON.parse(data.chosen_answer));
        });
    },
    answerQuiz(answer) {
      this.chosenAnswer = answer;
      this.submitQuiz();
    },
    toggleFlagQuiz() {
      this.chosenFlag = !this.chosenFlag;
      this.submitQuiz();
    },
    prevNumber() {
      if (this.currentNumber <= 1) {
        return;
      }

      this.$router.push({ params: { num: this.currentNumber - 1 } });
    },
    nextNumber() {
      if (this.currentNumber >= this.totalQuestions) {
        return;
      }

      this.$router.push({ params: { num: this.currentNumber + 1 } });
    },
  },
  watch: {
    questions() {
      this.updateCurrentAnswer();
    },
    currentNumber() {
      this.updateCurrentAnswer();
    },
  },
};
</script>

<style lang="scss" scoped>
.question-text {
  line-height: 1.6;
}
</style>
