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
  mounted() {
    this.$root.flashInit();

    if (this.$route.path !== '/login' && !this.isUserSignedIn) {
      this.$router.push('/login');
    }
  },
};
</script>
