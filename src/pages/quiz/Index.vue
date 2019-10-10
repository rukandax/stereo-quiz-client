<template>
  <div id="quiz-index" class="my-5">
    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <div class="card-body">
            <div class="action-button mb-4 d-flex justify-content-between align-items-center">
              <div class="btn btn-primary" data-toggle="modal" data-target="#modal-input-proktor">
                Kerjakan Assessment
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <img :src="`https://api.adorable.io/avatars/14/${user.email}.png`" class="img-thumbnail rounded">
                <div class="ml-2">
                  <div class="font-weight-bold">{{ user.name }}</div>
                  <a href="#" class="text-muted small"><i class="fas fa-chevron-right"></i> Pengaturan</a>
                </div>
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
import { mapState } from 'vuex';

import RequestMixin from '@/mixins/request-mixin';

import QuizHistory from '@/pages/quiz/components/QuizHistory.vue';
import ModalInputProktor from '@/pages/quiz/components/ModalInputProktor.vue';

export default {
  mixins: [
    RequestMixin,
  ],
  components: {
    QuizHistory,
    ModalInputProktor,
  },
  computed: {
    ...mapState(['user']),
  },
  mounted() {
    this.axiosGet('/me')
      .then(({ data }) => {
        this.$store.commit('updateUser', data);
      });
  },
};
</script>
