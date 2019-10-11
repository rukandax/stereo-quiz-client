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

export default {
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
  watch: {
    createdAt() {
      const eventTime = parseInt(this.createdAt, 10) + (parseInt(this.quiz.duration, 10) * 60);
      const currentTime = this.$moment().unix();
      const diffTime = eventTime - currentTime;
      const interval = 1000;
      let duration = this.$moment.duration(diffTime * 1000, 'milliseconds');

      if (diffTime > 0) {
        const vue = this;
        setInterval(() => {
          duration = vue.$moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
          vue.days = vue.$moment.duration(duration).days();
          vue.hours = vue.$moment.duration(duration).hours();
          vue.minutes = vue.$moment.duration(duration).minutes();
          vue.seconds = vue.$moment.duration(duration).seconds();
        }, interval);
      } else {
        this.$root.flash('Waktu assessment telah berakhir');
        this.$router.push('/quiz');
      }
    },
  },
};
</script>
