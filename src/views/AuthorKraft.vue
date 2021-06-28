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
          <span>{{ authorCollectionList[0].name }} </span>
          <span>Collection</span>
        </div>
        <div class="page-kraft-collection animated">
          <router-link
            v-for="collection in authorCollectionList"
            :key="collection._id"
            class="page-kraft-collection__item"
            :style="`background-image: url(https://api.test.nftopium.io${collection.image})`"
            :to="{ name: 'auction', params: { auctionId: collection._id } }"
          >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import { gsap } from "gsap";
import { mapActions } from "vuex";

import "../assets/sass/page-collection-kraft.scss";

import { anim, throttle } from "../assets/js/global";

export default {
  name: "AuthorKraft",
  data() {
    return {
      userId: "60d4523d72645378e4c41d8f",
    };
  },
  computed: {
    authorInfo() {
      const info = this.$store.getters.getAuthor(this.userId);
      return !info ? {} : info;
    },
    authorCollectionList() {
      const info = this.$store.getters.getCollections(
        "60d4523e72645378e4c41d90"
      );
      return !info ? {} : info;
    },
  },
  created() {
    // eslint-disable-next-line no-debugger
    if (!this.authorInfo.name) {
      this.GET_AUTHOR(this.userId);
    }
    if (!this.authorCollectionList.length) {
      this.GET_COLLECTIONS("60d4523e72645378e4c41d90");
    }
  },
  methods: {
    ...mapActions(["GET_AUTHOR"]),
    ...mapActions(["GET_COLLECTIONS"]),
    getImgUrl: function (pet) {
      return `https://api.test.nftopium.io${pet}`;
    },
  },
  mounted() {
    document.querySelector(".app").classList.add("page-kraft");
    const $animateEls = document.querySelectorAll(".animated");
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

      window.addEventListener(
        "scroll",
        throttle(function () {
          const scrolled = window.pageYOffset;
          const logo = document.querySelector(".page-kraft-intro__bg-logo");
          const float = document.querySelector(".page-kraft-intro__float");
          const hero = document.querySelector(".page-kraft-intro__hero");
          const hasLogo = !!logo;
          const hasFloat = !!float;
          const hasHero = !!hero;
          if (hasLogo) {
            hero.style.transform = "translateY(" + -scrolled * 0.1 + "px" + ")";
          }
          if (hasFloat) {
            float.style.transform =
              "translateY(" + scrolled * 0.25 + "px" + ")";
          }
          if (hasHero) {
            logo.style.transform =
              "translateY(" + -(scrolled * 0.15) + "px" + ")";
          }
        }, 14)
      );
    }
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
  beforeDestroy() {
    document.querySelector(".app").classList.remove("page-kraft");
    window.removeEventListener("scroll", throttle());
  },
};
</script>
