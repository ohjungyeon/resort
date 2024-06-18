$(document).ready(function () {
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

  // 초기 로딩 바 애니메이션
  for (let i = 0; i <= 100; i++) {
    setTimeout(() => {
      $(".solid").css("width", i + "%");
      if (i === 100) {
        $(".solid").css("right", "10%");
      }
    }, i * 30);
  }

  // 스크롤 이벤트

  $(document).ready(function () {
    let baseline = -800;
    let con1 = $("#container").offset().top + baseline;
    let con2 = $("#container2").offset().top + baseline;
    let con3 = $("#gallery").offset().top + baseline;
    let con4 = $("#service").offset().top + baseline;
    let con5 = $("#interview").offset().top + baseline;
    console.log(con1);
    console.log(con2);
    console.log(con3);
    console.log(con4);
    console.log(con5);
    let timeout;

    $(window).on("scroll", function () {
      clearTimeout(timeout);

      timeout = setTimeout(function () {
        let scroll = $(this).scrollTop();

        if (scroll >= con2) {
          $("#container2").addClass("on");
        } else {
          $("#container2").removeClass("on");
        }

        if (scroll >= con2) {
          $("#gallery").addClass("on");
        } else {
          $("#gallery").removeClass("on");
          $(".gallery").addClass("on");
        }

        if (scroll >= con4) {
          $("#service").addClass("on");
        } else {
          $("#service").removeClass("on");
        }

        if (scroll >= con5) {
          $("#interview").addClass("on");
        } else {
          $("#interview").removeClass("on");
        }
      }, 300); // 150ms 이후에 타임아웃이 실행됩니다.
    });
  });
});

$(function () {
  $(".xe").on("click", function () {
    $(".overlay").toggleClass("on");
    $(this).toggleClass("active");
    $("body").toggleClass("overlay-active");
  });

  $(".hamburger").on("click", function () {
    $("body").toggleClass("overlay-active");
  });
});
