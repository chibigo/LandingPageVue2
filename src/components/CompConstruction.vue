<template>
  <div class="list-block">
    <ul v-if="items">
      <li v-for="(item, index) in items" :key="index" class="item" @click="handleClick(item.id)">
        <div class="img">
          <img :src="item.image[0]" alt="sub-banner" />
        </div>
        <div class="title-name">
          <h2 class="title">
            {{ item.title }}
          </h2>
        </div>
        <div class="div"></div>
        <div class="date">{{ item.date }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  methods: {
    handleClick(id) {
      this.$emit('handleSelectedContructor', id);
    },
  },
};
</script>
<style lang="less" scoped>
.list-block {
  ul {
    li {
      .title-name {
        h2 {
          text-align: left;
        }
      }
    }
  }
}
</style>
