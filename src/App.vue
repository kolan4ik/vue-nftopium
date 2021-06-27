<template>
  <div id="app" class="app" :class="[appClass]">
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
export default {
  name: "App",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      appClass: "",
    };
  },

  mounted() {
    const smartFixedHeader = function () {
      const w = window;
      const body = document.body;
      const offsetScroll = 0; // сколько px нужно проскроллить чтобы появилась шапка
      const Header = body.querySelector(".header"); // страница events.php, шапка мероприятий

      let tempOffset = w.pageYOffset;
      if (tempOffset < w.prevOffset - offsetScroll || tempOffset < 75) {
        Header.classList.add("header--sticky");
        Header.classList.remove("header--default");
      }
      if (tempOffset === 0) {
        Header.classList.add("header--default");
      }
      window.prevOffset = w.pageYOffset;
      tempOffset =
        tempOffset /
        (document.documentElement.scrollHeight -
          (w.innerHeight || document.documentElement.clientHeight));
      if (tempOffset < 0) {
        tempOffset = 0;
      }
      if (tempOffset > 1) {
        tempOffset = 1;
      }
    };

    if (document.body.contains(document.querySelector(".header"))) {
      window.addEventListener("scroll", smartFixedHeader);
      smartFixedHeader();
    }
  },
};
</script>
