<template>
  <div id="quiz-index" class="my-5">
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
import QuizContent from '@/pages/quiz/components/QuizContent.vue';
import QuizTimer from '@/pages/quiz/components/QuizTimer.vue';
import QuizProgress from '@/pages/quiz/components/QuizProgress.vue';

export default {
  components: {
    QuizContent,
    QuizTimer,
    QuizProgress,
  },
};
</script>
