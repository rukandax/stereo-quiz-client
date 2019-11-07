<template>
  <div id="modal-logout" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-logout-label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-logout-label">Selesai Assessment</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Apa anda yakin ingin keluar dari sistem assessment ?
        </div>
        <div class="modal-footer">
          <button @click="logout()" type="button" class="btn btn-primary">Ya, Keluar</button>
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
  methods: {
    logout() {
      this.axiosGet('/logout')
        .then(() => {
          this.$root.flash('Berhasil logout');
          this.$cookie.delete('DB_CREDENTIAL');
          this.$router.push('/login');
        });
    },
  },
};
</script>
