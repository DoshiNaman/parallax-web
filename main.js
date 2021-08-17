//Doshi Naman
(function ($) {
  "use strict";

  //Parallax

  function scrollBanner() {
    $(document).on("scroll", function () {
      var scrollPos = $(this).scrollTop();
      $(".parallax-fade-top").css({
        top: scrollPos / 2 + "px",
        opacity: 1 - scrollPos / 700,
      });

      $(".parallax-00").css({
        top: scrollPos / -3.5 + "px",
      });

      $(".parallax-01").css({
        top: scrollPos / -2.8 + "px",
      });

      $(".parallax-top-shadow").css({
        top: scrollPos / -2 + "px",
      });
    });
  }
  scrollBanner();

  //Page cursors

  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      (t.style.left = n.clientX + "px"),
        (t.style.top = n.clientY + "px"),
        (e.style.left = n.clientX + "px"),
        (e.style.top = n.clientY + "px"),
        (i.style.left = n.clientX + "px"),
        (i.style.top = n.clientY + "px");
    });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }
  s();
  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    if (window.CP.shouldStopExecution(0)) break;
    o(r[a]);
  }
  window.CP.exitedLoop(0);
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }

  //Scroll back to top

  $(document).ready(function () {
    var offset = 300;
    var duration = 400;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".scroll-to-top").addClass("active-arrow");
      } else {
        jQuery(".scroll-to-top").removeClass("active-arrow");
      }
    });
    jQuery(".scroll-to-top").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });

    /* Hero Case study images */

    $(".case-study-name:nth-child(1)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(1)").addClass("show");
      $(".case-study-name:nth-child(1)").addClass("active");
    });
    $(".case-study-name:nth-child(2)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(2)").addClass("show");
      $(".case-study-name:nth-child(2)").addClass("active");
    });
    $(".case-study-name:nth-child(3)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(3)").addClass("show");
      $(".case-study-name:nth-child(3)").addClass("active");
    });
    $(".case-study-name:nth-child(4)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(4)").addClass("show");
      $(".case-study-name:nth-child(4)").addClass("active");
    });
    $(".case-study-name:nth-child(1)").trigger("mouseenter");
  });
})(jQuery);
