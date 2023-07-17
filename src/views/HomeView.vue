<template>
  <main>
    <Banner @scrollToContat="scrollToContat" />
    <!-- section type product -->
    <section class="section-type-product" id="information">
      <h1 class="type-product-title">GIỚI THIỆU</h1>
      <div class="type-product-block">
        <div class="item" id="type-a">
          <div class="block-left">
            <div class="img">
              <img
                src="https://ucarecdn.com/4ff95904-d48a-4c1e-86fb-dad7ee031a4d/about_pc_ps.JPG"
                alt="type-a"
                loading="lazy"
              />
            </div>
          </div>
          <div class="block-right">
            <h3 class="block-title">Phào chỉ PS</h3>
            <p class="block-content">
              Phào chỉ PS là vật liệu trang trí được tổng hợp từ một loại nhựa có tên khoa học là PolyStyrene(PS). Phào
              chỉ PS có khả năng chống nước tốt, chống mối mọt, nấm mốc tuyệt đối. Các sản phẩm của Phào chỉ PS khá đa
              dạng, bề mặt đã hoàn thiện, không phải xử lý mối nối và chịu va đập tốt do độ cứng cao.
              <span id="dots" :class="{ hidden: isReadmore }">...</span
              ><span id="more" :class="{ hidden: !isReadmore }">
                Tuy nhiên nhược điểm của Phào chỉ PS là chất liệu nhựa cứng, khó có thể sử dụng ở những vị trí phức tạp,
                khó uốn cong, bề mặt hoàn thiện và không phải xử lý mối nối nhưng cũng vì vậy mà mối nối giữa các thanh
                phào sẽ nhìn thấy được. Ngoài ra bề mặt sản phẩm đã hoàn thiện nên trong quá trình sử dụng sẽ bị bạc
                màu.
              </span>
            </p>
            <div class="readmore">
              <a @click="changeIsReadmore" class="slider">{{ isReadmore ? 'Thu gọn' : 'Xem thêm' }}</a>
            </div>
          </div>
        </div>
        <div class="item" id="type-b">
          <div class="block-left">
            <div class="img">
              <img
                src="https://ucarecdn.com/616c3922-3ad2-49a7-9c9b-14f2f2dd7576/about_pc_pu.jpg"
                alt="type-a"
                loading="lazy"
              />
            </div>
          </div>
          <div class="block-right">
            <h3 class="block-title">Phào chỉ PU</h3>
            <p class="block-content">
              Phào chỉ PU là vật liệu trang trí tên khoa học đầy đủ là Polyurethane. PU có độ đàn hồi còn tốt hơn cả cao
              su, chính vì thế nó có rất nhiều ứng dụng trong đời sống. Trong công nghệ sản xuất phào chỉ, PU chiếm tỉ
              trọng lớn nhất, phào PU được tạo ra có khả năng chịu va đập, chống ẩm mốc, mối mọt. Qua quá trình đúc
              khuôn từ nguyên liệu dạng lỏng sẽ tạo ra các họa tiết hoa văn khác nhau.<span
                id="dots"
                :class="{ hidden: isReadmore }"
              >
                ...</span
              ><span id="more" :class="{ hidden: !isReadmore }">
                Sản phẩm có nhiều kiểu dáng, kích thước khác nhau. Phào chỉ PU thường được sử dụng cho những không gian
                nội thất theo phong cách hoàng gia như cổ điển, tân cổ điển. Do được làm từ nhựa Polyurethane(PU) có đặc
                tính dẻo, chống thấm nước, chống mối mọt, nấm mốc cong vênh. Phào chỉ PU được đánh giá là loại phào chỉ
                cao cấp và được sử dụng phổ biến nhất hiện nay. Mẫu phào phào PU rất đa dạng, đầy đủ kích thước, hình
                dáng phù hợp với nhiều kiểu không gian nội thất. Ngoài ra, phào chỉ PU rất linh hoạt khi sử dụng thi
                công vì chất liệu dẻo, dễ uốn cong.</span
              >
            </p>
            <div class="readmore">
              <a @click="changeIsReadmore" class="slider">{{ isReadmore ? 'Thu gọn' : 'Xem thêm' }}</a>
            </div>
          </div>
        </div>
        <div class="item" id="type-c">
          <div class="block-left">
            <div class="img">
              <img
                src="https://ucarecdn.com/6282b748-d1d3-4b88-be67-f41e7cc5dd52/about_tam_op_tuong.JPG"
                alt="type-a"
                loading="lazy"
              />
            </div>
          </div>
          <div class="block-right">
            <h3 class="block-title">Tầm ốp tường</h3>
            <p class="block-content">
              Tấm ốp tường PVC là một dạng vật liệu xây dựng, được cấu tạo bởi các thành phần tự nhiên, rất thân thiện
              với môi trường. <span id="dots" :class="{ hidden: isReadmore }"> ...</span
              ><span id="more" :class="{ hidden: !isReadmore }"
                >Với phương pháp sản xuất hiện đại kết hợp với các nguyên liệu tự nhiên như bột đá hoặc sợi gỗ, sợi tre,
                cùng với nhựa PVC và lớp phủ UV.</span
              >
            </p>
            <div class="readmore">
              <a @click="changeIsReadmore" class="slider">{{ isReadmore ? 'Thu gọn' : 'Xem thêm' }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end type product -->
    <!-- section highlight -->
    <section class="highlight-section">
      <h2 class="highlight-title">SẢN PHẨM</h2>
      <div class="highlight-block">
        <carousel
          :navigationEnabled="true"
          :adjustableHeightEasing="'400'"
          :autoplay="false"
          :spacePaddingMaxOffsetFactor="30"
          :autoplayTimeout="5000"
          :loop="true"
          :perPageCustom="[
            [320, 1],
            [768, 1],
            [1199, 3],
          ]"
        >
          <slide
            ><div class="label">
              <img
                loading="lazy"
                src="https://ucarecdn.com/8e974c60-c236-4807-a71f-408b99dbf48e/sanpham_phaochi.JPG"
                alt="phaochi"
              />
              <p class="label-button" @click="handleCatalog('0')">Phào chỉ</p>
            </div>
          </slide>
          <slide
            ><div class="label">
              <img
                loading="lazy"
                src="https://ucarecdn.com/42ab6cd6-67d5-4e20-b153-2658d443484d/sanpham_sango.JPG"
                alt="sango"
              />
              <p class="label-button" @click="handleCatalog('2')">Sàn gỗ</p>
            </div>
          </slide>
          <slide
            ><div class="label">
              <img
                loading="lazy"
                src="https://ucarecdn.com/bc8b128b-b429-49e5-92c4-ed8a57825894/sanpham_lamsong.JPG"
                alt="lamsong"
              />
              <p class="label-button" @click="handleCatalog('4')">Lam sóng</p>
            </div>
          </slide>
          <slide
            ><div class="label">
              <img
                loading="lazy"
                src="https://ucarecdn.com/d4479323-f5ec-420e-8b1e-261fbb04bc5f/sanpham_tranhtrangguong.JPG"
                alt="tranhtrangguong"
              />
              <p class="label-button" @click="handleCatalog('3')">PVC</p>
            </div>
          </slide>
        </carousel>
      </div>
      <div class="line"></div>
      <div class="height-5"></div>
      <div class="our-mission" id="contructor">
        <h2 class="highlight-title">CÔNG TRÌNH</h2>
        <h3 class="highlight-sub">Chúng tôi luôn đảm bảo tiến độ các công trình ...</h3>
        <div class="highlight-post" v-if="contructors">
          <carousel
            :navigationEnabled="true"
            :adjustableHeightEasing="'400'"
            :autoplay="false"
            :spacePaddingMaxOffsetFactor="30"
            :autoplayTimeout="5000"
            :loop="true"
            :perPageCustom="[
              [320, 1],
              [768, 1],
              [1199, 2],
            ]"
          >
            <slide v-for="(contructor, index) in contructors" :key="index"
              ><div class="label" @click="handleSelectedContructor(contructor.id)">
                <img loading="lazy" :src="contructor.image[0]" :alt="contructor.title" />
                <article>
                  <h2>
                    {{
                      contructor.date
                        ? `Ngày
                          ${contructor.date.slice(0, 2)}
                          Tháng
                          ${contructor.date.slice(3, 5)}
                          Năm
                          ${contructor.date.slice(6, 10)}`
                        : ''
                    }}
                  </h2>
                  <p>{{ contructor.title }}</p>
                </article>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="readmore">
          <router-link to="/posts"><a class="slider">Xem thêm</a></router-link>
        </div>
      </div>
    </section>
    <!-- section info -->
    <section class="section-info animated">
      <div class="overlay"></div>
      <div class="section-info-block">
        <div class=""></div>
        <div class="flex-block">
          <div class="block-item">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3591.149 3075.098" height="48" width="48">
                <path
                  fill="#fb5607"
                  d="M282.768 1138.14h212.076v205.007H282.768zM622.089 1138.14h205.007v205.007H622.089zM282.768 1463.323h205.007v212.076H282.768zM622.089 1463.323h212.076v212.076H622.089zM282.768 1802.644h205.007v205.007H282.768zM622.089 1802.644h212.076v205.007H622.089zM282.768 2120.757h205.007v212.076H282.768zM622.089 2120.757h212.076v212.076H622.089zM282.768 2460.079h205.007v205.007H282.768zM622.089 2460.079h212.076v205.007H622.089z"
                />
                <path
                  fill="#fb5607"
                  d="M3591.149 812.957h-982.617V0H982.618v812.957H0v2262.141h3591.149V812.957zM982.618 2947.853H120.176V940.203h862.441v2007.65zm1067.447 7.069h-508.982v-742.265h508.982v742.265zm-629.158-869.511v869.51h-311.044V120.176h1371.423l-7.069 2834.746h-296.906v-869.51h-756.404zm2042.997 862.442h-855.372V940.203h855.372v2007.65z"
                />
                <path
                  fill="#fb5607"
                  d="M2764.054 1138.14h205.007v205.007h-205.007zM3096.306 1138.14h212.076v205.007h-212.076zM2756.984 1463.323h212.076v212.076h-212.076zM3103.375 1463.323h205.007v212.076h-205.007zM2756.984 1802.644h212.076v205.007h-212.076zM3103.375 1802.644h205.007v205.007h-205.007zM2756.984 2120.757h212.076v212.076h-212.076zM3103.375 2120.757h205.007v212.076h-205.007zM2756.984 2460.079h212.076v205.007h-212.076zM3103.375 2460.079h205.007v205.007h-205.007zM1272.454 996.756h212.076v205.007h-212.076zM2092.48 996.756h212.076v205.007H2092.48zM1272.454 1321.939h212.076v212.076h-212.076zM2099.55 1321.939h205.007v212.076H2099.55zM1272.454 1661.26h212.076v205.007h-212.076zM2099.55 1661.26h205.007v205.007H2099.55zM1682.467 989.687h212.076v212.076h-212.076zM1272.454 664.504h212.076v205.007h-212.076zM2092.48 664.504h212.076v205.007H2092.48zM1682.467 664.504h212.076v205.007h-212.076zM1272.454 332.252h212.076v205.007h-212.076zM2092.48 332.252h212.076v205.007H2092.48zM1682.467 332.252h212.076v205.007h-212.076zM1682.467 1321.939h212.076v205.007h-212.076zM1682.467 1654.191h212.076v212.076h-212.076z"
                />
              </svg>
            </div>
            <p class="text-white" data-from="0" data-to="1539" data-speed="5000" data-refresh-interval="50">39</p>
            <span class="colorlib-counter-label">Dự án</span>
          </div>
          <div class="block-item">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 48 48">
                <path
                  fill="#fb5607"
                  fill-rule="evenodd"
                  d="M33.219 13.2094L33.1289 13.1396C32.9561 11.8258 32.3265 10.4574 31.3446 9.30289 29.7495 7.42761 27.1506 6 23.6697 6 20.2409 6 17.8226 7.56423 16.3967 9.50251 15.6911 10.4616 15.2279 11.5122 15.0005 12.5097 14.9537 12.7148 14.9163 12.9208 14.8889 13.1258L14.781 13.2094C13.6569 14.0801 12.8323 15.1359 13.0277 16.3468 13.2165 17.5167 14.2736 18.2289 15.2576 18.6644 15.5084 18.7754 15.7784 18.8791 16.0651 18.9756 16.0221 19.3113 16 19.6533 16 20 16 24.4183 19.5817 28 24 28 28.4183 28 32 24.4183 32 20 32 19.6533 31.9779 19.3113 31.9349 18.9756 32.2216 18.8791 32.4916 18.7754 32.7424 18.6644 33.7264 18.2289 34.7835 17.5167 34.9723 16.3468 35.1677 15.1359 34.3431 14.0801 33.219 13.2094zM16.9447 14.6719C16.8148 14.298 16.781 13.6975 16.9504 12.9542 17.1158 12.229 17.4606 11.4345 18 10.6982L18 13.5C18 14.0523 18.4477 14.5 19 14.5 19.5523 14.5 20 14.0523 20 13.5V8.91075C20.8229 8.44152 21.818 8.11503 23 8.02506V11.5C23 12.0523 23.4477 12.5 24 12.5 24.5523 12.5 25 12.0523 25 11.5V8.08698C26.1683 8.24422 27.1674 8.60479 28 9.0873V13.5C28 14.0523 28.4477 14.5 29 14.5 29.5523 14.5 30 14.0523 30 13.5V10.8182C31.1046 12.2344 31.3637 13.7622 31.0529 14.679 30.8756 15.202 31.1559 15.7698 31.679 15.9471 32.1055 16.0917 32.5619 15.9319 32.8118 15.5843 33.009 15.8594 33.0015 16.0054 32.9978 16.0282 32.9849 16.1083 32.8316 16.4378 31.9329 16.8356 31.5427 17.0083 31.0792 17.1634 30.5577 17.2999L30.5341 17.3057C29.9689 17.4525 29.34 17.5767 28.6667 17.6777 27.51 17.8512 26.2222 17.9561 24.9003 17.9889 24.6016 17.9963 24.3011 18 24 18 23.4283 18 22.8588 17.9866 22.2992 17.96 21.2566 17.9105 20.2484 17.8153 19.3242 17.6763 18.6543 17.5756 18.0286 17.4518 17.4659 17.3057L17.4424 17.2999C16.9208 17.1634 16.4573 17.0083 16.0671 16.8356 15.1684 16.4378 15.0151 16.1083 15.0022 16.0282 14.9985 16.0054 14.991 15.8594 15.1882 15.5843 15.4398 15.9342 15.9001 16.0933 16.3281 15.9447 16.8498 15.7635 17.1258 15.1936 16.9447 14.6719zM18.0221 19.4809C18.3543 19.546 18.6978 19.6049 19.0503 19.6576 20.1182 19.8172 21.2685 19.92 22.4383 19.9681 22.9569 19.9894 23.4793 20 24 20 24.5228 20 25.0473 19.9893 25.568 19.9679 26.7323 19.9198 27.8773 19.8175 28.9408 19.6589 29.2964 19.6059 29.6429 19.5466 29.9779 19.4809 29.9925 19.6519 30 19.825 30 20 30 23.3137 27.3137 26 24 26 20.6863 26 18 23.3137 18 20 18 19.825 18.0075 19.6518 18.0221 19.4809zM29 28.4896C29.6578 28.6045 30.3281 28.7389 31 28.8923 36.4433 30.1349 42 32.6202 42 36.0001V42.0001H6V36.0001C6 32.6202 11.5567 30.1349 17 28.8923 17.672 28.7389 18.3422 28.6045 19 28.4896V33H29V28.4896zM15 31.4912C15.654 31.2915 16.3247 31.1096 17 30.9466V35H31V30.9466C32.0247 31.1938 33.0386 31.4849 34 31.8152V40H36V32.5967C36.2893 32.7257 36.5693 32.8587 36.8384 32.9956 37.9747 33.5735 38.8176 34.1704 39.3521 34.7401 39.8768 35.2993 40 35.7126 40 36.0001V40.0001H8V36.0001C8 35.7126 8.1232 35.2993 8.64787 34.7401 9.18243 34.1704 10.0253 33.5735 11.1616 32.9956 11.7306 32.7062 12.3483 32.434 13 32.1806V40H15V31.4912z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <p class="text-white" data-from="0" data-to="3653" data-speed="5000" data-refresh-interval="50">20</p>
            <span class="colorlib-counter-label">Nhân viên</span>
          </div>
          <div class="block-item">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48">
                <path
                  fill="#fb5607"
                  d="M46 57a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h31v5a3 3 0 0 0 3 3h5v21h2V11a1 1 0 0 0-.293-.707l-8-8A1 1 0 0 0 39 2H7a5.006 5.006 0 0 0-5 5v50a5.006 5.006 0 0 0 5 5h36a5.006 5.006 0 0 0 5-5v-4h-2ZM40 9V5.414L44.586 10H41a1 1 0 0 1-1-1Z"
                />
                <path
                  fill="#fb5607"
                  d="M8 8h2v2H8zM12 8h6v2h-6zM8 12h10v2H8zM60.87 29.13a5.006 5.006 0 0 0-7.071 0L36.121 46.808a1 1 0 0 0-.273.51l-.648 3.239-1.907 1.907a3 3 0 1 0 4.242 4.243l1.908-1.907 3.239-.648a1 1 0 0 0 .51-.274L60.87 36.2a5.006 5.006 0 0 0 0-7.07zM37.207 50.722l.471-2.358 3.957 3.957-2.357.472zm1.742-3.914L50.97 34.786l1.415 1.414-12.021 12.022zm2.829 2.828L53.8 37.615l1.414 1.415-12.022 12.02zm10.607-16.264.707-.707 4.243 4.243-.708.708zM36.12 55.293a1.023 1.023 0 0 1-1.413 0 1 1 0 0 1 0-1.415l1.414-1.414 1.415 1.415zm23.336-20.506-.707.707-4.243-4.243.707-.707a3 3 0 1 1 4.243 4.243zM43.09 30.61a1.008 1.008 0 0 0 0-1.42l-9.9-9.9a1.034 1.034 0 0 0-1.41 0l-2.62 2.62-1.53.3-2.92-2.92A1.033 1.033 0 0 0 24 19h-3.83l-2.53-2.54a1.008 1.008 0 0 0-1.42 0l-9.9 9.9a1.008 1.008 0 0 0 0 1.42l7.2 7.2a2.973 2.973 0 0 0 2.55 4.27 2.906 2.906 0 0 0 .86 1.96 2.964 2.964 0 0 0 1.96.87 2.983 2.983 0 0 0 2.83 2.83 3 3 0 0 0 5.11 1.96l1.06 1.06a2.994 2.994 0 0 0 4.24 0 2.91 2.91 0 0 0 .86-1.97 2.944 2.944 0 0 0 2.83-2.82 2.963 2.963 0 0 0 2.83-2.83 2.993 2.993 0 0 0 1.97-5.11l-1.06-1.06zM8.44 27.07l8.49-8.48L18.34 20l-8.48 8.49zm2.83 2.83 8.9-8.9h3.42l7.83 7.84a.978.978 0 0 1 0 1.41 1.014 1.014 0 0 1-1.41 0l-4.24-4.24a1.037 1.037 0 0 0-1.42 0 3.066 3.066 0 0 1-4.24 0l-1.41 1.41a5.076 5.076 0 0 0 1.23.89l-5.12 5.13zm15.2 12.37a3.008 3.008 0 0 0-.76 2.89l-.3.29a.972.972 0 0 1-.71.29.951.951 0 0 1-.7-.29.993.993 0 0 1-.01-1.4.01.01 0 0 0 .01-.01l2.83-2.82v-.01l-1.42-1.41-2.83 2.83c-.01 0-.01 0-.01.01a1.032 1.032 0 0 1-1.4-.01 1.014 1.014 0 0 1 0-1.42L24 38.38l-1.41-1.41-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82-1.41-1.42-2.83 2.83a1.027 1.027 0 0 1-1.42 0 1 1 0 0 1 0-1.41l6.67-6.68c.02 0 .03.01.05.01a4.949 4.949 0 0 0 2.76-.83l3.61 3.61a3.075 3.075 0 0 0 4.24 0 3 3 0 0 0 .06-4.18l5.25 5.24-.3.29a3.007 3.007 0 0 0-2.89.77 2.906 2.906 0 0 0-.86 1.96 2.961 2.961 0 0 0-2.83 2.86 2.907 2.907 0 0 0-2.83 2.8 3.046 3.046 0 0 0-1.97.86zm4.25 4.25a1.037 1.037 0 0 1-1.42 0l-1.41-1.42a1 1 0 1 1 1.41-1.41l1.42 1.41a1.008 1.008 0 0 1 0 1.42zm2.83-2.83a1.008 1.008 0 0 1-1.42 0l-1.41-1.42a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0l1.42 1.41a1.014 1.014 0 0 1 0 1.42zm2.82-2.83a1.014 1.014 0 0 1-1.41 0l-1.41-1.42a.96.96 0 0 1-.3-.7 1.007 1.007 0 0 1 1-1 1.024 1.024 0 0 1 .71.29l1.41 1.42a1 1 0 0 1 0 1.41zm2.83-2.83a1 1 0 0 1-1.41 0l-1.42-1.41a1.008 1.008 0 0 1 0-1.42 1.042 1.042 0 0 1 .71-.29 1.024 1.024 0 0 1 .71.29l1.41 1.42a.978.978 0 0 1 0 1.41zm-8.13-15.2 1.42-1.42 8.48 8.49-1.41 1.41zM21 54h10v2H21zM8 44h8v2H8zM8 48h10v2H8zM8 40h6v2H8z"
                />
              </svg>
            </div>
            <p class="text-white" data-from="0" data-to="3999" data-speed="5000" data-refresh-interval="50">25</p>
            <span class="colorlib-counter-label">Đối tác</span>
          </div>
          <div class="block-item">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 32 32" width="48" height="48">
                <defs />
                <path
                  fill="#fb5607"
                  d="M16 1a15 15 0 1 0 15 15A15 15 0 0 0 16 1Zm0 28.33A13.33 13.33 0 1 1 29.33 16 13.35 13.35 0 0 1 16 29.33Z"
                />
                <path fill="#fb5607" d="m13.91 18.59-3.2-3.2-1.42 1.41 4.62 4.61 9.7-9.7-1.41-1.42-8.29 8.3z" />
              </svg>
            </div>
            <p class="text-white" data-from="0" data-to="5987" data-speed="5000" data-refresh-interval="50">3979</p>
            <span class="colorlib-counter-label">Thời gian</span>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <!-- section porfolio -->
    <section class="section-porfolio">
      <div class="porfolio-block flex-block">
        <div class="porfolio-right">
          <div class="porfolio-content">
            <h2 class="porfolio-title">NỔI BẬT</h2>
            <p class="porfolio-text">
              Chuyên sản xuất và phân phối các dòng sản phẩm phào chỉ PS, phào trang trí PU cao cấp, chất lượng nhất
              trên thị trường Việt Nam
            </p>
          </div>
          <div class="porfolio-img-right">
            <div class="porfolio-item">
              <img
                ref="image1"
                @click="handleClickImg(1)"
                src="@/assets/images/outstanding/outstanding_01.jpg"
                alt="outstanding"
              />
            </div>
            <div class="porfolio-item">
              <img
                src="@/assets/images/outstanding/outstanding_02.jpg"
                alt="outstanding"
                ref="image2"
                @click="handleClickImg(2)"
              />
            </div>
            <div class="porfolio-item">
              <img
                src="@/assets/images/outstanding/outstanding_03.jpg"
                alt="outstanding"
                ref="image3"
                @click="handleClickImg(3)"
              />
            </div>
          </div>
        </div>
        <div class="porfolio-left">
          <div class="porfolio-img-left">
            <div class="porfolio-item">
              <div class="porfolio-item-first">
                <img
                  src="@/assets/images/outstanding/outstanding_004.jpg"
                  alt="outstanding"
                  ref="image4"
                  @click="handleClickImg(4)"
                />
              </div>

              <div class="porfolio-item-second flex-block">
                <div class="item">
                  <img
                    src="@/assets/images/outstanding/outstanding_05.jpg"
                    alt="outstanding"
                    ref="image5"
                    @click="handleClickImg(5)"
                  />
                </div>
                <div class="item">
                  <img
                    src="@/assets/images/outstanding/outstanding_06.jpg"
                    alt="outstanding"
                    ref="image6"
                    @click="handleClickImg(6)"
                  />
                </div>
              </div>

              <div class="porfolio-item-third flex-block">
                <div class="item">
                  <img
                    src="@/assets/images/outstanding/outstanding_07.jpg"
                    alt="outstanding"
                    ref="image7"
                    @click="handleClickImg(7)"
                  />
                </div>
                <div class="item">
                  <img
                    src="@/assets/images/outstanding/outstanding_08.jpg"
                    alt="outstanding"
                    ref="image8"
                    @click="handleClickImg(8)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Modal -->
    <Modal v-if="!!imageModal" @close="handleClose">
      <div slot="body">
        <img :src="imageModal" :class="`img-index`" />
      </div>
    </Modal>
  </main>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Banner from '../components/Banner.vue';
import Modal from '../components/Modal.vue';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      isReadmore: false,
      imageModal: null,
    };
  },
  components: {
    Carousel,
    Slide,
    Banner,
    Modal,
  },
  computed: {
    ...mapState('products', ['contructors', 'loading']),
    getTypeProduct() {
      return this.contructors;
    },
  },
  async created() {
    await this.setContructors('contructors');
  },
  methods: {
    ...mapActions({
      setContructors: 'products/SET_CONTRUCTORS',
    }),
    scrollToContat(element) {
      const el = document.querySelector(`#${element}`);
      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      }
    },
    handleSelectedContructor(id) {
      this.$router.push('/posts/' + id);
    },
    changeIsReadmore() {
      this.isReadmore = !this.isReadmore;
    },
    handleCatalog(type) {
      this.$emit('handleCatalog', type);
    },
    handleClickImg(e) {
      this.imageModal = this.$refs['image' + e].src;
    },
    handleClose() {
      this.imageModal = null;
    },
  },
};
// import TheWelcome from '@/components/TheWelcome.vue';
</script>
