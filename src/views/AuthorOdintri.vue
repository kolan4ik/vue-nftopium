<template>
  <div>
    <div class="page-odintri-intro animated">
      <div class="container">
        <div class="page-odintri-intro__smoke_left">
          <img src="../assets/images/page-odintri/smoke-left.png" alt="" />
        </div>
        <div class="page-odintri-intro__smoke_right">
          <img src="../assets/images/page-odintri/smoke-right.gif" alt="" />
        </div>
        <div class="page-odintri-intro__spark">
          <img src="../assets/images/page-odintri/spark.png" alt="" />
        </div>
        <div class="page-odintri-intro__hero">
          <img src="../assets/images/page-odintri/hero-single.png" alt="" />
        </div>
        <div class="page-odintri-intro__logo">
          <img src="../assets/images/page-odintri/logo.png" alt="" />
        </div>
      </div>
    </div>
    <div class="page-odintri-about animated">
      <div class="container">
        <div data-lang-key="ODINTRI_DESCR">
          <p>
            ODINTRI долгое время занимался графическим дизайном, постиг
            искусство каллиграфии и леттеринга и со временем стал ярким
            представителем направления каллиграффити.
          </p>
          <p>
            Маэстро работает с латинскими буквами, кириллицей и даже арабской
            вязью! Помимо Москвы и Петербурга, Руслан отметился своими работами
            в Барселоне и Дубаи.
          </p>
          <p>
            Это тот случай, когда человек не пишет холсты, а проживает их:
            ODINTRI находится в режиме постоянного самосовершенствования,
            увлекается точными науками и, честно говоря, поражает нас симбиозом
            своей жизненной философии и самореализации в искусстве.
          </p>
        </div>
        <p><br /></p>
        <p data-lang-key="ODINTRI_WORK_WITH">Работал с:</p>
        <div class="page-odintri-partners animated">
          <div class="page-odintri-partners__item">
            <img src="../assets/images/page-odintri/logo-puma.png" alt="" />
          </div>
          <div class="page-odintri-partners__item">
            <img src="../assets/images/page-odintri/logo-hennessy.png" alt="" />
          </div>
          <div class="page-odintri-partners__item">
            <img src="../assets/images/page-odintri/logo-psb.png" alt="" />
          </div>
          <div class="page-odintri-partners__item">
            <img src="../assets/images/page-odintri/logo-cropp.png" alt="" />
          </div>
          <div class="page-odintri-partners__item">
            <img src="../assets/images/page-odintri/logo-jameson.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- ABOUT :: end -->

    <!-- COLLECTION WORKS :: start -->
    <div class="page-odintri-collection-works" id="collection">
      <div class="container">
        <div class="page-odintri-collection animated">
          <div
            class="page-odintri-collection__item"
            style="background-image: url(assets/images/page-odintri/work-1.jpg)"
          ></div>
        </div>
        <div class="page-odintri-signature">
          <img src="../assets/images/page-odintri/signature.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../assets/sass/page-collection-odintri.scss";

import { WOW } from "wowjs";
import { gsap } from "gsap";

import { anim, throttle } from "../assets/js/global";

export default {
  name: "AuthorOdintri",
  computed: {},
  created() {},
  methods: {},
  mounted() {
    document.querySelector(".app").classList.add("page-odintri");
    const wow = new WOW({
      offset: 100,
    });
    wow.init();
    const $animateEls = document.querySelectorAll(".animated");
    $animateEls.forEach((item) => {
      anim(item, "fadeIn");
    });

    const logo = document.querySelector(".page-odintri-intro__logo");
    const smokeLeft = document.querySelector(".page-odintri-intro__smoke_left");
    const smokeRight = document.querySelector(
      ".page-odintri-intro__smoke_right"
    );
    const spark = document.querySelector(".page-odintri-intro__spark");
    const hero = document.querySelector(".page-odintri-intro__hero");

    gsap.fromTo(
      smokeLeft,
      { translateX: "-700px", opacity: 0 },
      { translateX: "0px", opacity: 1, duration: 1.5, delay: 1, ease: "expo" }
    );
    gsap.fromTo(
      smokeRight,
      { translateX: "400px", opacity: 0 },
      {
        translateX: "0px",
        opacity: 1,
        duration: 1.5,
        delay: 1.15,
        ease: "expo",
      }
    );
    gsap.fromTo(
      spark,
      { translateY: "-200px", opacity: 0 },
      { translateY: "0px", opacity: 1, duration: 2, delay: 0.5, ease: "expo" }
    );
    gsap.fromTo(
      hero,
      { translateY: "400px", opacity: 0 },
      { translateY: "0px", opacity: 1, duration: 2, delay: 0.5, ease: "expo" }
    );
    gsap.fromTo(logo, { opacity: 0 }, { opacity: 1, duration: 2, delay: 0.75 });

    window.addEventListener(
      "scroll",
      throttle(function () {
        const scrolled = window.pageYOffset;

        if (document.querySelector(".page-odintri")) {
          const logo = document.querySelector(".page-odintri-intro__logo");
          const spark = document.querySelector(".page-odintri-intro__spark");
          const hero = document.querySelector(".page-odintri-intro__hero");

          hero.style.transform = "translateY(" + -scrolled * 0.1 + "px" + ")";
          spark.style.transform = "translateY(" + scrolled * 0.25 + "px" + ")";
          logo.style.transform =
            "translateY(" + -(scrolled * 0.15) + "px" + ")";
        }
      }, 14)
    );
  },
  beforeDestroy() {
    document.querySelector(".app").classList.remove("page-odintri");
  },
};
</script>
