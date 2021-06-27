<template>
  <div class="collection-page">
    <div class="page-kraft-top animated">
      <div class="container">
        <div class="page-kraft-top__author">
          <h1
            v-cloak
            class="page-kraft-top__author-name"
            data-lang-key="KRAFT_NAME"
          >
            {{ authorInfo.name }}
          </h1>
          <div class="page-kraft-top__author-logo">
            <img src="../assets/images/page-kraft/ukraft-logo.svg" alt="" />
          </div>
        </div>

        <a
          class="page-kraft-top__action page-kraft-top-action a-scroll"
          href="#collection"
        >
          <svg
            class="page-kraft-top-action__icon"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="50"
              width="50"
              height="50"
              transform="rotate(90 50 0)"
              fill="#DBC98B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.3491 29L32 30.5266L25 37L18 30.5266L19.6509 29L24 33.022L24 14L26 14L26 33.022L30.3491 29Z"
              fill="#fff"
            />
          </svg>
          <span class="page-kraft-top-action__txt"
            >{{ authorInfo.name }} <br />COLLECTION</span
          >
        </a>
      </div>
    </div>
    <div class="page-kraft-intro animated">
      <div class="page-kraft-intro__float">
        <img src="../assets/images/page-kraft/bg-cover-float.png" alt="" />
      </div>
      <div class="page-kraft-intro__smoke">
        <div class="container">
          <div class="page-kraft-intro__bg-logo">
            <img src="../assets/images/page-kraft/bg-logo.png" alt="" />
          </div>
          <div class="page-kraft-intro__hero">
            <img :src="getImgUrl(authorInfo.image)" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="page-kraft-quote animated">
      <div class="container" data-lang-key="KRAFT_DESCR">
        <p>
          {{ authorInfo.description }}
        </p>
      </div>
    </div>
    <div class="page-kraft-feature-works animated">
      <div class="container">
        <div class="page-kraft-works">
          <div class="page-kraft-works__item page-kraft-works__item--1">
            <div class="page-kraft-works__img">
              <img
                src="../assets/images/page-kraft/feature-work-1.png"
                alt=""
              />
            </div>
            <div
              class="page-kraft-works__title"
              data-lang-key="KRAFT_FEATURE_W_T_1"
            >
              Работала с Алек Монополи
            </div>
          </div>
          <div class="page-kraft-works__item page-kraft-works__item--2">
            <div class="page-kraft-works__img">
              <img
                src="../assets/images/page-kraft/feature-work-2.png"
                alt=""
              />
            </div>
            <div
              class="page-kraft-works__title"
              data-lang-key="KRAFT_FEATURE_W_T_2"
            >
              Презентовала свою картину Леонелю Месси
            </div>
          </div>
          <div class="page-kraft-works__item page-kraft-works__item--3">
            <div class="page-kraft-works__img">
              <img
                src="../assets/images/page-kraft/feature-work-3.png"
                alt=""
              />
            </div>
            <div
              class="page-kraft-works__title"
              data-lang-key="KRAFT_FEATURE_W_T_3"
            >
              Best Artist 2019
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-kraft-collection-works" id="collection">
      <div class="container">
        <div class="page-kraft-collection-works__title animated">
          <span>X FACE</span>
          <span>Collection</span>
        </div>
        <div class="page-kraft-collection animated">
          <div
            class="page-kraft-collection__item"
            style="background-image: url(../assets/images/page-kraft/nft-1.jpg)"
          ></div>
          <div
            class="page-kraft-collection__item"
            style="background-image: url(../assets/images/page-kraft/nft-2.jpg)"
          ></div>
          <div
            class="page-kraft-collection__item"
            style="background-image: url(../assets/images/page-kraft/nft-3.png)"
          ></div>
          <div
            class="page-kraft-collection__item"
            style="background-image: url(../assets/images/page-kraft/nft-4.jpg)"
          ></div>
          <div
            class="page-kraft-collection__item"
            style="background-image: url(../assets/images/page-kraft/nft-5.jpg)"
          ></div>
          <div
            class="page-kraft-collection__item"
            style="background-image: url(../assets/images/page-kraft/nft-6.png)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import { gsap } from "gsap";
import { mapActions, mapState } from "vuex";

import "@/assets/sass/page-collection-kraft.scss";

import { anim, throttle } from "../assets/js/global";

export default {
  name: "Author",
  data() {
    return {
      info: {
        name: "",
      },
    };
  },
  computed: {
    ...mapState(["authors"]),
    authorInfo() {
      const { authorId } = this.$route.params;
      const info = this.$store.getters.getAuthors.find((item) => {
        return item._id === authorId;
      });
      return !info ? {} : info;
    },
  },
  created() {
    const { authorId } = this.$route.params;
    this.GET_AUTHORS(authorId);
  },
  methods: {
    ...mapActions(["GET_AUTHORS"]),
    getImgUrl: function (pet) {
      return `https://api.test.nftopium.io${pet}`;
    },
  },
  mounted() {
    document.querySelector(".app").classList.add("page-kraft");
    const wow = new WOW({
      offset: 100,
    });
    wow.init();
    function pageKraft() {
      const logo = document.querySelector(".page-kraft-intro__bg-logo");
      const bgLeft = document.querySelector(".collection-page-intro__bg-left");
      const bgRight = document.querySelector(
        ".collection-page-intro__bg-right"
      );
      const hero = document.querySelector(".page-kraft-intro__hero");

      gsap.fromTo(
        bgLeft,
        { translateX: "-700px", translateY: "400px", opacity: 0 },
        {
          translateX: "0px",
          translateY: "0px",
          opacity: 1,
          duration: 1,
          delay: 1,
          ease: "expo",
        }
      );
      gsap.fromTo(
        bgRight,
        { translateX: "400px", translateY: "-250px", opacity: 0 },
        {
          translateX: "0px",
          translateY: "0px",
          opacity: 1,
          duration: 1,
          delay: 1,
          ease: "expo",
        }
      );
      gsap.fromTo(
        hero,
        { translateY: "400px", opacity: 0 },
        { translateY: "0px", opacity: 1, duration: 2, delay: 0.5, ease: "expo" }
      );
      gsap.fromTo(
        logo,
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 1.5 }
      );

      window.addEventListener("scroll", throttle(parallax, 14));

      function parallax() {
        const scrolled = window.pageYOffset;

        const logo = document.querySelector(".page-kraft-intro__bg-logo");
        const float = document.querySelector(".page-kraft-intro__float");
        const hero = document.querySelector(".page-kraft-intro__hero");

        hero.style.transform = "translateY(" + -scrolled * 0.1 + "px" + ")";
        float.style.transform = "translateY(" + scrolled * 0.25 + "px" + ")";
        logo.style.transform = "translateY(" + -(scrolled * 0.15) + "px" + ")";
      }
    }
    const $animateEls = document.querySelectorAll(".animated");
    $animateEls.forEach((item) => {
      anim(item, "fadeIn");
    });
    document.querySelectorAll("a.a-scroll").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
    pageKraft();
  },
  destroyed() {
    document.querySelector(".header").classList.remove("page-kraft");
  },
};
</script>
