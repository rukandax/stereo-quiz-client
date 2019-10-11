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
            v-for="(answer, answerIndex) in currentAnswer"
            :key="`answer-${answerIndex}`"
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
          >
            <div class="btn btn-dark mr-3">
              {{ ANSWER_LETTER[answerIndex] }}
            </div>
            <div class="answer-text mt-1">
              {{ answer }}
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
          class="cursor-pointer btn btn-outline-warning text-dark"
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

const ANSWER_LETTER = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

export default {
  data() {
    return {
      ANSWER_LETTER,
    };
  },
  computed: {
    ...mapGetters(['totalQuestions']),
    ...mapState(['questions', 'answers']),
    currentNumber() {
      return parseInt(this.$route.params.num, 10);
    },
    currentQuestion() {
      if (!this.questions.length) {
        return [];
      }

      return this.questions[this.currentNumber - 1];
    },
    currentAnswer() {
      if (!this.answers.length) {
        return [];
      }

      return this.answers[this.currentNumber - 1];
    },
  },
  mounted() {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  },
  methods: {
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
};
</script>

<style lang="scss" scoped>
.question-text {
  line-height: 1.6;
}
</style>
