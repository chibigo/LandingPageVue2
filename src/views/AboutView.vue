<template>
  <main>
    <div class="about">
      <SubBanner title="CATALOG" />
      <div class="about-content">
        <!-- <h2 class="title">{{ getTypeProduct }}</h2> -->
        <!-- <div class="block-filter">
          <select name="product" v-model="currentType" @change="changeTypeProduct" list="product" id="product">
            <option value="">Chọn loại sản phẩm</option>
            <option value="0">PHÀO CHỈ</option>
            <option value="1">PVC</option>
            <option value="2">SÀN GỖ</option>
            <option value="3">PVC</option>
            <option value="4">LAM SÓNG</option>
          </select>
        </div> -->
        <div class="main-filter">
          <h1 class="title">Loại chính</h1>
          <ul class="flex-block">
            <li :class="{ active: currentType == '0' }"><a @click="handleSelectedMainType('0')">PHÀO CHỈ</a></li>
            <li :class="{ active: currentType == '1' }"><a @click="handleSelectedMainType('1')">SÀN GỖ</a></li>
            <li :class="{ active: currentType == '2' }"><a @click="handleSelectedMainType('2')">LAM SÓNG</a></li>
            <li :class="{ active: currentType == '3' }">
              <a @click="handleSelectedMainType('3')">PVC</a>
            </li>
          </ul>
        </div>
        <div class="sub-filter">
          <h1 class="title">Chi tiết từng loại</h1>
          <ul class="flex-block" :class="{ disable: !(currentType == '0') }">
            <li
              :class="{ active: subType == index }"
              v-for="(item, index) in phaoChi"
              :key="index"
              @click="handleSelectedSubType(index)"
            >
              <a>{{ item }}</a>
            </li>
          </ul>
          <ul class="flex-block" :class="{ disable: !(currentType == '1') }">
            <li
              :class="{ active: subType == index }"
              v-for="(item, index) in sanGo"
              :key="index"
              @click="handleSelectedSubType(index)"
            >
              <a>{{ item }}</a>
            </li>
          </ul>
          <ul class="flex-block" :class="{ disable: !(currentType == '2') }">
            <li
              :class="{ active: subType == index }"
              v-for="(item, index) in lamSong"
              :key="index"
              @click="handleSelectedSubType(index)"
            >
              <a>{{ item }}</a>
            </li>
          </ul>
          <ul>
            <li><a></a></li>
          </ul>
        </div>
        <section class="catalog-block" v-if="!loading && getDataProducts">
          <div class="img" v-for="(image, index) in images" :key="index">
            <img :src="image.url" alt="hai-ha-decor" @click="imageView(index)" loading="lazy" />
            <div class="overlay" @click="imageView(index)">
              <h3>Click để phóng to</h3>
            </div>
          </div>
        </section>
        <div class="not-found" v-if="images?.length <= 0">Không tìm thấy sản phẩm</div>
        <div class="readmore">
          <a :href="handleUrlDriver()" class="slider" target="_blank">Xem thêm</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import User from './api/user';
import SubBanner from '../components/SubBanner.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    SubBanner,
  },
  data() {
    return {
      images: null,
      titleTypeProduct: ['PHÀO CHỈ', 'PVC', 'SÀN GỖ', 'PVC', 'LAM SÓNG'],
      phaoChi: ['CHỈ TRẦN', 'CHỈ TƯỜNG', 'PHÙ ĐIÊU'],
      sanGo: ['SÀN GỖ CÔNG NGHIỆP', 'SÀN NHỰA HÈM', 'SÀN NHỰA SPC'],
      lamSong: ['LAM SÓNG NGOÀI TRỜI', 'LAM SÓNG TRONG NHÀ', 'SÀN NHỰA NGOÀI TRỜI'],
      currentType: this.$route.query.type || 0,
      data: null,
      subType: this.$route.query.subType || 0,
      linkDriver: [
        {
          type: 'phaochi',
          name: 'chitran',
          url: 'https://drive.google.com/drive/u/3/folders/19iZrByzOW6dlPgvT04WnnTbSG1qpTe8b',
        },
        {
          type: 'phaochi',
          name: 'chituong',
          url: 'https://drive.google.com/drive/u/3/folders/1qrW-Hsju2AbCNSkJ6rui07fpIwxyYI-v',
        },
        {
          type: 'phaochi',
          name: 'phudieu',
          url: 'https://drive.google.com/drive/u/3/folders/1d5ApVQsJO_epvKccKehK8LnMzzxYWdeo',
        },
        {
          type: 'lamsong',
          name: 'ngoaitroi',
          url: 'https://drive.google.com/drive/u/3/folders/1aUf5zqb3UH1CA0dzENzynZUV6D6eH563',
        },
        {
          type: 'lamsong',
          name: 'trongnha',
          url: 'https://drive.google.com/drive/u/3/folders/1-XqNuUemE3c5WWfNtfO7VqcPedVQNE0V',
        },
        {
          type: 'lamsong',
          name: 'sannhuangoaitroi',
          url: 'https://drive.google.com/drive/u/3/folders/11gsmxRsDU46qrzpFW4n6Uqr1d92l-jJd',
        },
        {
          type: 'sango',
          name: 'sangocongnghiep',
          url: 'https://drive.google.com/drive/u/3/folders/19cJ0IWP_CXoHyyamOMVmZnY9GM0kq8zq',
        },
        {
          type: 'sango',
          name: 'nhuahem',
          url: 'https://drive.google.com/drive/u/3/folders/154jS0LjujFIduXVCuQu8t9SJuenh1pEh',
        },
        {
          type: 'sango',
          name: 'nhuaspc',
          url: 'https://drive.google.com/drive/u/3/folders/1GGJcjNlDKa9JhPiz45WjiUbJEOK7yg6y',
        },
        {
          type: 'pvc',
          name: null,
          url: 'https://drive.google.com/drive/u/3/folders/19PhFcZuwroHuRw0YUI4Ah66bddX9udzY',
        },
      ],
    };
  },
  computed: {
    ...mapState('products', ['products', 'loading']),
    getTypeProduct() {
      return this.titleTypeProduct[this.$route.query.type];
    },
    getDataProducts() {
      this.images = this.products;
      return this.images;
    },
    convertTypetoName() {
      switch (Number(this.currentType)) {
        case 0:
          return 'phaochi';
        case 1:
          return 'sango';
        case 2:
          return 'lamsong';
        default:
          return 'pvc';
      }
    },
    convertSubType() {
      if (Number(this.currentType) == 0) {
        switch (Number(this.subType)) {
          case 0:
            return 'chitran';
          case 1:
            return 'chituong';
          default:
            return 'phudieu';
        }
      }
      if (Number(this.currentType) == 1) {
        switch (Number(this.subType)) {
          case 0:
            return 'sangocongnghiep';
          case 1:
            return 'nhuahem';
          default:
            return 'nhuaspc';
        }
      }
      if (Number(this.currentType) == 2) {
        switch (Number(this.subType)) {
          case 0:
            return 'ngoaitroi';
          case 1:
            return 'trongnha';
          default:
            return 'sannhuangoaitroi';
        }
      }
    },
    checkSubTypeUrlDriver() {
      let url = '';
      let dem = 0;
      this.linkDriver.forEach((element) => {
        if (this.convertTypetoName == element.type && this.convertSubType == element.name && element.name != null) {
          url = element.url;
          return url;
        } else {
          if (this.convertTypetoName == element.type && element.name == null) {
            url = element.url;
            return url;
          }
        }
      });
      return url;
    },
  },
  watch: {
    '$route.query': async function () {
      this.currentType = this.$route.query.type;
      this.subType = this.$route.query.subType;
      const param = {
        type: this.convertTypetoName,
        name: this.convertSubType,
        collectionName: 'image_catalog',
      };
      await this.setProducts(param);
      if (this.images) {
        this.$imageViewer.images(this.images);
        this.currentType = this.$route.query.type || 0;
      }
    },
  },
  async created() {
    if (Object.keys(this.$route.query).length === 0 && this.$route.query.constructor === Object) {
      this.$router.push({
        name: 'catalog',
        query: {
          type: 0,
          subType: this.subType,
        },
      });
    }
    const param = {
      type: this.convertTypetoName,
      name: this.convertSubType,
      collectionName: 'image_catalog',
    };
    await this.setProducts(param);
    if (this.images) {
      this.$imageViewer.images(this.images);
    }
  },
  async mounted() {},
  methods: {
    ...mapActions({
      setProducts: 'products/SET_PRODUCTS',
    }),
    imageView(index) {
      this.$imageViewer.index(index);
      this.$imageViewer.show();
    },
    changeTypeProduct(type, subType) {
      switch (Number(type)) {
        case 0:
          this.$router.push({
            name: 'catalog',
            query: {
              type: 0,
              subType: subType,
            },
          });
          break;
        case 1:
          this.$router.push({
            name: 'catalog',
            query: {
              type: 1,
              subType: subType,
            },
          });
          break;
        case 2:
          this.$router.push({
            name: 'catalog',
            query: {
              type: 2,
              subType: subType,
            },
          });
          break;
        default:
          this.$router.push({
            name: 'catalog',
            query: {
              type: 3,
              subType: subType,
            },
          });
          break;
      }
    },
    handleSelectedMainType(type) {
      this.currentType = type;
      this.subType = 0;
      this.changeTypeProduct(this.currentType, this.subType);
    },
    handleSelectedSubType(subType) {
      this.subType = subType;
      this.changeTypeProduct(this.currentType, this.subType);
    },
    handleUrlDriver() {
      let url = this.checkSubTypeUrlDriver;
      return url;
    },
  },
};
</script>

<style lang="less">
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
