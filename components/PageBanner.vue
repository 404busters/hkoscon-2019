<style lang="scss">
  .pageBanner {
    padding-top: 3rem;
  }
</style>

<template>
  <div class="pageBanner container">
    <h1 class="title is-2">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'PageBanner',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>
