$(function () {
  // nav
  $(".ghost-btn").click(function () {
    $(".navbar-mo").slideDown("slow");
    $(".ghost-btn").hide();
    $(".close-btn").show();
  });
  $(".close-btn").click(function () {
    $(".navbar-mo").slideUp("slow");
    $(".close-btn").hide();
    $(".ghost-btn").show();
  });

  // top
  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition > 200) {
      $(".btn_top").fadeIn();
    } else {
      $(".btn_top").fadeOut();
    }
  });
  $(".btn_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
    return false;
  });
});
