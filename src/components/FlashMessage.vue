<template>
  <div id="flash-message" :class="`toast bg-${type}`">
    <div class="toast-body text-white">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'success',
    },
    message: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.toast {
  top: 0;
  position: fixed;
  right: calc(50% - 170px);
  width: 500px;
  text-align: center;
  transition: all .5s ease-in-out;
}

.toast.show {
  transition: all .5s ease-in-out;
  top: 100px;
}
</style>
