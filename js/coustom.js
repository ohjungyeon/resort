$(function () {
  let total = $(".panel li").length;
  let i = 0;
  let wid = $(".panel li").width();
  let timer;

  $(".panel").width(total * wid);

  start();

  function start() {
    timer = setInterval(function () {
      i++;
      if (i == total) {
        i = 0;
        $(".panel").css({ left: 0 });
      }

      $(".navi li").removeClass("on");
      $(".navi li").eq(i).addClass("on");
      slide();
    }, 3000);
  }

  $(".navi li").on("click", function () {
    clearInterval(timer);
    i = $(this).index();
    $(".panel")
      .stop()
      .animate({ left: -i * wid });
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    start();
  });

  function slide() {
    $(".panel li div").removeClass("visible");
    $(".panel")
      .stop()
      .animate({ left: -i * wid }, 500, function () {
        $(".panel li").eq(i).find("div").addClass("visible");
      });
  }

  $(".next").on("click", function () {
    clearInterval(timer);
    i++;
    if (i == total) {
      i = 0;
      $(".panel").css({ left: 0 });
    }
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    slide();
    start();
  });

  $(".prev").on("click", function () {
    clearInterval(timer);
    i--;
    if (i < 0) {
      i = total - 1;
      $(".panel").css({ left: -i * wid });
    }
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    slide();
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
});

for (let i = 0; i <= 79; i++) {
  setTimeout(() => {
    $(".solid").css("width", i + "%");
    if (i === 100) {
      $(".solid").css("right", "10%");
    }
  }, i * 30);
}

$(document).ready(function () {
  $(".panel li:first-child div").addClass("visible");
  $(".slide").on("transitionend", function () {
    $(this).find(".panel li div").addClass("visible");
  });
  let baseline = -1000;
  let con1 = $("#room").offset().top + baseline;
  let con2 = $("#gallery").offset().top + baseline;
  let con3 = $("#event").offset().top + baseline;
  let con4 = $("#dining").offset().top + baseline;
  console.log(con1);
  console.log(con2);
  console.log(con3);
  console.log(con4);

  let timeout;

  $(window).on("scroll", function () {
    clearTimeout(timeout);

    // Reduced the delay to 50ms for a quicker response
    timeout = setTimeout(function () {
      let scroll = $(window).scrollTop();

      if (scroll >= con1) {
        $("#room").addClass("on");
      } else {
        $("#room").removeClass("on");
      }

      if (scroll >= con2) {
        $("#gallery").addClass("on");
        $(".gallery2").addClass("on");
      } else {
        $("#gallery").removeClass("on");
        $(".gallery2").removeClass("on");
      }

      if (scroll >= con3) {
        $("#event").addClass("on");
      } else {
        $("#event").removeClass("on");
      }

      if (scroll >= con4) {
        $("#dining").addClass("on");
      } else {
        $("#dining").removeClass("on");
      }
    }, 50); // Reduced delay to 50ms
  });
});

function showReservation() {
  var footer = document.getElementById("footer");
  footer.style.display = "block";
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
