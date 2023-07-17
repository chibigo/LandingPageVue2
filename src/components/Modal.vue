<template id="modal">
  <div class="modal">
    <div class="close" @click="close">&times;</div>
    <div class="body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
<style lang="less" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 50px;
}

.modal .body {
  position: absolute;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  height: 90vh;
  overflow: hidden;
  div {
    height: 100%;
    img {
      display: block;
      height: 100%;
      width: auto;
      margin: 0 auto;
      object-fit: contain;
    }
  }
}
.modal .close {
  position: fixed;
  right: 50%;
  transform: translate(50%, 0);
  color: #000;
  font-size: 50px;
  text-align: right;
  top: 30px;
  cursor: pointer;
  z-index: 1;
}
</style>