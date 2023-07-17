<template>
  <main class="section-list-post">
    <div class="list-post">
      <SubBanner title="DANH SÁCH" />
      <section class="list-post-content" v-if="contructors">
        <!-- <h1>List post</h1> -->
        <CompConstruction :items="contructors" @handleSelectedContructor="handleSelectedContructor" />
        <!-- <div class="list-block">
          <ul>
            <li v-for="(item, index) in items" :key="index" class="item" @click="handleClick(index)">
              <div class="img">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/ed1110-rheinstein-001-mnd-6419d73333744.jpg?crop=0.671xw:1.00xh;0.143xw,0&resize=360:*"
                  alt="sub-banner"
                />
              </div>
              <div class="title-name">
                <h2 class="title">
                  12 Fresh Spring Decorating IdeasDecorating IdeasDecorating IdeasDecorating IdeasDecorating Ideas
                </h2>
              </div>
              <div class="div"></div>
              <div class="date">MAR 22, 2023</div>
            </li>
            <li class="item">
              <div class="img">
                <img src="@/assets/images/z4094734809568_ad3e0c46bb0518e943723894cbbc852e.jpg" alt="sub-banner" />
              </div>
              <div class="title-name">
                <h2 class="title">12 Fresh Spring Decorating Ideas</h2>
              </div>
              <div class="div"></div>
              <div class="date">MAR 22, 2023</div>
            </li>
          </ul>
        </div> -->
      </section>
    </div>
  </main>
</template>

<script>
// import User from './api/user';
import SubBanner from '../components/SubBanner.vue';
import CompConstruction from '@/components/CompConstruction.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    SubBanner,
    CompConstruction,
  },
  data() {
    return {
      images: null,
      items: ['PHÀO CHỈ', 'PVC', 'SÀN GỖ', 'PVC', 'LAM SÓNG'],
      currentType: this.$route.query.type || 0,
      data: null,
    };
  },
  computed: {
    ...mapState('products', ['contructors', 'loading']),
    getTypeProduct() {
      return this.contructors;
    },
  },
  watch: {},
  async created() {
    await this.setContructors('contructors');
  },
  async mounted() {},
  methods: {
    ...mapActions({
      setContructors: 'products/SET_CONTRUCTORS',
    }),
    handleSelectedContructor(id) {
      this.$router.push('/posts/' + id);
    },
  },
};
</script>

<style scoped lang="less">
// @media (min-width: 1024px) {
//   .about {
//     display: flex;
//     align-items: center;
//     min-height: 100vh;

//     h1 {
//       color: red;
//     }
//   }
// }
</style>
