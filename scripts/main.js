$(document).ready(function () {
  $("#my").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    loop: true,
    items: 3,
    navigation: true,
    nav: true,
    smartSpeed: 900,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      767: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });
  $("#my1").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    loop: true,
    items: 4,
    navigation: true,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    nav: true,
    smartSpeed: 900,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      767: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });
  $("#my3").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    center: true,
    loop: true,
    items: 4,
    navigation: true,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      767: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });
  $("#my4").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    loop: true,
    items: 1,
    nav: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
  });
});
