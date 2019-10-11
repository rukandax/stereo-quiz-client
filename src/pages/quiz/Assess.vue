<template>
  <div id="quiz-assess" class="my-5">
    <div class="row">
      <div class="col-md-8">
        <QuizContent />
      </div>
      <div class="col-md-4">
        <div class="row">
          <QuizTimer />
          <QuizProgress />

          <div class="col-12 mt-4">
            <div class="cursor-pointer btn btn-block btn-success">
              Selesai Assessment
            </div>
          </div>

          <div class="col-12 mt-4">
            <div class="cursor-pointer btn btn-block btn-danger">
              Keluar Assessment
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

import RequestMixin from '@/mixins/request-mixin';

import QuizContent from '@/pages/quiz/components/QuizContent.vue';
import QuizTimer from '@/pages/quiz/components/QuizTimer.vue';
import QuizProgress from '@/pages/quiz/components/QuizProgress.vue';

export default {
  mixins: [
    RequestMixin,
  ],
  components: {
    QuizContent,
    QuizTimer,
    QuizProgress,
  },
  computed: {
    ...mapGetters(['totalQuestions']),
    currentNumber() {
      return parseInt(this.$route.params.num, 10);
    },
  },
  mounted() {
    this.axiosGet(`/quiz/${this.$route.params.code}/data`)
      .then(({ data }) => {
        this.$store.commit('updateQuestions', data.question_data);
        this.$store.commit('updateAnswers', data.answer_data);
        this.$store.commit('updateCreatedAt', data.created_at);
        this.$store.commit('updateQuiz', data.quiz_data);
      });
  },
  watch: {
    totalQuestions() {
      if (this.currentNumber < 1) {
        this.$router.push(`/quiz/${this.$route.params.code}/assess/1`);
      }

      if (this.totalQuestions && this.currentNumber > this.totalQuestions) {
        this.$router.push(`/quiz/${this.$route.params.code}/assess/${this.totalQuestions}`);
      }
    },
  },
};
</script>
