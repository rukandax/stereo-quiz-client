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
              <a href="#" class="profile">
                <img :src="`https://api.adorable.io/avatars/14/${user.email}.png`" class="img-thumbnail rounded mr-2">
                <span class="font-weight-bold">{{ user.name }}</span>
              </a>
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
