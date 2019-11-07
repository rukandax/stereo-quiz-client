<template>
  <div id="quiz-detail" class="col-12 mt-4">
    <div class="card shadow">
      <div class="card-header">
        Status Assessment
      </div>
      <div class="card-body">
        <div class="row d-flex justify-content-start">
          <div v-for="(answer, answerIndex) in chosenAnswers" :key="`answer-${answerIndex}`" class="col-3 col-md-6 col-lg-3">
            <router-link
              :to="{ params: { num: answerIndex + 1 } }"
              class="cursor-pointer btn btn-block mb-4"
              :class="
                isCurrentNumber(answerIndex) ? 'btn-secondary'
                  : isFlagged(answer) ? 'btn-warning'
                  : isAnswered(answer) ? 'btn-primary'
                  : 'btn-outline-secondary'
              "
            >
              {{ answerIndex + 1 }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['chosenAnswers']),
    currentNumber() {
      return parseInt(this.$route.params.num, 10);
    },
  },
  methods: {
    isCurrentNumber(answerIndex) {
      return answerIndex + 1 === this.currentNumber;
    },
    isAnswered(answer) {
      return parseInt(answer.index, 10) > -1;
    },
    isFlagged(answer) {
      return answer.flag;
    },
  },
};
</script>
