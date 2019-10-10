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
    currentNumber() {
      return parseInt(this.$route.params.num, 10);
    },
  },
  mounted() {
    if (this.currentNumber && this.currentNumber < 1) {
      this.$router.push(`/quiz/${this.$route.params.code}/assess/1`);
    }

    this.axiosGet(`/quiz/${this.$route.params.code}/data`)
      .then(({ data }) => {
        this.$store.commit('updateQuestions', JSON.parse(data.question));
        this.$store.commit('updateAnswers', JSON.parse(data.answer));
      });
  },
};
</script>
