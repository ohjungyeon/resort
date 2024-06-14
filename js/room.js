$(function () {
  // 이미지 슬라이드 관련 코드
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

  // 메뉴 호버 관련 코드
  $(".gnb")
    .mouseenter(function () {
      $(".lnb").addClass("active");
    })
    .mouseleave(function () {
      $(".lnb").removeClass("active");
    });

  // 진행바 애니메이션 코드
  for (let i = 0; i <= 79; i++) {
    setTimeout(() => {
      $(".solid").css("width", i + "%");
      if (i === 79) {
        $(".solid").css("right", "10%");
      }
    }, i * 30);
  }
});
$(document).ready(function () {
  let baseline = -800;
  let con1 = $("#container2").offset().top + baseline;
  let con2 = $(".gallery").offset().top + baseline;
  let con3 = $("#container3").offset().top + baseline;
  let con4 = $("#container4").offset().top + baseline;
  console.log(con1);
  console.log(con2);

  $(document).on("scroll", function () {
    let scroll = $(document).scrollTop();

    if (scroll >= con1) {
      $("#container2").addClass("on");
    } else {
      $("#container2").removeClass("on");
    }

    if (scroll >= con2) {
      $(".gallery").addClass("on");
    } else {
      $(".gallery").removeClass("on");
    }

    if (scroll >= con3) {
      $("#container3").addClass("on");
    } else {
      $("#container3").removeClass("on");
    }

    if (scroll >= con4) {
      $("#container4").addClass("on");
    } else {
      $("#container4").removeClass("on");
    }
  });
}, 500);
