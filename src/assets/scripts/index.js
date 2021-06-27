wow = new WOW({
  offset: 100,
});
wow.init();

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
$animateEls.forEach((item, i) => {
  anim(item, "fadeIn");
});

document.querySelectorAll("a.a-scroll").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function introAnimation() {
  const logo = document.querySelector(".intro-t__logo");
  const btn = document.querySelector(".intro-t__btn");

  gsap.fromTo(logo, { translateY: "-50px", opacity: 0 }, { translateY: "0px", opacity: 1, duration: 1.5, delay: 0.5, ease: "expo" });
  gsap.fromTo(btn, { translateY: "50px", opacity: 0 }, { translateY: "0px", opacity: 1, duration: 1.5, delay: 1, ease: "expo" });

  function next(url) {
    if (!url) return;
    window.location.href = url;
  }

  btn.addEventListener("click", e => {
    e.preventDefault();
    const link = e.target.getAttribute("href");

    return new Promise(resolve => {
      const tl = gsap.timeline();

      tl.to(logo, {
        translateY: "-50px",
        opacity: 0,
        duration: 1.5,
        ease: "expo",
      })
        .to(btn, { translateY: "50px", opacity: 0, duration: 1.5, ease: "expo" }, "<")
        .add(resolve)
        .then(() => next(link));
    });
  });
}
if (document.querySelector(".intro-t")) introAnimation();

function throttle(fn, wait) {
  let time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

/* PAGE KRAFT COLLECTION */
function pageKraft() {
  const logo = document.querySelector(".page-kraft-intro__bg-logo");
  const bgLeft = document.querySelector(".collection-page-intro__bg-left");
  const bgRight = document.querySelector(".collection-page-intro__bg-right");
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
  gsap.fromTo(hero, { translateY: "400px", opacity: 0 }, { translateY: "0px", opacity: 1, duration: 2, delay: 0.5, ease: "expo" });
  gsap.fromTo(logo, { opacity: 0 }, { opacity: 1, duration: 2, delay: 1.5 });

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
if (document.querySelector(".page-kraft")) pageKraft();

/* PAGE ODINTRI COLLECTION */
function pageOdintri() {
  const logo = document.querySelector(".page-odintri-intro__logo");
  const smokeLeft = document.querySelector(".page-odintri-intro__smoke_left");
  const smokeRight = document.querySelector(".page-odintri-intro__smoke_right");
  const spark = document.querySelector(".page-odintri-intro__spark");
  const hero = document.querySelector(".page-odintri-intro__hero");

  gsap.fromTo(smokeLeft, { translateX: "-700px", opacity: 0 }, { translateX: "0px", opacity: 1, duration: 1.5, delay: 1, ease: "expo" });
  gsap.fromTo(smokeRight, { translateX: "400px", opacity: 0 }, { translateX: "0px", opacity: 1, duration: 1.5, delay: 1.15, ease: "expo" });
  gsap.fromTo(spark, { translateY: "-200px", opacity: 0 }, { translateY: "0px", opacity: 1, duration: 2, delay: 0.5, ease: "expo" });
  gsap.fromTo(hero, { translateY: "400px", opacity: 0 }, { translateY: "0px", opacity: 1, duration: 2, delay: 0.5, ease: "expo" });
  gsap.fromTo(logo, { opacity: 0 }, { opacity: 1, duration: 2, delay: 0.75 });

  window.addEventListener("scroll", throttle(parallax, 14));

  function parallax() {
    const scrolled = window.pageYOffset;

    const logo = document.querySelector(".page-odintri-intro__logo");
    const spark = document.querySelector(".page-odintri-intro__spark");
    const hero = document.querySelector(".page-odintri-intro__hero");

    hero.style.transform = "translateY(" + -scrolled * 0.1 + "px" + ")";
    spark.style.transform = "translateY(" + scrolled * 0.25 + "px" + ")";
    logo.style.transform = "translateY(" + -(scrolled * 0.15) + "px" + ")";
  }
}
if (document.querySelector(".page-odintri")) pageOdintri();

/* PAGE GOLOPOLOSOV COLLECTION */
function pageGolopolosov() {
  const logo = document.querySelector(".page-golopolosov-intro__logo");
  const lineL = document.querySelector(".page-golopolosov-intro__light-l");
  const lineR = document.querySelector(".page-golopolosov-intro__light-r");
  const hero = document.querySelector(".page-golopolosov-intro__hero-img");

  gsap.fromTo(lineL, { translateY: "-700px", opacity: 0 }, { translateY: "0px", opacity: 1, duration: 1.5, delay: 1.1, ease: "expo" });
  gsap.fromTo(lineR, { translateY: "400px", opacity: 0 }, { translateY: "0px", opacity: 1, duration: 1.5, delay: 1.25, ease: "expo" });
  gsap.fromTo(hero, { translateY: "-200px", opacity: 0 }, { translateY: "0px", opacity: 1, duration: 2, delay: 0.75, ease: "expo" });
  gsap.fromTo(logo, { opacity: 0 }, { opacity: 1, duration: 2, delay: 1.5 });

  window.addEventListener("scroll", throttle(parallax, 14));

  function parallax() {
    const scrolled = window.pageYOffset;

    const logo = document.querySelector(".page-golopolosov-intro__logo");
    const lineL = document.querySelector(".page-golopolosov-intro__light-l");
    const lineR = document.querySelector(".page-golopolosov-intro__light-r");
    // const hero = document.querySelector('.page-golopolosov-intro__hero img')

    lineL.style.transform = "translateY(" + -scrolled * 0.18 + "px" + ")";
    lineR.style.transform = "translateY(" + -scrolled * 0.1 + "px" + ")";
    logo.style.transform = "translateY(" + -scrolled * 0.1 + "px" + ")";
  }
}
if (document.querySelector(".page-golopolosov")) pageGolopolosov();

// window.onload = function () {
//   const preloader = document.querySelector('.page-loader')
//
//   if (preloader) {
//     gsap.to(preloader, {opacity: 0, duration: 1, delay: 0, ease: 'expo', onComplete: () => {
//       preloader.style.display = 'none';
//     }});
//   }
// }
