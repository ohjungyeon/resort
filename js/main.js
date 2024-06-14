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


