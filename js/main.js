$(document).ready(function () {
  $(".gnb")
    .mouseenter(function () {
      $(".lnb").addClass("active");
    })
    .mouseleave(function () {
      $(".lnb").removeClass("active");
    });

  $("#Promotions").show();
  $("#Reservation").hide();

  $("#showReservation").click(function () {
    $("#Reservation").show();
    $("#Promotions").hide();
  });

  $("#showPromotions").click(function () {
    $("#Reservation").hide();
    $("#Promotions").show();
  });
});
for (let i = 0; i <= 79; i++) {
  setTimeout(() => {
    $(".solid").css("width", i + "%");
    if (i === 100) {
      $(".solid").css("right", "10%");
    }
  }, i * 30);
}

$(function () {
  $(".xe").on("click", function () {
    $(".overlay").toggleClass("off");
    $(this).toggleClass("active");
    $("body").toggleClass("overlay-active");
  });

  $(".hamburger").on("click", function () {
    $("body").toggleClass("overlay-active");
  });
});
