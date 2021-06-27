<template>
  <header class="header">
    <div class="container header-container">
      <router-link class="header-item header-logo" :to="{ name: 'home' }">
        <svg
          class="logo"
          width="111"
          height="24"
          viewBox="0 0 111 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.5996 1.98535H15.5471V18.8946L19.9943 16.6376V12.1297H25.3272L27.8897 7.62176H19.9943V6.49327H28.5318H32.7114V18.8946L37.1526 16.6376V6.49327H40.696L43.2644 1.98535H26.5996Z"
            fill="#B69D64"
          />
          <path
            d="M69.9948 1.98535H57.3728L59.9412 6.49327H69.9948C70.3634 6.49327 70.5477 6.68035 70.5477 7.0545C70.5477 7.42865 70.3634 7.61573 69.9948 7.61573H60.5536V18.8885L64.9948 16.6316V12.1297H69.9948C73.3242 12.1297 74.9949 10.44 74.9949 7.0545C74.9949 3.67507 73.3302 1.98535 69.9948 1.98535Z"
            fill="#B69D64"
          />
          <path
            d="M80.2566 1.98535H75.8154V17.7721H80.2566V1.98535Z"
            fill="#B69D64"
          />
          <path
            d="M90.1437 11.0012C90.1437 12.5038 89.4005 13.2582 87.9201 13.2582C86.4397 13.2582 85.6966 12.5038 85.6966 11.0012V1.98535H81.2554V11.0072C81.2554 15.5151 83.4789 17.7721 87.9201 17.7721C92.3613 17.7721 94.5849 15.5151 94.5849 11.0072V1.98535H90.1437V11.0012Z"
            fill="#B69D64"
          />
          <path
            d="M103.223 8.11665L95.4468 0.790527V17.7661H99.8939V11.1159L103.223 14.26L106.559 11.1159V24L111 21.743V0.790527L103.223 8.11665Z"
            fill="#B69D64"
          />
          <path
            d="M9.99416 9.4262L0 0V16.0583V21.4956L4.44119 23.7526V14.61V10.3254L14.4354 19.7516V1.98542H9.99416V9.4262Z"
            fill="#B69D64"
          />
          <path
            d="M50.2741 1.09229C45.0244 1.09229 40.7734 5.40709 40.7734 10.7357C40.7734 16.0644 45.0244 20.3792 50.2741 20.3792C55.5239 20.3792 59.7748 16.0644 59.7748 10.7357C59.7748 5.40709 55.5239 1.09229 50.2741 1.09229Z"
            fill="#B69D64"
          />
        </svg>
      </router-link>
      <div class="header-space"></div>

      <div class="header-item header-menu">
        <div class="menu" id="site-navigation" data-offset="250">
          <ul class="menu-list">
            <li class="menu-item">
              <router-link
                :to="{ name: 'home' }"
                data-lang-key="MENU_COLLECTIONS"
                class="menu-link"
                >Коллекции
              </router-link>
            </li>
            <li class="menu-item">
              <router-link
                :to="{ name: 'WhitePaper' }"
                data-lang-key="MENU_WHITEPAPER"
                class="menu-link"
                >White Paper
              </router-link>
            </li>
          </ul>
          <div class="menu__close" data-menu="site-navigation"></div>
        </div>
      </div>

      <div class="header-item header-lang lang">
        <div class="lang__current js-current-lang">
          <img src="../assets/images/langs/ru.svg" alt="Рус" />Рус
        </div>
        <ul class="lang__list">
          <li class="lang__item js-lang-switcher" id="en">
            <img src="../assets/images/langs/en.svg" alt="Eng" />Eng
          </li>
          <li class="lang__item js-lang-switcher" id="ru">
            <img src="../assets/images/langs/ru.svg" alt="Рус" />Рус
          </li>
        </ul>
      </div>

      <button class="burger-trigger header-burger" data-menu="site-navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss">
.menu-link {
  &.router-link-exact-active {
    color: #fff;
  }
}
</style>
