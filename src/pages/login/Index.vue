<template>
  <div id="login-index">
    <div class="row vh-100 d-flex align-items-center justify-content-center">
      <div class="col-6">
        <div class="card shadow">
          <div class="card-body">
            <div class="form-group">
              <label for="nip">NIP</label>
              <input type="email" class="form-control" id="nip" placeholder="Masukan NIP">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Masukan Password">
            </div>
            <button class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleLogin() {
      this.$router.push('/quiz');
    },
  },
};
</script>
