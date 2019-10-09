<template>
  <div id="login-index">
    <div class="row vh-100 d-flex align-items-center justify-content-center">
      <div class="col-6">
        <div class="card shadow">
          <div class="card-body">
            <div class="form-group">
              <label for="nip">NIP</label>
              <input type="text" v-model="nip" class="form-control" id="nip" autocomplete="off" placeholder="Masukan NIP">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" v-model="password" class="form-control" id="password" autocomplete="off" placeholder="Masukan Password">
            </div>
            <button @click="handleLogin()" class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestMixin from '@/mixins/request-mixin';

export default {
  data() {
    return {
      isLoading: false,
      nip: '',
      password: '',
    };
  },
  mixins: [
    RequestMixin,
  ],
  methods: {
    handleLogin() {
      this.isLoading = true;

      const payload = {
        nip: this.nip,
        password: this.password,
      };

      this.axiosPost('/auth', payload)
        .then(({ data }) => {
          if (data) {
            this.saveCredential(data);
            this.$router.push('/quiz');
          }
        })
        .catch(({ response }) => {
          if (response && response.data) {
            if (typeof response.data.error === 'object') {
              this.$root.flash(response.data.error.message, 'danger');
            } else {
              this.$root.flash(response.data.error, 'danger');
            }
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    if (this.isUserSignedIn) {
      this.$router.push('/quiz');
    }
  },
};
</script>
