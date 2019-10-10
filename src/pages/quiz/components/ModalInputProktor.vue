<template>
  <div id="modal-input-proktor" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-input-proktor-label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-input-proktor-label">Kerjakan Assessment</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="code">Kode Proktor</label>
            <input type="text" class="form-control" id="code" v-model="code" placeholder="Masukan Kode Proktor">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
          <button @click="validateCode()" type="button" class="btn btn-primary">Masuk</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

import RequestMixin from '@/mixins/request-mixin';

export default {
  mixins: [
    RequestMixin,
  ],
  data() {
    return {
      code: '',
    };
  },
  methods: {
    validateCode() {
      const payload = {
        code: this.code,
      };

      this.axiosPost('/quiz/validate', payload)
        .then(({ data }) => {
          $('#modal-input-proktor').modal('hide');

          if (data.status === 'valid') {
            this.$router.push(`/quiz/${this.code.toLowerCase()}`);
          } else {
            this.$root.flash(data.message, 'danger');
          }

          this.code = '';
        });
    },
  },
  watch: {
    code(val, oldVal) {
      if (val !== oldVal) {
        this.code = val.toUpperCase();
      }
    },
  },
};
</script>
