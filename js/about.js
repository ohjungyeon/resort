$(function () {
  let total = $(".panel li").length;
  let i = 0;
  let wid = $(".panel li").width();

  $(".next").on("click", function () {
    i++;
    if (i >= total) {
      $(".panel").css({ left: 0 });
      i = 1;
    }
    $(".panel")
      .stop()
      .animate({ left: -i * wid }, 500);
  });

  $(".prev").on("click", function () {
    if (i <= 0) {
      i = total - 1;
      $(".panel").css({ left: -i * wid });
    }
    i--;
    $(".panel")
      .stop()
      .animate({ left: -i * wid }, 500);
  });
  $(".gnb")
    .mouseenter(function () {
      $(".lnb").addClass("active");
    })
    .mouseleave(function () {
      $(".lnb").removeClass("active");
    });
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
for (let i = 0; i <= 79; i++) {
  setTimeout(() => {
    $(".solid").css("width", i + "%");
    if (i === 100) {
      $(".solid").css("right", "10%");
    }
  }, i * 30);
}
// $(window).on("scroll", function () {
//   let sc = $(window).scrollTop();
//   if (sc >= 938 && sc <= 1300) {
//     $(".Operating").css({ transform: "translateY(-100px)" });
//   } else {
//     $(".Operating").css({ transform: "none" });
//   }
// });
$(document).ready(function () {
  let baseline = -800;
  let con1 = $("#container2").offset().top + baseline;
  let con2 = $(".Price").offset().top + baseline;
  let con3 = $("#gallery").offset().top + baseline;

  $(document).on("scroll", function () {
    let scroll = $(document).scrollTop();

    if (scroll >= con1) {
      $("#container2").addClass("on");
    } else {
      $("#container2").removeClass("on");
    }

    if (scroll >= con2) {
      $(".Price").addClass("on");
    } else {
      $(".Price").removeClass("on");
    }

    if (scroll >= con3) {
      $("#gallery").addClass("on");
    } else {
      $("#gallery").removeClass("on");
    }
  });
}, 500);
