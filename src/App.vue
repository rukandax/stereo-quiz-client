<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>

    <FlashMessage :type="$root.flashType" :message="$root.flashMessage" />
  </div>
</template>

<script>
import FlashMessage from '@/components/FlashMessage.vue';

export default {
  components: {
    FlashMessage,
  },
  mounted() {
    this.$root.flashInit();
  },
};
</script>
