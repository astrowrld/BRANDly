$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotHover: false,
    waitForAnimate: false,
    centerMode: false,
    fade: false,
  });

  $(".slider_blog").slick({
    slidesToShow: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    variableWidth: true,
  });
});
