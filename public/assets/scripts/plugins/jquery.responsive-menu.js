(function ($) {
  $.fn.clickToggle = function (a, b) {
    return this.on("click", function (ev) {
      [b, a][(this.$_io ^= 1)].call(this, ev);
    });
  };
})(jQuery);

$(function () {
  var config = {
    speed: 10,
    offset: null,
    breakpoint: 768,
    isOuterLinks: true,
    containerClass: ".menu",
    closeClass: ".menu__close",
    triggerClass: ".burger-trigger",
  };

  // Переносим меню между DOM элементами для удобной верстки
  $(window).on("load resize", function () {
    var $headerNavigation = $(".header__navigation");
    var ww = $(window).innerWidth();

    // is desktop
    $(config.containerClass).removeClass("mobile").addClass("desktop");
    $(config.containerClass).appendTo($headerNavigation);
    $headerNavigation.removeClass("mobile").addClass("desktop");

    if (ww < config.breakpoint) {
      // TODO проверить скролл
      // is mobile
      $(config.containerClass).removeClass("desktop").addClass("mobile");

      // переносим на один уровень с родителем
      $(config.containerClass).appendTo($(".header__in"));
      $headerNavigation.removeClass("desktop").addClass("mobile");
    }
  });

  config.offset = parseInt($(config.containerClass).data("offset")); // смещение меню при открытии

  function showMenu(container, isShow) {
    if (isShow) {
      $(config.triggerClass).addClass("active");
      $(container).addClass("opened");
    } else {
      $(config.triggerClass).removeClass("active");
      $(container).removeClass("opened");
    }
    return false;
  }

  $(config.containerClass)
    .find("a")
    .each(function () {
      if ($(this).next().length > 0) $(this).addClass("parent");
    });

  // open menu
  $(config.triggerClass).clickToggle(
    function (event) {
      var container = $(this).attr("data-menu");
      showMenu("#" + container, true);
    },
    function (event) {
      var container = $(this).attr("data-menu");
      showMenu("#" + container, false);
    }
  );

  // close menu
  $(document).on("click", config.closeClass, function (event) {
    var container = $(this).attr("data-menu");
    showMenu("#" + container, false);
  });

  // close menu when has been clicked by link
  $(config.containerClass)
    .find("a")
    .on("click", function (event) {
      if (!config.isOuterLinks) event.preventDefault();

      var container = $(this).closest(config.containerClass);
      showMenu(container, false);
    });

  // $(config.containerClass).on('click', '.km-menu__overlay', function (event) {
  //     showMenu(config.containerClass, false);
  // });

  $(document).on("mousedown", function (event) {
    if ($(event.target).closest($(config.containerClass)).length) return;
    showMenu(config.containerClass, false);
  });
});
