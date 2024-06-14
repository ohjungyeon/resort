$(function () {
  let total = $(".panel li").length;
  let i = 0;
  let wid = $(".panel li").width();

  start();

  function start() {
    timer = setInterval(function () {
      i++;
      if (i == total - 1) {
        $(".panel")
          .stop()
          .animate({ left: "-2000px" }, function () {
            $(".panel").css({ left: 0 });
          });

        i = 0;
      } else {
        $(".panel")
          .stop()
          .animate({ left: -i * wid });
      }
    }, 3000);
  }

  $(".next").on("click", function () {
    clearInterval(timer);
    i++;
    if (i == total - 1) {
      $(".panel")
        .stop()
        .animate({ left: "-2000px" }, function () {
          $(".panel").css({ left: "0" });
        });
      i = 0;
    } else {
      $(".panel")
        .stop()
        .animate({ left: -i * wid });
    }

    start();
  });

  $(".prev").on("click", function () {
    clearInterval(timer);
    i--;
    if (i < 0) {
      $(".panel").css({ left: "-2000px" });
      $(".panel").stop().animate({ left: "-1500px" });
      i = 3;
    } else {
      $(".panel")
        .stop()
        .animate({ left: -i * wid });
    }
  });
});
$(document).ready(function () {
  start();
});

$(".gnb")
  .mouseenter(function () {
    $(".lnb").addClass("active");
  })
  .mouseleave(function () {
    $(".lnb").removeClass("active");
  });

$("#inputField").on("focus", function () {
  if ($(this).val() === "여기에 글을 쓰시오") {
    $(this).val("");
  }
});

$(window).on("scroll", function () {
  let sc = $(this).scrollTop();
  if (sc >= 100) {
    $(".menuplus").addClass("on").css("top", "0");
    $(".menuplus li").addClass("off");
  } else {
    $(".menuplus").removeClass("on");
  }
});
