<template>
  <div class="sub-banner">
    <div class="img">
      <img src="@/assets/images/z4094734809568_ad3e0c46bb0518e943723894cbbc852e.jpg" alt="sub-banner" />
    </div>
    <h2 class="title">{{ title }}</h2>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    nextSlider() {},
  },
};
</script>
<style scoped>
</style>
