<template>
  <main class="section-detail-post">
    <div class="post">
      <SubBanner title="CHI TIẾT" />
      <section v-if="contructor" class="list-post-content">
        <h1>{{ contructor.title }}</h1>
        <div class="block-content">
          <div class="block-left">
            <div
              v-for="(image, index) in contructor.image"
              :key="index"
              class="img-item"
              @click="handleSelectImage(index)"
            >
              <img :src="image" :alt="contructor.title" loading="lazy" />
            </div>
          </div>
          <div class="block-right">
            <h5>
              Tên công trình: <span class="text">{{ contructor.title }}</span>
            </h5>
            <h5>
              Ngày hoàn thành: <span class="text">{{ contructor.date }}</span>
            </h5>
          </div>
        </div>
        <!-- <div class="block-images">
          <div class="image">
            <div class="main-image" v-if="getMainImage">
              <div class="img-item"><img :src="getMainImage" :alt="contructor.name" loading="lazy" /></div>
            </div>
            <div class="sub-image">
              <div
                v-for="(image, index) in contructor.image"
                :key="index"
                class="img-item"
                @click="handleSelectImage(index)"
              >
                <img :src="image" :alt="contructor.title" loading="lazy" />
              </div>
            </div>
          </div>
        </div> -->
      </section>
    </div>
  </main>
</template>

<script>
// import User from './api/user';
import { mapActions, mapState } from 'vuex';
import SubBanner from '../components/SubBanner.vue';
import CompConstruction from '@/components/CompConstruction.vue';

export default {
  components: {
    SubBanner,
    CompConstruction,
  },
  data() {
    return {
      images: null,
      data: null,
      imageSelected: null,
      items: ['PHÀO CHỈ', 'PVC', 'SÀN GỖ', 'PVC', 'LAM SÓNG'],
      id: this.$route.params.id || 'OyzOTKnjJwtWUGQZ01Xv',
    };
  },
  computed: {
    ...mapState('products', ['contructor', 'itemSuggest', 'loading']),
    getMainImage() {
      return this.imageSelected || this.contructor?.image[0];
    },
  },
  watch: {
    '$route.params.id': async function () {
      const param = {
        collection: 'contructors',
        id: this.$route.params.id,
      };
      await this.setContructors(param);
    },
  },
  async created() {
    const params = {
      collection: 'contructors',
      id: this.id,
    };
    const paramsLimit = {
      collection: 'contructors',
      limit: 4,
    };
    await this.setContructors(params);
    await this.setContructorsLimit(paramsLimit);
  },
  methods: {
    ...mapActions({
      setContructors: 'products/SET_CONTRUCTORS_DETAIL',
      setContructorsLimit: 'products/SET_CONTRUCTORS_LIMIT',
    }),
    handleSelectImage(index) {
      this.imageSelected = this.contructor.image[index];
    },
    handleSelectedContructor(id) {
      this.$router.push('/posts/' + id);
    },
  },
};
</script>

<style scoped lang="less">
.section-detail-post {
  background-color: white;

  .list-post-content {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 5rem;
    @media (max-width: 1023px) {
      width: 100%;
      padding: 20px;
    }
    @media (max-width: 768px) {
      width: 100%;
      padding: 20px;
    }

    h1 {
      padding: 1.5rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: black;
      text-align: left;
      &::after {
        content: '';
        position: absolute;
        width: 50px;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0.5em;
        border-top: 2px solid black;
        z-index: 1;
      }
    }

    h2 {
      position: relative;
      text-align: center;
      font-size: 2.5rem;
      font-weight: 700;
      padding: 1rem 0;
    }
    .sub-title {
      padding-bottom: 1rem;
    }
    .block-images {
      .image {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 768px) {
          display: block;
        }

        .main-image {
          width: 75%;
          @media (max-width: 768px) {
            width: 100%;
          }

          .img-item {
            height: 700px;
            overflow: hidden;
            @media (max-width: 768px) {
              height: 400px;
            }

            img {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }

        .sub-image {
          width: 23%;
          height: 700px;
          overflow-x: hidden;
          overflow-y: scroll;
          @media (max-width: 768px) {
            width: 100%;
            height: auto;
            margin-top: 10px;
            margin-bottom: 10px;
            overflow: auto;
            white-space: nowrap;
          }

          .img-item {
            height: 250px;
            overflow: hidden;
            @media (max-width: 768px) {
              display: inline-block;
              width: 100px;
              height: 100px;
              margin-right: 20px;
              margin-bottom: 20px;
              vertical-align: bottom;
            }

            &:not(:last-child) {
              margin-bottom: 20px;
            }

            img {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }

    .block-contents {
      .title {
        font-size: 2rem;
      }

      .sub-title {
        text-align: center;
        letter-spacing: 2px;
      }

      .contents {
        font-size: 1.5rem;

        p {
          img {
            display: block;
            width: 80%;
            margin: 20px auto;
          }
        }
        img {
          display: block;
          width: 80%;
          margin: 20px auto;
        }
      }
    }

    .block-content {
      position: relative;
      display: flex;
      gap: 2rem;
      @media (max-width: 1023px) {
        gap: 1rem;
      }
      .block-left {
        width: 65%;
        @media (max-width: 1023px) {
          width: 100%;
        }
        @media (max-width: 768px) {
        }
        .img-item {
          width: 100%;
          margin-bottom: 2rem;
          img {
            display: block;
            width: 100%;
            height: 100%;
            max-height: 100vh;
            object-fit: contain;
          }
        }
      }
      .block-right {
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 120px;
        width: 35%;
        height: 400px;
        @media (max-width: 1023px) {
          display: none;
          height: 50vh;
        }
        @media (max-width: 768px) {
          height: 50vh;
        }
        h5 {
          font-weight: 700;
          color: #000;
          font-size: 18px;
          .text {
            font-weight: 400;
          }
        }
      }
    }
  }
}
</style>
