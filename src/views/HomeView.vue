<template>
  <main>
    <!-- <TheWelcome /> -->
    <section class="highlight-section">
      <h2 class="highlight-title">HIGHLIGHT</h2>
      <div class="highlight-block">
        <carousel
          :navigationEnabled="true"
          :perPage="3"
          :adjustableHeightEasing="400"
          :autoplay="true"
          :autoplayTimeout="5000"
          :loop="true"
        >
          <slide
            ><span class="label">
              <img src="@/assets/images/z4094734809568_ad3e0c46bb0518e943723894cbbc852e.jpg"
            /></span>
          </slide>
          <slide
            ><span class="label">
              <img src="@/assets/images/z4094734862896_063ff6d49f35110490effc17af7007f5.jpg"
            /></span>
          </slide>
          <slide
            ><span class="label">
              <img src="@/assets/images/z4094734869090_cdfccbc43211d0a179367e1f7c9547a0.jpg"
            /></span>
          </slide>
          <slide
            ><span class="label">
              <img src="@/assets/images/z4094734881124_119bd441267db8ac99e3643ad069dac9.jpg"
            /></span>
          </slide>
          <slide
            ><span class="label">
              <img src="@/assets/images/z4094734892269_424042fdb3ddab0d866ec4f8f08ff552.jpg"
            /></span>
          </slide>
          <slide
            ><span class="label">
              <img src="@/assets/images/z4094734893473_eb36d35d0788618c2389e82223f53f93.jpg"
            /></span>
          </slide>
          <slide
            ><span class="label">
              <img src="@/assets/images/z4094734899882_8793c103fd4c6cda4a9d43ef289a0b03.jpg"
            /></span>
          </slide>
          <slide
            ><span class="label">
              <img src="@/assets/images/z4094734908416_2f3ec828054cacb0783465bb34ae7f1b.jpg"
            /></span>
          </slide>
          <slide
            ><span class="label">
              <img src="@/assets/images/z4094734908431_3e18556858040be4072664c180927602.jpg"
            /></span>
          </slide>
          <slide
            ><span class="label">
              <img src="@/assets/images/z4094734931592_c6edd37b739aa56d0a669ca879601f14.jpg"
            /></span>
          </slide>
          <slide
            ><span class="label">
              <img src="@/assets/images/z4094734949170_cd1cdc589391942a26431d2f4d086c9f.jpg"
            /></span>
          </slide>
        </carousel>
      </div>
      <div class="line"></div>
      <div class="height-5"></div>
      <div class="our-mission-">
        <h2 class="highlight-title">OUR MISSION</h2>
        <h4 class="highlight-sub-title">
          London. A global centre of cultue,<br />
          fashion, commerce and luxury living
        </h4>
        <p class="text-white">
          It is a long established fact that a reader will be distracted by the readable content of a page when
          looking<br />
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as<br />
          opposed to using 'Content here, content here', making it look like readable English. Many desktop
          publishing<br />
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
          ipsum'<br />
          will uncover many web sites still in their infancy.
        </p>
      </div>
    </section>
    <section class="our-mission"></section>
  </main>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide,
  },
};
// import TheWelcome from '@/components/TheWelcome.vue';
</script>
