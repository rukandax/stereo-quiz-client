<template>
  <div id="quiz-timer" class="col-12">
    <div class="card bg-warning shadow">
      <div class="card-body mb-0 h5 d-flex justify-content-center align-items-center">
        <span v-if="hours > 0">{{ hours }} jam &nbsp;</span>
        <span>{{ minutes || 0 }} menit &nbsp;</span>
        <span>{{ seconds || 0 }} detik &nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import RequestMixin from '@/mixins/request-mixin';

export default {
  mixins: [
    RequestMixin,
  ],
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  computed: {
    ...mapState(['createdAt', 'quiz']),
  },
  mounted() {
    this.$store.commit('updateCreatedAt', 0);
  },
  watch: {
    createdAt() {
      let timerInterval = null;

      const vue = this;
      timerInterval = setInterval(() => {
        const eventTime = parseInt(this.createdAt, 10) + (parseInt(this.quiz.duration, 10) * 60);
        const currentTime = this.$moment().unix();
        const diffTime = eventTime - currentTime;
        const duration = this.$moment.duration(diffTime * 1000, 'milliseconds');

        vue.days = vue.$moment.duration(duration).days();
        vue.hours = vue.$moment.duration(duration).hours();
        vue.minutes = vue.$moment.duration(duration).minutes();
        vue.seconds = vue.$moment.duration(duration).seconds();

        if (vue.createdAt > 0 && vue.days <= 0 && vue.hours <= 0 && vue.minutes <= 0 && vue.seconds <= 0) {
          clearInterval(timerInterval);
          vue.$emit('finishQuiz', 'Waktu assessment telah berakhir');
        }
      }, 1000);
    },
  },
};
</script>
