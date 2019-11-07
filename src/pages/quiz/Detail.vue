<template>
  <div id="quiz-detail" class="my-5">
    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <div class="card-body">
            <h3 class="mb-5">Detail Assessment</h3>
            <div class="row">
              <div class="col-6">
                <table class="table table-hover table-striped">
                  <tbody>
                    <tr>
                      <td class="align-middle">Peserta (NIP)</td>
                      <td class="align-middle">:</td>
                      <td class="align-middle">{{ user.name }} ({{ user.nip }})</td>
                    </tr>
                    <tr>
                      <td class="align-middle">Divisi</td>
                      <td class="align-middle">:</td>
                      <td class="align-middle">{{ user.division_name }}</td>
                    </tr>
                    <tr>
                      <td class="align-middle">Departement</td>
                      <td class="align-middle">:</td>
                      <td class="align-middle">{{ user.departement_name }}</td>
                    </tr>
                    <tr>
                      <td class="align-middle">Assessment</td>
                      <td class="align-middle">:</td>
                      <td class="align-middle">{{ quiz.name }}</td>
                    </tr>
                    <tr>
                      <td class="align-middle">Kelas</td>
                      <td class="align-middle">:</td>
                      <td class="align-middle">{{ quiz.proktor_name }}</td>
                    </tr>
                    <tr>
                      <td class="align-middle">Jumlah Soal</td>
                      <td class="align-middle">:</td>
                      <td class="align-middle">{{ quiz.count_total_quiz_data }} Soal</td>
                    </tr>
                    <tr>
                      <td class="align-middle">Jadwal Pelaksanaan</td>
                      <td class="align-middle">:</td>
                      <td class="align-middle">{{ $moment(quiz.date).format('Do MMMM YYYY') }}</td>
                    </tr>
                    <tr>
                      <td class="align-middle">Durasi</td>
                      <td class="align-middle">:</td>
                      <td class="align-middle">{{ quiz.duration }} Menit</td>
                    </tr>
                    <tr>
                      <td class="align-middle">Nama Proktor</td>
                      <td class="align-middle">:</td>
                      <td class="align-middle">{{ quiz.proktor_user_name }}</td>
                    </tr>
                    <tr>
                      <td class="align-middle">Kode Proktor</td>
                      <td class="align-middle">:</td>
                      <td class="align-middle">{{ $route.params.code.toUpperCase() }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-6 px-5">
                <div class="alert alert-warning p-0 mb-5">
                  <ul class="my-4 mx-0">
                    <li class="mb-3">
                      Pastikan data telah sesuai dengan assessment yang ingin Anda kerjakan
                    </li>
                    <li class="mb-3">
                      Pastikan Anda memiliki koneksi internet yang stabil
                    </li>
                    <li class="mb-3">
                      Waktu pengerjaan akan dimulai saat anda menekan tombol "Mulai Assessment"
                    </li>
                    <li class="mb-3">
                      Setelah menekan tombol "Mulai Assessment", waktu pengerjaan akan tetap berjalan walaupun sistem ditutup atau logout
                    </li>
                    <li>
                      Anda tidak diperbolehkan mengalihkan halaman selama assessment berlangsung
                    </li>
                  </ul>
                </div>

                <div @click="startQuiz()" class="btn btn-primary btn-block mb-4">Mulai Assessment</div>
                <router-link to="/quiz" class="btn btn-outline-secondary btn-block mb-4">Kembali ke halaman sebelumnya</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      user: {},
      quiz: {},
    };
  },
  computed: {
    currentCode() {
      return this.$route.params.code;
    },
  },
  mounted() {
    this.axiosGet('/me')
      .then(({ data }) => {
        this.user = data;
      });

    this.axiosGet(`/quiz/${this.currentCode}`)
      .then(({ data }) => {
        this.quiz = data;
      })
      .catch((err) => {
        if (err && err.response) {
          this.$root.flash(err.response.data.error, 'danger');
        } else {
          this.$root.flash('Terjadi kesalahan, silahkan coba lagi', 'danger');
        }

        this.$router.push('/quiz');
      });
  },
  methods: {
    startQuiz() {
      const payload = {
        code: this.currentCode,
      };

      this.axiosPost('/quiz/start', payload)
        .then(({ data }) => {
          if (data) {
            this.$router.push(`/quiz/${this.currentCode}/assess`);
          }
        });
    },
  },
};
</script>
