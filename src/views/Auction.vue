<template>
  <div>
    <section class="action-page">
      <div class="action-page_top">
        <div class="container container--new">
          <div class="action-page_left">
            <div class="action-page_left-btn">
              <a data-fancybox v-bind:href="getImgUrl(auction.data.localImage)">
                <svg
                  width="14px"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1995 5.80724C12.7602 5.80664 12.4045 5.45005 12.4051 5.01077L12.4085 2.38013C12.4177 1.95437 12.0449 1.58195 11.6186 1.59141H9.02792C7.97253 1.54941 7.97332 0.0421731 9.02792 0.000531821H11.6174C12.8991 -0.0280642 14.028 1.1007 13.9995 2.38244L13.996 5.01288C13.9954 5.45184 13.6383 5.80724 13.1995 5.80724ZM8.14104 5.84634C7.83392 5.53222 7.83957 5.02859 8.15369 4.72147L11.9434 0.971499C12.2576 0.664419 12.7611 0.670027 13.0683 0.984147C13.3754 1.29827 13.3698 1.8019 13.0557 2.10902L9.26591 5.85899C9.11116 6.01028 8.91043 6.08568 8.70986 6.08568C8.50328 6.08565 8.29687 6.0057 8.14104 5.84634ZM0.696333 13.3037C0.246351 12.8537 -0.000951767 12.255 2.86102e-06 11.6181L0.00346279 9.02743C0.00401974 8.58807 0.360776 8.23243 0.799979 8.23306C1.23926 8.23366 1.59494 8.59025 1.59435 9.02957L1.59089 11.6204C1.59057 11.8316 1.67238 12.0299 1.82125 12.1788C1.97011 12.3276 2.16897 12.4085 2.38084 12.4091H4.97151C6.02691 12.4511 6.02611 13.9584 4.97151 14H2.38207H2.37829C1.7427 14 1.14544 13.7528 0.696333 13.3037ZM0.931206 13.0164C0.624085 12.7023 0.629734 12.1986 0.943854 11.8915L4.7336 8.14155C5.04772 7.83447 5.55131 7.84007 5.85847 8.15419C6.16559 8.46831 6.15994 8.97195 5.84582 9.27907L2.05608 13.029C1.90133 13.1803 1.7006 13.2557 1.50003 13.2557C1.29345 13.2557 1.08703 13.1758 0.931206 13.0164Z"
                    fill="#606060"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="13"
                  height="15"
                  viewBox="0 0 13 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.93865 1.97078C9.8096 1.13625 9.2454 0.440438 8.4285 0.143697C7.49455 -0.195467 6.47907 0.0774477 5.84094 0.838881L3.75598 3.3065C3.50476 3.60386 3.13745 3.77439 2.7482 3.77439C1.23284 3.77439 0 5.00723 0 6.52259V8.06158C0 9.10141 0.580505 10.0082 1.43446 10.4749L0.517849 11.3915C0.23165 11.6777 0.231645 12.1418 0.517837 12.428C0.804038 12.7142 1.26321 12.7191 1.54942 12.4328L12.2482 1.73408C12.5344 1.44789 12.532 0.986281 12.2458 0.700084C11.9596 0.413888 11.4956 0.413887 11.2094 0.700083L9.93865 1.97078ZM2.57674 9.33266L8.50108 3.40835L8.50109 2.33903C8.50109 1.77341 8.06255 1.57023 7.92814 1.52139C7.87131 1.50076 7.75504 1.46639 7.61236 1.46639C7.41757 1.46639 7.17353 1.5304 6.964 1.78078L4.87556 4.25251C4.34526 4.88012 3.56987 5.2401 2.7482 5.2401C2.04103 5.2401 1.4657 5.81542 1.4657 6.52259V8.06158C1.4657 8.71062 1.95034 9.24861 2.57674 9.33266ZM8.71572 7.49117C9.1774 7.02949 9.96679 7.35647 9.96679 8.00938V12.0252C9.96679 13.0054 9.37446 13.8628 8.45778 14.2097C8.18391 14.3133 7.90147 14.3636 7.62284 14.3637C6.97056 14.3637 6.33881 14.088 5.88407 13.5754L5.22987 12.7937C4.97236 12.486 5.01452 12.0201 5.31175 11.7505C5.61753 11.4732 6.07347 11.5114 6.33794 11.8283C6.64619 12.1977 6.97917 12.6012 6.97917 12.6012C7.34831 13.019 7.80719 12.8888 7.93903 12.8388C8.07087 12.789 8.50105 12.5828 8.50105 12.0252L8.50107 8.00937C8.50107 7.81501 8.57829 7.6286 8.71572 7.49117Z"
                    fill="#606060"
                  />
                </svg>
              </a>
              <a id="copy" v-bind:href="link">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.91132 12.0006C2.14473 12.0007 1.42079 11.6969 0.862254 11.1384C0.277419 10.5535 -0.0280646 9.78722 0.00202914 8.98062C0.0331306 8.14758 0.409466 7.34736 1.09037 6.66645L2.31634 5.4355C2.49901 5.25205 2.7958 5.25144 2.97924 5.43414C3.16266 5.61681 3.1633 5.91362 2.9806 6.09704L1.75398 7.3287C0.759973 8.32271 0.666176 9.61643 1.52521 10.4755C2.38426 11.3346 3.67798 11.2407 4.67126 10.2474L6.35611 8.56252C6.86679 8.05187 7.14841 7.46877 7.17051 6.87631C7.19079 6.33327 6.98257 5.81481 6.58423 5.41647C6.45075 5.28301 6.30307 5.16976 6.14527 5.07988C5.92031 4.95175 5.84182 4.66551 5.96995 4.44058C6.09811 4.21562 6.38435 4.13716 6.60926 4.26526C6.83984 4.39661 7.05445 4.5609 7.24716 4.75358C7.83199 5.33842 8.13747 6.10471 8.10738 6.91131C8.07628 7.74434 7.69994 8.54459 7.01904 9.22547L5.33419 10.9103C4.65326 11.5912 3.85306 11.9675 3.02002 11.9987C2.98374 12 2.94744 12.0006 2.91132 12.0006ZM6.0301 7.56073C6.15823 7.33578 6.07971 7.04954 5.85478 6.92143C5.69698 6.83155 5.54928 6.7183 5.41582 6.58487C4.55679 5.72582 4.65059 4.43209 5.64392 3.43877L7.32876 1.75394C8.32211 0.760638 9.61581 0.666818 10.4748 1.52585C11.3338 2.38488 11.2401 3.6786 10.246 4.67261L9.01943 5.90427C8.83673 6.08769 8.83734 6.3845 9.02078 6.56717C9.20421 6.74987 9.50099 6.74921 9.68369 6.56581L10.9097 5.33483C11.5906 4.65393 11.9669 3.8537 11.998 3.02069C12.0281 2.21409 11.7226 1.44778 11.1378 0.862943C10.5529 0.278085 9.78623 -0.0273521 8.98003 0.00269475C8.14699 0.0337963 7.34677 0.410131 6.66588 1.09104L4.98101 2.77586C4.30011 3.45677 3.92379 4.25699 3.89267 5.09001C3.86258 5.89661 4.16806 6.66292 4.75289 7.24777C4.94557 7.44043 5.16019 7.6047 5.39079 7.73607C5.46401 7.77776 5.5437 7.79759 5.62235 7.79759C5.78531 7.79757 5.94366 7.71244 6.0301 7.56073Z"
                    fill="#606060"
                  />
                </svg>
                <span class="js-copy">Copy link</span>
              </a>
            </div>
            <div
              data-fancybox
              :data-src="getImgUrl(auction.data.localImage)"
              class="action-page_left_in"
            >
              <img :src="getImgUrl(auction.data.localImage)" alt="" />
            </div>
            <div class="action-page_left_scroll">
              <i>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0007 0C11.0113 0 5.3252 5.77547 5.3252 12.8741V23.1262C5.3252 30.2249 11.0113 36 18.0007 36C24.9897 36 30.6762 30.2424 30.6762 23.1656V12.8741C30.6762 5.77547 24.9897 0 18.0007 0ZM28.2921 23.1656C28.2921 28.928 23.6756 33.6159 18.0007 33.6159C12.3261 33.6159 7.70935 28.9101 7.70935 23.1259V12.8741C7.70935 7.08989 12.3261 2.38409 18.0007 2.38409C23.6757 2.38409 28.2921 7.08989 28.2921 12.8741V23.1656Z"
                    fill="#242426"
                  />
                  <path
                    d="M17.9997 9.85429C17.3413 9.85429 16.8076 10.388 16.8076 11.0464V15.2186C16.8076 15.877 17.3413 16.4107 17.9997 16.4107C18.6581 16.4107 19.1918 15.877 19.1918 15.2186V11.0464C19.1918 10.388 18.6581 9.85429 17.9997 9.85429Z"
                    fill="white"
                  />
                </svg>
              </i>
              <b>scroll down</b>
              for more information
            </div>
          </div>
          <div class="action-page_right">
            <router-link
              class="tag"
              :to="{
                path: `/${authorInfo.name.toLowerCase()}/`,
              }"
            >
              <img v-bind:src="getImgUrl(authorInfo.image)" alt="" />@{{
                authorInfo.name.toLowerCase()
              }}
            </router-link>
            <h1>{{ auction.data.name }}</h1>
            <ul class="action-page_right_count">
              <li v-if="!auction.isLoading">
                <b>Current bid:</b>
                {{ auction.data.lastBet.value.toFixed(4) }}
                {{ auction.data.lastBet.symbol }}
                <p>{{ auction.data.lastBet.price }} $</p>
              </li>
              <li>
                <b>Ending in:</b>
                <i></i> <span id="timer" class="js-timer"></span>
              </li>
            </ul>
            <div class="place-bid">
              <div class="title">Place a bid</div>
              <div class="center">
                <div v-if="!auction.isLoading" class="place-bid_left">
                  You must bid at least:
                  <p>
                    {{ auction.data.lastBet.value.toFixed(4) }}
                    {{ auction.data.lastBet.symbol }}
                  </p>
                </div>
                <div class="place-bid_in">
                  <span>{{ bidCash }}</span>
                  <p>
                    <input
                      v-on:change="changeBit"
                      type="number"
                      v-model="bid"
                    />
                    <i v-if="!auction.isLoading">
                      {{ auction.data.lastBet.symbol }}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0132 15.6366L5.4375 12.5085L12.0132 24L18.5891 12.5085L12.0132 15.6366ZM8.89984 15.7181L12.0132 17.1993L15.1267 15.7181L12.0132 21.1589L8.89984 15.7181Z"
                          fill="#606060"
                        />
                        <path
                          d="M18.3677 11.0372L12.0129 3.8147e-06L5.6582 11.0372L12.0129 14.0473L18.3677 11.0372ZM12.0129 2.82788L15.6375 9.12305L12.0129 7.40625L8.38849 9.12305L12.0129 2.82788ZM12.0129 8.96759L15.7268 10.7269L12.0129 12.486L8.29913 10.7269L12.0129 8.96759Z"
                          fill="#606060"
                        /></svg
                    ></i>
                  </p>
                </div>
              </div>

              <a v-on:click="handleBit" href="#" class="btn btn-gold"
                >PLACE A BID</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="container container--new">
        <div class="auction-info">
          <div class="artwork-information">
            <div class="title">Artwork information</div>
            <div class="ovh"><div class="subtitle">Creator</div></div>
            <div class="creator-info">
              <div class="left">
                <a
                  target="_blank"
                  v-bind:href="artworkInformation.author.cabinetLink"
                  class="photo"
                  ><img v-bind:src="getImgUrl(authorInfo.image)" alt=""
                /></a>
                <div class="info">
                  <b>ID: {{ authorInfo._id }}</b>
                  <router-link
                    class="author-name"
                    :to="{
                      path: `/${authorInfo.name.toLowerCase()}/`,
                    }"
                  >
                    {{ authorInfo.name.toLowerCase() }}
                  </router-link>
                  <router-link
                    class="author-link"
                    :to="{
                      path: `/${authorInfo.name.toLowerCase()}/`,
                    }"
                    >@{{ authorInfo.name.toLowerCase() }}
                  </router-link>
                </div>

                <div class="creator-info_follow">
                  <ul>
                    <li>
                      Following:
                      <b>{{ artworkInformation.author.following }}</b>
                    </li>
                    <li>
                      Followers:
                      <b>{{ artworkInformation.author.followers }}</b>
                    </li>
                  </ul>
                  <a href="#" class="bnt btn-empty">Follow</a>
                </div>
              </div>
              <div class="text" v-html="auction.data.description"></div>
            </div>
            <div class="ovh"><div class="subtitle">Description</div></div>
            <div v-html="auction.data.description"></div>
          </div>
          <div class="history-list">
            <div class="title">History</div>
            <ul>
              <li v-bind:key="item.id" v-for="item in history">
                <a class="photo" v-bind:href="item.cabinetLink"
                  ><img v-bind:src="item.photo" alt=""
                /></a>
                <div class="center">
                  <a
                    target="_blank"
                    class="author-name"
                    v-bind:href="item.cabinetLink"
                    >{{ item.name }}</a
                  >
                  <a
                    target="_blank"
                    class="author-link"
                    v-bind:href="item.cabinetLink"
                    >{{ item.link }}</a
                  >
                </div>
                <div class="right">
                  <b>{{ item.bid }}</b>
                  <p>{{ item.date }}</p>
                </div>
                <a v-bind:href="item.link2" class="link">
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.54369 0.000103248C7.54765 0.000103248 7.53973 7.19985e-05 7.54369 0.000103248V0.000103248ZM10.6893 0.000103248C10.2384 -0.00508422 9.76544 0.185415 9.4454 0.523631C9.19643 0.780661 8.97795 0.779911 8.72915 0.523631C8.41762 0.194383 7.98131 0.00347823 7.54369 0.000103248C7.1019 0.000103248 6.66344 0.190539 6.34832 0.5236C6.2499 0.627599 6.11901 0.68738 5.98922 0.687599C5.85944 0.687599 5.73213 0.62938 5.63208 0.523631C5.31248 0.185852 4.87014 -0.00442797 4.42072 0.000196998C3.98755 0.00513447 3.56126 0.195914 3.25124 0.5236C3.15268 0.627755 3.02205 0.687536 2.89282 0.687599C2.75819 0.687599 2.62992 0.630099 2.53206 0.525694C2.21435 0.186758 1.78401 0.000103248 1.33981 0.000103248C0.603058 0.0069157 0 0.661005 0 1.45806V12.25C0 14.3178 1.56792 16 3.49515 16H6.52427C7.29716 15.967 7.29658 14.7827 6.52427 14.75H3.49515C2.21033 14.75 1.16505 13.6285 1.16505 12.25V1.45809C1.16505 1.34631 1.24174 1.251 1.33989 1.2501C1.47446 1.25013 1.61275 1.30772 1.71055 1.41213C2.02823 1.75103 2.44794 1.93765 2.89252 1.93762C3.33131 1.9374 3.74951 1.75153 4.06873 1.41419C4.16447 1.313 4.30066 1.25169 4.43301 1.25019C4.57244 1.24822 4.71722 1.31147 4.81448 1.41422C5.13396 1.75184 5.5507 1.93765 5.98835 1.93765H5.99109C6.42355 1.93693 6.85174 1.74615 7.16586 1.41422C7.26175 1.31288 7.40936 1.25016 7.54369 1.25016C7.67697 1.25119 7.81686 1.31409 7.91158 1.41422C8.59468 2.14681 9.5797 2.14746 10.263 1.41419C10.359 1.31266 10.5244 1.25013 10.6602 1.25013C10.7533 1.2561 10.835 1.34969 10.835 1.45769V5.71885C10.8657 6.54809 11.9695 6.54747 12 5.71885V1.45766C12 0.687443 11.4175 0.000103248 10.6893 0.000103248ZM2.91262 9.46879C2.13973 9.50179 2.14031 10.6861 2.91262 10.7188H5.53398C6.30687 10.6858 6.30629 9.50151 5.53398 9.46879H2.91262ZM7.07767 7.5938C7.07767 7.24862 6.81687 6.96881 6.49515 6.96881H2.91262C2.13973 7.00181 2.14031 8.18608 2.91262 8.2188H6.49515C6.81687 8.2188 7.07767 7.93899 7.07767 7.5938ZM6.49515 4.46882H2.91262C2.13973 4.50182 2.14031 5.6861 2.91262 5.71882H6.49515C7.26804 5.68582 7.26746 4.50154 6.49515 4.46882ZM9.6699 5.03132C9.6699 5.46279 9.34389 5.81257 8.94175 5.81257C7.97586 5.77141 7.97613 4.29108 8.94175 4.25008C9.34389 4.25008 9.6699 4.59985 9.6699 5.03132Z"
                      fill="#606060"
                    />
                    <path
                      d="M4.45631 0.000103248C4.45235 0.000103248 4.46027 7.19985e-05 4.45631 0.000103248V0.000103248ZM1.31068 0.000103248C1.76155 -0.00508422 2.23456 0.185415 2.5546 0.523631C2.80357 0.780661 3.02205 0.779911 3.27085 0.523631C3.58238 0.194383 4.01869 0.00347823 4.45631 0.000103248C4.8981 0.000103248 5.33656 0.190539 5.65168 0.5236C5.7501 0.627599 5.88099 0.68738 6.01078 0.687599C6.14056 0.687599 6.26787 0.62938 6.36792 0.523631C6.68752 0.185852 7.12986 -0.00442797 7.57928 0.000196998C8.01245 0.00513447 8.43874 0.195914 8.74876 0.5236C8.84732 0.627755 8.97795 0.687536 9.10718 0.687599C9.24181 0.687599 9.37008 0.630099 9.46794 0.525694C9.78565 0.186758 10.216 0.000103248 10.6602 0.000103248C11.3969 0.0069157 12 0.660599 12 1.45766V12.25C12 14.3178 10.4321 16 8.50485 16H5.47573C4.70284 15.967 4.70342 14.7827 5.47573 14.75H8.50485C9.78967 14.75 10.835 13.6285 10.835 12.25V1.45769C10.835 1.34591 10.7583 1.25103 10.6602 1.25013C10.5256 1.25016 10.3873 1.30772 10.2894 1.41213C9.97177 1.75103 9.55206 1.93765 9.10748 1.93762C8.66869 1.9374 8.25049 1.75153 7.93127 1.41419C7.83553 1.313 7.69934 1.25169 7.56699 1.25019C7.42756 1.24822 7.28278 1.31147 7.18552 1.41422C6.86604 1.75184 6.4493 1.93765 6.01165 1.93765H6.00891C5.57645 1.93693 5.14826 1.74615 4.83414 1.41422C4.73825 1.31288 4.59064 1.25016 4.45631 1.25016C4.32303 1.25119 4.18314 1.31409 4.08842 1.41422C3.40532 2.14681 2.4203 2.14746 1.73703 1.41419C1.64097 1.31266 1.47565 1.2501 1.33989 1.2501C1.24678 1.25606 1.16505 1.35009 1.16505 1.45809L1.16505 5.71885C1.13429 6.54809 0.0304951 6.54747 0 5.71885V1.45806C0 0.687849 0.582525 0.000103248 1.31068 0.000103248Z"
                      fill="#606060"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div class="edition-of">
            <div class="title">Edition of <i>1</i></div>
            <a v-bind:href="edition.eartehscan">
              <i>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9164 13.4064C27.957 13.366 27.9976 13.4064 27.9976 13.4468C28.1193 21.8958 21.791 28 14.0836 28C11.2035 28 8.48556 27.1107 6.25446 25.6149C6.0922 25.5341 6.17333 25.2915 6.33559 25.2915C10.5138 24.7256 15.8685 23.1085 20.0467 20.4404C24.3061 17.6915 27.3891 14.0128 27.9164 13.4064Z"
                    fill="#606060"
                  />
                  <path
                    d="M27.0234 8.59525C27.4696 9.60589 27.3074 10.8187 26.6583 11.708C25.6442 13.0016 23.981 14.5378 22.8452 15.3463C22.6423 15.4676 22.4395 15.6293 22.2367 15.7506V7.50376C22.2367 6.7761 21.6282 6.21014 20.9386 6.21014H19.1537C18.4235 6.21014 17.8556 6.7761 17.8556 7.50376V16.5591C17.8556 17.6102 17.2471 18.5399 16.2735 18.9846V10.4548C16.2735 9.72717 15.7056 9.16121 14.9755 9.16121H13.1906C12.4604 9.16121 11.8925 9.76759 11.8925 10.4548V18.9038C11.8925 19.874 11.2434 20.7229 10.3104 20.925V13.2846C10.3104 12.6378 9.78307 12.0718 9.09345 12.0718H7.14631C6.4567 12.0718 5.92935 12.5974 5.92935 13.2846V20.5612C5.92935 21.208 5.44256 21.7336 4.79351 21.774C4.30673 21.774 3.94164 21.8144 3.53598 21.8144C2 21.8144 2.19732 21.491 1.83223 20.925C0.574699 18.7016 -0.0743491 16.1548 0.00678193 13.4463C0.29074 6.29099 6.09161 0.388861 13.2311 0.0250313C19.4377 -0.338799 24.8329 3.2995 27.0234 8.59525Z"
                    fill="#606060"
                  />
                </svg> </i
              >View on Eartehscan</a
            >
            <a v-bind:href="edition.ipfs">
              <i
                ><svg
                  width="28"
                  height="18"
                  viewBox="0 0 28 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 17.3453C8.6503 17.3453 3.79892 14.4185 0.219086 9.66445C-0.0730285 9.27497 -0.0730285 8.73083 0.219086 8.34135C3.79892 3.58161 8.6503 0.654737 14 0.654737C19.3497 0.654737 24.2011 3.58161 27.7809 8.33562C28.073 8.72511 28.073 9.26924 27.7809 9.65873C24.2011 14.4185 19.3497 17.3453 14 17.3453ZM14.3838 3.12339C10.8326 2.90001 7.89997 5.82688 8.12335 9.38379C8.30664 12.3164 10.6836 14.6934 13.6162 14.8767C17.1674 15.1001 20.1 12.1732 19.8766 8.61628C19.6876 5.68941 17.3106 3.3124 14.3838 3.12339ZM14.2062 5.83833C12.2931 5.71805 10.7123 7.29317 10.8383 9.20623C10.9357 10.7871 12.2187 12.0644 13.7995 12.1675C15.7126 12.2878 17.2934 10.7126 17.1674 8.79957C17.0643 7.21299 15.7813 5.9357 14.2062 5.83833Z"
                    fill="#606060"
                  />
                </svg> </i
              >View on IPFS</a
            >
            <a v-bind:href="edition.ipfsMetadata">
              <i
                ><svg
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0006 12.3354L22.6856 6.16906L12.0006 0L1.31543 6.16906L12.0006 12.3354Z"
                    fill="#606060"
                  />
                  <path
                    d="M11.2359 13.6595L0.550781 7.49316V19.831L11.2359 26V13.6595Z"
                    fill="#606060"
                  />
                  <path
                    d="M12.7646 13.6595V26L23.4495 19.831V7.49316L12.7646 13.6595Z"
                    fill="#606060"
                  />
                </svg> </i
              >View on IPFS Metadata</a
            >
          </div>
        </div>
      </div>
    </section>
    <Popup
      :closePopupEvent="closePopup"
      :isActiveBid="bid"
      v-if="isVisiblePopup"
    />
  </div>
</template>

<script>
import Popup from "../components/Popup";

import { mapActions, mapState, mapGetters } from "vuex";

const tomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 1);
export default {
  name: "Auction",
  components: {
    Popup,
  },
  computed: {
    ...mapGetters(["getAuction"]),
    ...mapState(["auction"]),

    authorInfo() {
      const info = this.$store.getters.getAuthor(this.userId);
      return !info ? { name: "" } : info;
    },
  },
  created() {
    if (this.auction.isLoading) {
      this.GET_AUCTION();
    }
    if (!this.authorInfo.name) {
      this.GET_AUTHOR(this.userId);
    }
  },
  mounted() {
    document
      .querySelector(".header .container")
      .classList.add("container--new");

    // eslint-disable-next-line no-unused-vars
    const th = this;
    // eslint-disable-next-line no-unused-vars
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      return {
        total,
        days,
        hours,
        minutes,
        seconds,
      };
    }
    function copyText(ev) {
      ev.preventDefault();
      let text = window.location.href;
      let textArea = document.createElement("textarea");
      textArea.width = "1px";
      textArea.height = "1px";
      textArea.background = "transparents";
      textArea.value = text;
      document.body.append(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      document.querySelector(".js-copy").innerHTML = "Copied";
      setTimeout(function () {
        document.querySelector(".js-copy").innerHTML = "Copy link";
      }, 3000);
    }
    function initializeClock(id, endtime) {
      function updateClock() {
        const t = getTimeRemaining(endtime);
        const visibleDay = t.days > 0 ? t.days + ":" : "";
        document.getElementById("timer").innerHTML =
          visibleDay +
          ("0" + t.hours).slice(-2) +
          ":" +
          ("0" + t.minutes).slice(-2) +
          ":" +
          ("0" + t.seconds).slice(-2);
        if (t.total <= 0) {
          clearInterval(th.timeinterval);
        }
      }

      updateClock();
      th.timeinterval = setInterval(updateClock, 1000);
    }
    initializeClock("timer", th.ending);
    let copyBtn = document.getElementById("copy");
    copyBtn.addEventListener("click", copyText);
  },

  beforeDestroy() {
    document
      .querySelector(".header-container")
      .classList.remove("container--new");
    clearInterval(this.timeinterval);
  },
  methods: {
    ...mapActions(["GET_AUCTION", "GET_AUTHOR"]),

    handleBit: function () {
      this.isVisiblePopup = true;
    },
    closePopup: function () {
      this.isVisiblePopup = false;
    },
    changeBit: function () {
      //if (parseInt(this.bid) < parseInt(this.currentBid)) {
      //this.bid = this.currentBid;
      //}
    },
    getImgUrl: function (pet) {
      return `https://api.test.nftopium.io/${pet}`;
    },
  },
  data: function () {
    return {
      userId: "60d4523d72645378e4c41d8f",
      info: null,
      timeinterval: "",
      isVisiblePopup: false,
      bid: "13",
      link: "#",
      preview: require("../assets/img/nft-1.png"),
      tag: "@420production",
      tagImg: require("../assets/img/tag.png"),
      name: "FLORA 001: Anemone",
      currentBid: "11.00",
      currentBidCash: "$24,523.43",
      ending: tomorrow,
      bidLeast: "11.00 ETH",
      bidCash: "$24,523.43",
      artworkInformation: {
        author: {
          cabinetLink: "#",
          photo: require("../assets/img/photo.png"),
          id: "3592152",
          name: "Riccardo Agostinelli",
          link: "@420production",
          text: "Russian art group that started a global art-activist movement. In 2012 two of us, Nadya and Masha, served 2 years in jail for an anti-Putin action. <br/> <br/> We raise $ to create activist art & donate.",
          following: "3425",
          followers: "2424",
        },
        description:
          "Golden IRAN <br/>" +
          "Persian 3D Typography Collection <br/>" +
          "Full Resolution : 3891 Pixel x 4096 Pixel <br/>" +
          "Date of Creation: 2014 <br/>" +
          "Render & Final Touch : 2021 <br/>" +
          "Softwares: Maxon Cinema 4D, Adobe After Effect, VideoCopilot Optical Flares Plugin & Adobe Photoshop <br/>" +
          "Render Time: 4 Hours + <br/>" +
          "I Will Personally Sign & Send it to Anyone Who Purchases  <br/>" +
          "My NFT Art (WorldWide) <br/>" +
          "for more information: www.Yousef.Gallery",
      },
      history: [
        {
          id: "1",
          cabinetLink: "#",
          photo: require("../assets/img/p1.png"),
          name: "Gregory Skovvoroda",
          link: "@pplpleasr",
          bid: "0.34 ETH",
          date: "May 3, 2021 at 3:21pm",
          link2: "#",
        },
        {
          id: "2",
          cabinetLink: "#",
          photo: require("../assets/img/p2.png"),
          name: "Riccardo Agostinelli",
          link: "@agosti",
          bid: "0.10 ETH",
          date: "May 2, 2021 at 1:12pm",
          link2: "#",
        },
        {
          id: "3",
          cabinetLink: "#",
          photo: require("../assets/img/p3.png"),
          name: "420fella",
          link: "@420production",
          bid: "0.10 ETH",
          date: "May 3, 2021 at 3:21pm",
          link2: "#",
        },
        {
          id: "4",
          cabinetLink: "#",
          photo: require("../assets/img/p3.png"),
          name: "420fella",
          link: "@420production",
          bid: "Minted",
          date: "May 3, 2021 at 3:21pm",
          link2: "#",
        },
      ],
      edition: {
        eartehscan: "#",
        ipfs: "#",
        ipfsMetadata: "#",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.place-bid_in p {
  padding: 21px 75px 21px 30px;
}
.place-bid_in input {
  width: 100%;
  outline: none;
  height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background: none;
  border: none;
  color: inherit;
}
.action-page_top:after {
  content: "";
  display: table;
  clear: both;
  overflow: hidden;
}
.action-page_top {
  padding: 60px 0 47px;
  background: var(--body-bg);
  margin: 0 0 100px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.artwork-information {
  .author-name {
    display: block;
  }
}
</style>
