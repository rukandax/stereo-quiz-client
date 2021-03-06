import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

export default {
  computed: {
    fingerprint() {
      return window.navigator.userAgent;
    },
    isUserSignedIn() {
      if (this.$cookie.get('DB_CREDENTIAL') && this.$cookie.get('DB_CREDENTIAL').length) {
        return true;
      }

      return false;
    },
    credentialCookie() {
      if (this.$cookie.get('DB_CREDENTIAL') && this.$cookie.get('DB_CREDENTIAL').length) {
        return `?token=${this.$cookie.get('DB_CREDENTIAL')}`;
      }

      return '';
    },
  },
  methods: {
    saveCredential(responseEncoded) {
      if (!responseEncoded.length) {
        return;
      }

      this.$cookie.set('DB_CREDENTIAL', responseEncoded);
    },
    axiosGet(path, payload) {
      return axios.get(API_URL + path + this.credentialCookie, payload)
        .then(res => res.data)
        .catch((err) => {
          if (err && err.response) {
            if (err.response.status === 401) {
              this.$root.flash(err.response.data.error, 'danger');
              this.$cookie.delete('DB_CREDENTIAL');
            }
          } else {
            this.$root.flash('Terjadi kesalahan, silahkan coba lagi', 'danger');
          }

          return new Promise((_, reject) => reject(err));
        });
    },
    axiosPost(path, payload) {
      return axios.post(API_URL + path + this.credentialCookie, payload)
        .then(res => res.data)
        .catch((err) => {
          if (err && err.response) {
            if (err.response.status === 401) {
              this.$root.flash(err.response.data.error, 'danger');
              this.$cookie.delete('DB_CREDENTIAL');
            }
          } else {
            this.$root.flash('Terjadi kesalahan, silahkan coba lagi', 'danger');
          }

          return new Promise((_, reject) => reject(err));
        });
    },
    axiosPatch(path, payload) {
      return axios.patch(API_URL + path + this.credentialCookie, payload)
        .then(res => res.data)
        .catch((err) => {
          if (err && err.response) {
            if (err.response.status === 401) {
              this.$root.flash(err.response.data.error, 'danger');
              this.$cookie.delete('DB_CREDENTIAL');
            }
          } else {
            this.$root.flash('Terjadi kesalahan, silahkan coba lagi', 'danger');
          }

          return new Promise((_, reject) => reject(err));
        });
    },
  },
};
