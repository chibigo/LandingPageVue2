<template>
  <header>
    <div class="hidden">
      <img src="@/assets/images/z4094734862896_063ff6d49f35110490effc17af7007f5.jpg" alt="background" loading="lazy" />
      <img src="@/assets/images/z4094734881124_119bd441267db8ac99e3643ad069dac9.jpg" alt="background" loading="lazy" />
    </div>
    <div class="wrapper">
      <nav class="text-white">
        <router-link to="/">TRANG CHỦ</router-link>
        <a href="#information" @click="handleClickContact('information')">GIỚI THIỆU</a>
        <router-link to="/catalog" class="nav_product"
          >SẢN PHẨM &dtrif;
          <ul class="nav_product-sub">
            <li><a @click.prevent="changeTypeProduct(0)">PHÀO CHỈ</a></li>
            <li><a @click.prevent="changeTypeProduct(1)">SÀN GỖ</a></li>
            <li><a @click.prevent="changeTypeProduct(2)">LAM SÓNG</a></li>
            <li><a @click.prevent="changeTypeProduct(3)">PVC</a></li>
          </ul>
        </router-link>
        <router-link to="/" class="logo-main">
          <svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            data-name="Layer 1"
            viewBox="0 0 179.91 200"
          >
            <path
              class="cls-1"
              d="M311.42,355v49.83a.78.78,0,0,0,1.12.77l14.92-8.05a9.57,9.57,0,0,0,4.8-8.49V339.25a.78.78,0,0,0-1.12-.77l-15,8.07A9.53,9.53,0,0,0,311.42,355Z"
              transform="translate(-192.12 -238.55)"
              fill="#d8411f"
            />
            <path
              class="cls-2"
              d="M311.42,255.14V305a.78.78,0,0,0,1.12.77l14.92-8.05a9.57,9.57,0,0,0,4.8-8.49V239.41a.78.78,0,0,0-1.12-.77l-15,8.07A9.53,9.53,0,0,0,311.42,255.14Z"
              transform="translate(-192.12 -238.55)"
              fill="#e8691f"
            />
            <path
              class="cls-3"
              d="M271.65,321.34v49.83a.78.78,0,0,0,1.12.77l14.93-8.05a9.58,9.58,0,0,0,4.79-8.49V305.61a.78.78,0,0,0-1.12-.77l-15,8.07A9.53,9.53,0,0,0,271.65,321.34Z"
              transform="translate(-192.12 -238.55)"
              fill="#d9441f"
            />
            <path
              class="cls-4"
              d="M351.19,288.78v49.83a.78.78,0,0,0,1.12.77l14.92-8.05a9.57,9.57,0,0,0,4.8-8.49V273.05a.78.78,0,0,0-1.12-.77l-15,8.07A9.53,9.53,0,0,0,351.19,288.78Z"
              transform="translate(-192.12 -238.55)"
              fill="#ec741f"
            />
            <path
              class="cls-5"
              d="M231.88,388.8v49.83a.79.79,0,0,0,1.12.78l14.93-8.06a9.58,9.58,0,0,0,4.79-8.49V373.07a.78.78,0,0,0-1.12-.77l-15,8.08A9.51,9.51,0,0,0,231.88,388.8Z"
              transform="translate(-192.12 -238.55)"
              fill="#ce271e"
            />
            <path
              class="cls-6"
              d="M231.88,289v49.83a.79.79,0,0,0,1.12.78l14.93-8.06a9.58,9.58,0,0,0,4.79-8.49V273.23a.78.78,0,0,0-1.12-.77l-15,8.08A9.51,9.51,0,0,0,231.88,289Z"
              transform="translate(-192.12 -238.55)"
              fill="#d8411f"
            />
            <path
              class="cls-7"
              d="M192.12,355.16V405a.78.78,0,0,0,1.11.78l14.93-8.06a9.58,9.58,0,0,0,4.79-8.49V339.43a.78.78,0,0,0-1.11-.77l-15,8.08A9.5,9.5,0,0,0,192.12,355.16Z"
              transform="translate(-192.12 -238.55)"
              fill="#cc211e"
            />
          </svg>
        </router-link>
        <a href="#contructor" @click="handleClickContact('contructor')">CÔNG TRÌNH</a>
        <a href="#contact" @click="handleClickContact('contact')">LIÊN HỆ</a>
        <a class="phone" href="tel:0397903057">&#9742; 038 2744 037</a>
      </nav>
    </div>
    <!-- <div class="header-sp">&#9776;</div> -->
    <div class="header-sp" :class="{ active: menuActive }">
      <input id="toggle" type="checkbox" v-model="menuActive" />

      <label class="toggle-container" for="toggle">
        <span class="button button-toggle"></span>
      </label>

      <!-- The Nav Menu -->
      <nav class="nav">
        <!-- <a class="nav-item" href="">Dashboard</a> -->
        <router-link class="nav-item" to="/">TRANG CHỦ</router-link>
        <router-link class="nav-item" to="/catalog">CATALOG</router-link>
        <a class="nav-item" href="#contructor" @click.self="handleClickContact('contructor')">CÔNG TRÌNH</a>
        <a class="nav-item" href="#contact" @click.self="handleClickContact('contact')">CONTACT</a>
        <a class="nav-item" href="tel:0397903057">&#9742; 0397903057</a>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menuActive: false,
    };
  },
  mounted() {
    document.addEventListener('mouseup', (e) => {
      return (this.menuActive = false);
    });
  },
  methods: {
    handleClickContact(ele) {
      this.$emit('scrollToContat', ele);
    },
    changeTypeProduct(type) {
      this.$emit('changeTypeProduct', type);
    },
    handleBlur() {
      this.menuActive = false;
    },
  },
};
</script>
<style lang=""></style>
