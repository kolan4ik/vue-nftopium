<template>
  <div class="section">
    <div class="container">
      <h2
        class="h1 section-title text-center animated"
        data-lang-key="HOME_TITLE"
      >
        Место, где артисты могут сделать больше, чем просто дропнуть свои работы
      </h2>
    </div>
    <div class="m-b-60"></div>

    <div v-for="item in collections.data" :key="item.id">
      <article
        class="collection-preview animate__ animated"
        :class="`collection-preview-${item.name.toLowerCase()}`"
      >
        <router-link
          class="collection-preview__link"
          :to="{
            path: `/${item.name.toLowerCase()}`,
            newsletterPopup: item.name,
          }"
        >
          <div class="collection-preview__poster">
            <span
              class="collection-preview__img"
              :style="{
                backgroundImage: `url(https://api.test.nftopium.io${item.image})`,
              }"
            ></span>
          </div>
          <div class="container collection-preview__body">
            <div class="collection-preview__btn">
              <span data-lang-key="VIEW_COLLECTIONS">Смотреть коллекции</span>
            </div>
            <h3 class="collection-preview__title">{{ item.name }}</h3>
          </div>
        </router-link>
      </article>
    </div>

    <router-link
      :to="{
        name: 'auction',
        params: { auctionId: '60d4523d72645378e4c41d8f' },
      }"
    >
      Aукцион
    </router-link>
  </div>
</template>

<script>
import { anim } from "../assets/js/global.js";
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "Home",

  computed: {
    ...mapGetters(["getCollections"]),
    ...mapState(["collections"]),
  },
  created() {
    if (this.collections.isLoading) {
      this.GET_COLLECTIONS();
    }
  },
  methods: {
    ...mapActions(["GET_COLLECTIONS"]),
  },
  mounted() {
    const $animateEls = document.querySelectorAll(".animated");
    $animateEls.forEach((item) => {
      anim(item, "fadeIn");
    });
  },
};
</script>
