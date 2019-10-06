<template>
  <div id="quiz-index" class="my-5">
    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <div class="card-body">
            <div class="action-button mb-4">
              <div class="btn btn-primary" data-toggle="modal" data-target="#modal-input-proktor">
                Assessment Baru
              </div>
            </div>

            <QuizHistory />
          </div>
        </div>
      </div>
    </div>

    <ModalInputProktor />
  </div>
</template>

<script>
import QuizHistory from '@/pages/quiz/components/QuizHistory.vue';
import ModalInputProktor from '@/pages/quiz/components/ModalInputProktor.vue';

export default {
  components: {
    QuizHistory,
    ModalInputProktor,
  },
};
</script>
