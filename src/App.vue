<script setup>
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div id="app">
    <header class="position-relative">
      <div class="wrapper">
        <!-- <HelloWorld msg="You did it!" /> -->
        <nav class="text-white">
          <router-link to="/">HOME</router-link>
          <router-link to="/about">ABOUT</router-link>
          <router-link to="/services">SERVICES</router-link>
          <router-link to="/">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="60" height="60" />
            <!-- <span>BUILD</span> -->
          </router-link>
          <router-link to="/blog">BLOG</router-link>
          <router-link to="/event">EVENTS</router-link>
          <router-link to="/contact">CONTACT</router-link>
        </nav>
      </div>
      <div class="wrapper-bg text-white">
        <h2 class="subtitle">SUPERIOR RESIDENCES</h2>
        <br />
        <p>HCM</p>
      </div>
    </header>

    <router-view />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  /* margin: 0 auto 2rem; */
}

nav {
  /* margin-top: 2rem; */
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
  border-left: 1px solid var(--color-border);
}

nav a:nth-child(3) {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    /* display: flex; */
    /* place-items: center; */
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    /* margin: 0 2rem 0 0; */
  }

  header .wrapper {
    /* display: flex;
      place-items: flex-start;
      flex-wrap: wrap; */
  }

  nav {
    /* margin-top: 1rem; */
    /* margin-left: -1rem; */
    padding: 1rem 0;
    font-size: 1rem;
    text-align: left;
  }
}
</style>
