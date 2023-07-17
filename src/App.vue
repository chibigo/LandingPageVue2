<template>
  <div id="app">
    <CompHeader @scrollToContat="scrollToContat" @changeTypeProduct="changeTypeProduct" />
    <router-view @handleCatalog="changeTypeProduct" />
    <CompHotline />
    <CompFooter ref="bottom" id="contact" />
    <section class="button-scroll-top" :class="{ show: scrollTop > 50 }" @click="topFunction">&#10095;</section>
  </div>
</template>
<script>
import CompFooter from './components/CompFooter.vue';
import CompHeader from './components/CompHeader.vue';
import CompHotline from './components/CompHotline.vue';

export default {
  components: {
    CompHeader,
    CompFooter,
    CompHotline,
  },
  data() {
    return {
      scrollTop: 0,
      index: 1,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      this.scrollTop = event.target.scrollingElement.scrollTop;
    },
    topFunction() {
      // document.body.scrollTop = 0; // For Safari
      // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
    scrollToContat(element) {
      const el = document.querySelector(`#${element}`);
      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      } else {
        this.$router.push('/');
        this.scrollToContat();
      }
    },
    changeTypeProduct(type) {
      this.$router.push({
        name: 'catalog',
        query: { type: type, subType: 0 },
      });
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  max-height: 100vh;
  line-height: 1.5;
  z-index: 999;
}

.logo {
  display: block;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;

  /* border-left: 1px solid var(--color-border); */
}

nav a:nth-child(3) {
  border: 0;
}

@media (min-width: 1024px) {
  /* header { */
  /* padding-right: calc(var(--section-gap) / 2); */
  /* } */

  nav {
    padding: 1rem 0;
    font-size: 1rem;
    text-align: left;
  }
}
</style>
