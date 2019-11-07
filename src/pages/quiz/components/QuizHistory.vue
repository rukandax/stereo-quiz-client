<template>
  <div id="quiz-history">
    <div class="alert alert-info mb-4">
      Berikut ini adalah sejarah assessment yang pernah Anda kerjakan.
    </div>

    <table class="table table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">No</th>
          <th scope="col">Judul</th>
          <th scope="col">Kelas</th>
          <th scope="col">Tanggal</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="quiz.length <= 0">
          <td class="text-center" colspan="5">Belum ada assessment yang Anda kerjakan.</td>
        </tr>
        <tr v-else v-for="(qz, qzIndex) in quiz" :key="`quiz-${qz.id}`">
          <th class="align-middle" scope="row">{{ qzIndex + 1 }}</th>
          <td class="align-middle">{{ qz.quiz_name }}</td>
          <td class="align-middle">{{ qz.proktor_name }}</td>
          <td class="align-middle">{{ $moment(qz.date).format('Do MMMM YYYY') }}</td>
          <td class="align-middle">
            <router-link
              :to="`/quiz/${(qz.proktor_code || '').toLowerCase()}/assess`"
              v-if="qz.state === 'PENDING'"
              disabled class="btn btn-info btn-sm"
            >
              Lanjut Mengerjakan
            </router-link>
            <div
              v-else-if="qz.state === 'EVALUATING'"
              disabled class="btn btn-secondary btn-sm disabled"
            >
              Dalam Proses Koreksi Otomatis
            </div>
            <div v-else class="btn btn-info btn-sm">Status Kelulusan (4/4)</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import RequestMixin from '@/mixins/request-mixin';

export default {
  mixins: [
    RequestMixin,
  ],
  data() {
    return {
      quiz: [],
    };
  },
  mounted() {
    this.axiosGet('/quiz')
      .then(({ data }) => {
        this.quiz = data;
      });
  },
};
</script>
