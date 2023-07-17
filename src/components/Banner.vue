<template>
  <div class="banner" :class="'slide-' + index">
    <div class="wrapper-bg text-white" @click="handleClickContact(`type-${index == 1 ? 'a' : index == 2 ? 'b' : 'c'}`)">
      <p class="title-underline" :class="{ show: index == 1 }">PolyStyrene(PS)</p>
      <p class="title-underline" :class="{ show: index == 2 }">Polyurethane</p>
      <p class="title-underline" :class="{ show: index == 3 }">Tầm</p>
      <h2 class="subtitle" :class="{ show: index == 1 }">Sản phẩm <br />Phào chỉ PS</h2>
      <h2 class="subtitle" :class="{ show: index == 2 }">Sản phẩm <br />Phào chỉ PU</h2>
      <h2 class="subtitle" :class="{ show: index == 3 }">Sản phẩm <br />Tầm ốp tường</h2>
    </div>

    <p class="click-next" @click="nextSlider">
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20">
        <path
          fill-rule="evenodd"
          d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"
        />
      </svg>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 1,
      menuActive: false,
    };
  },
  created() {
    setInterval(() => {
      this.nextSlider();
    }, 3000);
  },
  methods: {
    nextSlider() {
      this.index++;
      if (this.index > 3) {
        this.index = 1;
      }
    },
    handleClickContact(ele) {
      this.$emit('scrollToContat', ele);
    },
  },
};
</script>
<style scoped></style>
