<template>
  <div>
    <!-- INTRO HERO :: start -->
    <div class="page-golopolosov-intro animated">
      <div class="container pluses">
        <div class="page-golopolosov-intro__hero">
          <div class="page-golopolosov-intro__light-l">
            <img
              src="../assets/images/page-golopolosov/light-line-1.png"
              alt=""
            />
          </div>
          <div class="page-golopolosov-intro__light-r">
            <img
              src="../assets/images/page-golopolosov/light-line-2.png"
              alt=""
            />
          </div>

          <div class="page-golopolosov-intro__hero-img">
            <img
              src="../assets/images/page-golopolosov/hero-single.jpg"
              alt="Егор Голополосов"
            />
          </div>
        </div>
        <div class="page-golopolosov-intro__logo">
          <img src="../assets/images/page-golopolosov/logo.png" alt="" />
        </div>
      </div>
    </div>
    <!-- INTRO HERO :: end -->

    <!-- ABOUT :: start -->
    <div class="page-golopolosov-about animated">
      <div class="container">
        <div class="page-golopolosov-about__title">
          <img
            src="../assets/images/page-golopolosov/egor-golopolosov.png"
            alt="Егор Голополосов"
          />
        </div>
        <div
          class="page-golopolosov-about__descr"
          data-lang-key="GOLOPOLOSOV_DESCR"
        >
          <p>
            За свою карьеру Егор начал в дизайне после ушел в иллюстрацию. В
            процессе сформировал свой собственный неповторимый стиль!
          </p>
          <p>
            За свою карьеру успел поработать с крупными международными брендами
            и музыкантами. Сейчас активно продвигается на АРТ рынке - подписал
            контракт с галереей в AOЭ и с Американской NFT галереей!
          </p>
          <p>
            Также Егор ведёт авторские youtube проекты. Одним из них является
            PINOK подкаст - подкаст про визуальную культуру и людей которые её
            создают!
          </p>
        </div>
      </div>
    </div>
    <!-- ABOUT :: end -->

    <!-- PARTNERS :: start -->
    <div class="page-golopolosov-partners animated">
      <div class="container pluses">
        <div class="page-golopolosov-partners__imgs">
          <img
            src="../assets/images/page-golopolosov/partners-logo.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- PARTNERS :: end -->

    <!-- COLLECTION WORKS :: start -->
    <div class="page-golopolosov-collection-works" id="collection">
      <div class="container">
        <div class="page-golopolosov-collection animated">
          <img src="../assets/images/page-golopolosov/works.jpg" alt="" />
        </div>
      </div>
    </div>
    <!-- COLLECTION WORKS :: end -->

    <div class="page-golopolosov-end">
      <div class="container pluses">
        <div class="page-golopolosov-end__img">
          <img src="../assets/images/page-golopolosov/logo-wide.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import { gsap } from "gsap";

import "../assets/sass/page-collection-golopolosov.scss";

import { anim, throttle } from "../assets/js/global";

export default {
  name: "AuthorGolopolosov",
  computed: {},
  created() {},
  methods: {},
  mounted() {
    document.querySelector(".app").classList.add("page-golopolosov");
    const $animateEls = document.querySelectorAll(".animated");
    const wow = new WOW({
      offset: 100,
    });
    wow.init();
    $animateEls.forEach((item) => {
      anim(item, "fadeIn");
    });

    const logo = document.querySelector(".page-golopolosov-intro__logo");
    const lineL = document.querySelector(".page-golopolosov-intro__light-l");
    const lineR = document.querySelector(".page-golopolosov-intro__light-r");
    const hero = document.querySelector(".page-golopolosov-intro__hero-img");

    gsap.fromTo(
      lineL,
      { translateY: "-700px", opacity: 0 },
      {
        translateY: "0px",
        opacity: 1,
        duration: 1.5,
        delay: 1.1,
        ease: "expo",
      }
    );
    gsap.fromTo(
      lineR,
      { translateY: "400px", opacity: 0 },
      {
        translateY: "0px",
        opacity: 1,
        duration: 1.5,
        delay: 1.25,
        ease: "expo",
      }
    );
    gsap.fromTo(
      hero,
      { translateY: "-200px", opacity: 0 },
      {
        translateY: "0px",
        opacity: 1,
        duration: 2,
        delay: 0.75,
        ease: "expo",
      }
    );
    gsap.fromTo(logo, { opacity: 0 }, { opacity: 1, duration: 2, delay: 1.5 });

    window.addEventListener(
      "scroll",
      throttle(function () {
        const scrolled = window.pageYOffset;

        const logo = document.querySelector(".page-golopolosov-intro__logo");
        const lineL = document.querySelector(
          ".page-golopolosov-intro__light-l"
        );
        const lineR = document.querySelector(
          ".page-golopolosov-intro__light-r"
        );
        const isLogo = !!logo;
        const islineL = !!lineL;
        const islineR = !!lineR;
        if (isLogo) {
          lineL.style.transform = "translateY(" + -scrolled * 0.18 + "px" + ")";
        }
        if (islineL) {
          lineR.style.transform = "translateY(" + -scrolled * 0.1 + "px" + ")";
        }
        if (islineR) {
          logo.style.transform = "translateY(" + -scrolled * 0.1 + "px" + ")";
        }
      }, 14)
    );
  },
  beforeDestroy() {
    document.querySelector(".app").classList.remove("page-golopolosov");
  },
};
</script>
