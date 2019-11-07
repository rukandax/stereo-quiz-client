<template>
  <div id="quiz-assess" class="my-5">
    <div class="row">
      <div class="col-md-8">
        <QuizContent />
      </div>
      <div class="col-md-4">
        <div class="row">
          <QuizTimer @finishQuiz="finishQuiz" />
          <QuizProgress />

          <div class="col-12 mt-4">
            <ModalFinishQuiz @confirmedFinishQuiz="finishQuiz" />
            <div class="cursor-pointer btn btn-block btn-success" data-toggle="modal" data-target="#modal-finish-quiz">
              Selesai Assessment
            </div>
          </div>

          <div class="col-12 mt-4">
            <ModalExitQuiz />
            <div class="cursor-pointer btn btn-block btn-danger" data-toggle="modal" data-target="#modal-exit-quiz">
              Keluar Assessment
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
import { mapGetters } from 'vuex';

import RequestMixin from '@/mixins/request-mixin';

import QuizContent from '@/pages/quiz/components/QuizContent.vue';
import QuizTimer from '@/pages/quiz/components/QuizTimer.vue';
import QuizProgress from '@/pages/quiz/components/QuizProgress.vue';
import ModalFinishQuiz from '@/pages/quiz/components/ModalFinishQuiz.vue';
import ModalExitQuiz from '@/pages/quiz/components/ModalExitQuiz.vue';

export default {
  mixins: [
    RequestMixin,
  ],
  components: {
    QuizContent,
    QuizTimer,
    QuizProgress,
    ModalFinishQuiz,
    ModalExitQuiz,
  },
  computed: {
    ...mapGetters(['totalQuestions']),
    currentNumber() {
      return parseInt(this.$route.params.num, 10);
    },
    currentCode() {
      return this.$route.params.code;
    },
  },
  methods: {
    finishQuiz(reason = '') {
      $('#modal-finish-quiz').modal('hide');

      const payload = {
        code: this.currentCode,
      };

      this.axiosPost('/quiz/finish', payload)
        .then(({ data }) => {
          if (data) {
            if (reason.length) {
              this.$root.flash(reason);
            }

            this.$router.push('/quiz');
          }

          return data;
        });
    },
  },
  watch: {
    totalQuestions() {
      if (this.currentNumber < 1) {
        this.$router.push(`/quiz/${this.currentCode}/assess/1`);
      }

      if (this.currentNumber > this.totalQuestions) {
        this.$router.push(`/quiz/${this.currentCode}/assess/${this.totalQuestions}`);
      }
    },
  },
};
</script>
