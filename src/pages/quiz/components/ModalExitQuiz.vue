<template>
  <div id="modal-exit-quiz" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-exit-quiz-label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-exit-quiz-label">Keluar Assessment</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Waktu assessment akan tetap berjalan walaupun Anda keluar dari sistem.<br><br>
          Anda masih bisa melanjutkan assessment jika masih ada waktu yang tersisa.
        </div>
        <div class="modal-footer">
          <button @click="confirmedLogout()" type="button" class="btn btn-primary">Ya, Mengerti & Keluar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  methods: {
    confirmedLogout() {
      $('#modal-exit-quiz').modal('hide');
      this.$router.push('/quiz');
    },
  },
};
</script>
