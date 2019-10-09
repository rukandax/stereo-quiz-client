<template>
  <div id="quiz-history">
    <div class="alert alert-info mb-4">
      Berikut ini adalah sejarah assessment yang pernah Anda kerjakan.
    </div>

    <table class="table table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Judul</th>
          <th scope="col">Tanggal</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Assessment CMLD</td>
          <td>29 September 2019</td>
          <td>
            <span class="badge badge-success">Lulus</span>
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
