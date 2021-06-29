// /**
//  * Умная фиксированная шапка Мероприятий.
//  * Скрывается при скролле вверх и появляется при скролле вниз
//  */
// const smartFixedHeader = function () {
//   const w = window;
//   const body = document.body;
//   const offsetScroll = 0; // сколько px нужно проскроллить чтобы появилась шапка
//   const Header = body.querySelector(".header"); // страница events.php, шапка мероприятий

//   let tempOffset = w.pageYOffset;

//   // Скрыть шапку
//   // if (tempOffset > (w.prevOffset + offsetScroll) || tempOffset < 100) {
//   //   Header.classList.remove('header--sticky', 'header--default')
//   // }

//   // Показать шапку
//   if (tempOffset < w.prevOffset - offsetScroll || tempOffset < 75) {
//     Header.classList.add("header--sticky");
//     Header.classList.remove("header--default");
//   }

//   if (tempOffset === 0) {
//     Header.classList.add("header--default");
//   }

//   // update the prevOffset value for the next scroll event
//   window.prevOffset = w.pageYOffset;

//   // reuse tempOffset value but now for the progress-bar as percentage
//   // this part NEEDS a FIX for Chrome and Firefox. because the percentage result is inconsistent
//   tempOffset = tempOffset / (document.documentElement.scrollHeight - (w.innerHeight || document.documentElement.clientHeight));
//   if (tempOffset < 0) {
//     tempOffset = 0;
//   }
//   if (tempOffset > 1) {
//     tempOffset = 1;
//   }
// }; // end of smartFixedHeader

// if (document.body.contains(document.querySelector(".header"))) {
//   window.addEventListener("scroll", smartFixedHeader);
//   smartFixedHeader();
// }

// get the sticky element
/*const stickyElm = document.querySelector('.header')

const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle('header--sticky', e.intersectionRatio < 1),
  {threshold: [1]}
);

observer.observe(stickyElm)*/

/*
const changeTheme = (theme) => {
  document.querySelector('[name="theme-color"]').setAttribute('content', '#1B1B1B')
  const body = document.body

  if (theme == 'dark') {
    body.classList.remove('light-theme')
    body.classList.add('dark-theme')
  }
  else {
    body.classList.remove('dark-theme')
    body.classList.add('light-theme')
  }

}
window.matchMedia("(prefers-color-scheme: dark)").addListener(e => changeTheme(e.matches ? "dark" : "light"));
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) changeTheme('dark')
*/

// wow = new WOW({
//   offset: 100,
// });
// wow.init();

/**
 * Анимация появления экрана при скролле
 */

function anim(node, animation, delay) {
  const prefix = "animate__";
  const _delay = delay ? parseFloat(delay) : 0.15;
  const animationName = `${prefix}${animation}`;
  node.classList.add("wow", `${prefix}animated`, animationName);

  if (_delay > 0) {
    node.style.setProperty("animation-delay", `${_delay}s`);
  }
}

const $animateEls = document.querySelectorAll(".animated");
$animateEls.forEach(item => {
  anim(item, "fadeIn");
});

const $authorPhotos = document.querySelectorAll(".collection-page__author-photos img");
$authorPhotos.forEach((item, idx) => {
  anim(item, "fadeInRight", idx / 2);
});
