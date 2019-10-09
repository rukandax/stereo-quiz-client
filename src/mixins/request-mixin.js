import { decode } from 'jwt-simple';
import $ from 'jquery';
import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

export default {
  computed: {
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

      const responseDecoded = decode(responseEncoded, process.env.VUE_APP_JWT_KEY);

      this.$store.commit('updateUserEmail', responseDecoded.users_email);
      this.$store.commit('updateUserToken', responseDecoded.users_token);

      this.$cookie.set('DB_CREDENTIAL', responseEncoded);
    },
    axiosGet(path, payload) {
      return axios.get(API_URL + path + this.credentialCookie, payload)
        .then(res => res.data)
        .catch((err) => {
          if (err && err.response) {
            if (err.response.status === 401) {
              this.$root.flash(err.response.data.error, 'danger');
            }
          } else {
            this.$root.flash('Terjadi kesalahan, silahkan coba lagi', 'danger');
          }

          throw new Error(err);
        });
    },
    axiosPost(path, payload) {
      return axios.post(API_URL + path + this.credentialCookie, payload)
        .then(res => res.data)
        .catch((err) => {
          if (err && err.response) {
            if (err.response.status === 401) {
              console.log('masuk');
              $('.toast').toast();
              this.$root.flash(err.response.data.error, 'danger');
            }
          } else {
            this.$root.flash('Terjadi kesalahan, silahkan coba lagi', 'danger');
          }

          throw new Error(err);
        });
    },
    axiosPatch(path, payload) {
      return axios.patch(API_URL + path + this.credentialCookie, payload)
        .then(res => res.data)
        .catch((err) => {
          if (err && err.response) {
            if (err.response.status === 401) {
              this.$root.flash(err.response.data.error, 'danger');
            }
          } else {
            this.$root.flash('Terjadi kesalahan, silahkan coba lagi', 'danger');
          }

          throw Error(err);
        });
    },
  },
};
