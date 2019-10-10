<template>
  <div id="quiz-detail" class="col-12 mt-4">
    <div class="card shadow">
      <div class="card-header">
        Status Assessment
      </div>
      <div class="card-body">
        <div class="row d-flex justify-content-start">
          <div v-for="num in totalQuestions" :key="`num-${num}`" class="col-3 col-md-6 col-lg-3">
            <router-link
              :to="{ params: { num } }"
              class="cursor-pointer btn btn-block mb-4"
              :class="num === currentNumber ? 'btn-secondary' : 'btn-outline-secondary'"
            >
              {{ num }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['totalQuestions']),
    currentNumber() {
      return parseInt(this.$route.params.num, 10);
    },
  },
};
</script>
