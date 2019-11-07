<template>
  <div id="modal-finish-quiz" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-finish-quiz-label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-finish-quiz-label">Selesai Assessment</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Anda tidak bisa kembali mengerjakan assessment ini jika sudah dinyatakan selesai.<br><br>
          Anda masih memiliki waktu, apa Anda yakin ingin menyelesaikan assessment sekarang ?
        </div>
        <div class="modal-footer">
          <button @click="$emit('confirmedFinishQuiz')" type="button" class="btn btn-primary">Ya, Mengerti & Selesai</button>
        </div>
      </div>
    </div>
  </div>
</template>
