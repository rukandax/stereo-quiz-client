<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>

    <FlashMessage :type="$root.flashType" :message="$root.flashMessage" />
  </div>
</template>

<script>
import RequestMixin from '@/mixins/request-mixin';

import FlashMessage from '@/components/FlashMessage.vue';

export default {
  mixins: [
    RequestMixin,
  ],
  components: {
    FlashMessage,
  },
  data() {
    return {
      checkFocusInterval: null,
    };
  },
  methods: {
    checkUserSignedIn() {
      if (this.$route.path !== '/login' && !this.isUserSignedIn) {
        this.$router.push('/login');
      }
    },
    checkFocus() {
      if (this.$route.name === 'quiz-assess') {
        this.checkFocusInterval = setInterval(() => {
          if (!document.hasFocus()) {
            alert('Anda tidak diperbolehkan mengalihkan halaman selama assessment berlangsung.');
          }
        }, 1000);
      } else {
        clearInterval(this.checkFocusInterval);
      }
    },
  },
  mounted() {
    this.$root.flashInit();
    this.checkFocus();
  },
  updated() {
    this.checkFocus();
  },
  watch: {
    isUserSignedIn: {
      handler() {
        this.checkUserSignedIn();
      },
      immediate: true,
    },
  },
};
</script>
