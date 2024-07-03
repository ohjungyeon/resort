// $(function () {
//   let total = $(".panel li").length;
//   let i = 0;
//   let wid = $(".panel li").width();
//   let timer;
//   $(".panel").width(total * wid);
//   start();

//   function start() {
//     $(".panel li:first-child div").addClass("visible");
//     timer = setInterval(function () {
//       $(".panel li").eq(i).find("div").removeClass("visible");
//       i++;
//       if (i == total - 1) {
//         $(".panel")
//           .stop()
//           .animate({ left: -(total - 1) * wid }, function () {
//             $(".panel").css({ left: 0 });
//           });

//         i = 0;
//       } else {
//         $(".panel")
//           .stop()
//           .animate({ left: -i * wid }, function () {
//             $(".panel li").eq(i).find("div").addClass("visible");
//           });
//       }
//       $(".navi li").removeClass("on");
//       $(".navi li").eq(i).addClass("on");
//     }, 3000);
//   }
//   $(".navi li").on("click", function () {
//     clearInterval(timer);
//     i = $(this).index();
//     $(".panel")
//       .stop()
//       .animate({ left: -i * wid });
//     $(".navi li").removeClass("on");
//     $(".navi li").eq(i).addClass("on");
//     start();
//     slide();
//   });
//   // function slide() {
//   //   // 모든 .panel li div 요소에서 visible 클래스를 제거합니다.
//   //   $(".panel li div").removeClass("visible");

//   //   // 특정 조건에 따라 visible 클래스를 추가합니다.
//   //   // 예를 들어, 첫 번째 요소에 visible 클래스를 추가하는 경우:
//   //   $(".panel li:first-child div").addClass("visible");
//   // }

//   // slide 함수를 호출하여 실행합니다.
//   slide();
//   $(".next").on("click", function () {
//     clearInterval(timer);
//     i++;
//     if (i == total) {
//       i = 0;
//       $(".panel").css({ left: 0 });
//     }
//     $(".navi li").removeClass("on");
//     $(".navi li").eq(i).addClass("on");

//     start();
//   });

//   $(".prev").on("click", function () {
//     clearInterval(timer);
//     i--;
//     if (i < 0) {
//       i = total - 1;
//       $(".panel").css({ left: -i * wid });
//     }
//     $(".navi li").removeClass("on");
//     $(".navi li").eq(i).addClass("on");

//     start();
//   });

//   $(".gnb")
//     .mouseenter(function () {
//       $(".lnb").addClass("active");
//     })
//     .mouseleave(function () {
//       $(".lnb").removeClass("active");
//     });

//   $("#inputField").on("focus", function () {
//     if ($(this).val() === "여기에 글을 쓰시오") {
//       $(this).val("");
//     }
//   });

//   $(window).on("scroll", function () {
//     let sc = $(this).scrollTop();
//     if (sc >= 100) {
//       $(".menuplus").addClass("on").css("top", "0");
//       $(".menuplus li").addClass("off");
//     } else {
//       $(".menuplus").removeClass("on");
//     }
//   });
// });

// for (let i = 0; i <= 79; i++) {
//   setTimeout(() => {
//     $(".solid").css("width", i + "%");
//     if (i === 100) {
//       $(".solid").css("right", "10%");
//     }
//   }, i * 30);
// }

// // $(".panel li:first-child div").addClass("visible");
// // $(".slide").on("transitionend", function () {
// //   $(this).find(".panel li div").addClass("visible");
// // });
// let baseline = -600;
// let con1 = $("#room").offset().top + baseline;
// let con2 = $("#gallery").offset().top + baseline;
// let con3 = $("#event").offset().top + baseline;
// let con4 = $("#dining").offset().top + baseline;
// console.log(con1);
// console.log(con2);
// console.log(con3);
// console.log(con4);

// let timeout;

// $(window).on("scroll", function () {
//   clearTimeout(timeout);

//   // Reduced the delay to 50ms for a quicker response
//   timeout = setTimeout(function () {
//     let scroll = $(window).scrollTop();

//     if (scroll >= con1) {
//       $("#room").addClass("on");
//     } else {
//       $("#room").removeClass("on");
//     }

//     if (scroll >= con1 && scroll >= con2) {
//       $("#gallery").addClass("on");
//       $(".gallery2").addClass("on");
//     } else {
//       $("#gallery").removeClass("on");
//       $(".gallery2").removeClass("on");
//     }

//     if (scroll >= con3) {
//       $("#event").addClass("on");
//     } else {
//       $("#event").removeClass("on");
//     }

//     if (scroll >= con4) {
//       $("#dining").addClass("on");
//     } else {
//       $("#dining").removeClass("on");
//     }
//   }, 50); // Reduced delay to 50ms

//   function showReservation() {
//     var footer = document.getElementById("footer");
//     footer.style.display = "block";
//   }

//   $(".xe").on("click", function () {
//     $(".overlay").toggleClass("off");
//     $(this).toggleClass("active");
//     $("body").toggleClass("overlay-active");
//   });

//   $(".hamburger").on("click", function () {
//     $("body").toggleClass("overlay-active");
//   });
// });
$(function () {
  let total = $(".panel li").length;
  let i = 0;
  let wid = $(".panel li").width();
  let timer;

  $(".panel").width(total * wid);

  start();
  function start() {
    $(".panel li").eq(i).find("div").addClass("visible");

    timer = setInterval(function () {
      $(".panel li").eq(i).find("div").removeClass("visible");
      i++;
      if (i == total - 1) {
        $(".panel")
          .stop()
          .animate({ left: -(total - 1) * wid }, function () {
            $(".panel").css({ left: 0 });
            $(".panel li").eq(i).find("div").addClass("visible");
          });

        i = 0;
      } else {
        $(".panel")
          .stop()
          .animate({ left: -i * wid }, function () {
            $(".panel li").eq(i).find("div").addClass("visible");
          });
      }
      $(".navi li").removeClass("on"); // 모든 네비게이션 요소에서 on 클래스 제거
      $(".navi li").eq(i).addClass("on"); // 현재 네비게이션 요소에 on 클래스 추가
    }, 3000); // 3초마다 반복
  }
  // function start() {
  //   $(".panel li").eq(i).find("div").addClass("visible"); // 첫 번째 요소에 visible 클래스 추가
  //   timer = setInterval(function () {
  //     $(".panel li").eq(i).find("div").removeClass("visible"); // 현재 요소에서 visible 클래스 제거
  //     i++;
  //     if (i == total - 1) {
  //       // i가 total과 같아지면(즉, 마지막 요소 이후가 되면)
  //       i = 0; // 인덱스를 0으로 초기화
  //       $(".panel").css({ left: 0 }); // 패널을 처음 위치로 이동
  //       $(".panel li").eq(i).find("div").addClass("visible"); // 첫 번째 요소에 visible 클래스 추가
  //     } else {
  //       $(".panel")
  //         .stop()
  //         .animate({ left: -i * wid }, function () {
  //           // 패널을 왼쪽으로 애니메이션
  //           $(".panel li").eq(i).find("div").addClass("visible"); // 현재 요소에 visible 클래스 추가
  //         });
  //     }

  // 네비게이션 버튼 클릭 이벤트
  $(".navi li").on("click", function () {
    clearInterval(timer); // 타이머 중지

    i = $(this).index(); // 클릭한 네비게이션 버튼의 인덱스로 i 설정

    // 해당 인덱스의 슬라이드로 애니메이션 적용
    $(".panel")
      .stop()
      .animate({ left: -i * wid }, function () {
        // 애니메이션이 완료된 후에 현재 슬라이드의 div에 visible 클래스 추가
        $(".panel li").eq(i).find("div").addClass("visible");
      });

    // 네비게이션 버튼 활성화
    $(".navi li").removeClass("on");
    $(this).addClass("on");

    // 다시 start() 함수 호출하여 자동 슬라이드 재시작
    start();
  });

  // Next 버튼 클릭 이벤트
  $(".next").on("click", function () {
    clearInterval(timer); // 타이머 중지

    i++; // 다음 슬라이드 인덱스로 이동
    if (i === total) {
      i = 0; // 마지막 슬라이드 이후 첫 번째 슬라이드로 이동
    }

    // 해당 인덱스의 슬라이드로 애니메이션 적용
    $(".panel")
      .stop()
      .animate({ left: -i * wid }, function () {
        // 애니메이션이 완료된 후에 현재 슬라이드의 div에 visible 클래스 추가
        $(".panel li").eq(i).find("div").addClass("visible");
      });

    // 네비게이션 버튼 활성화
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");

    // 다시 start() 함수 호출하여 자동 슬라이드 재시작
    start();
  });

  // Prev 버튼 클릭 이벤트
  $(".prev").on("click", function () {
    clearInterval(timer); // 타이머 중지

    i--; // 이전 슬라이드 인덱스로 이동
    if (i < 0) {
      i = total - 1; // 첫 번째 슬라이드 이전에 마지막 슬라이드로 이동
    }

    // 해당 인덱스의 슬라이드로 애니메이션 적용
    $(".panel")
      .stop()
      .animate({ left: -i * wid }, function () {
        // 애니메이션이 완료된 후에 현재 슬라이드의 div에 visible 클래스 추가
        $(".panel li").eq(i).find("div").addClass("visible");
      });

    // 네비게이션 버튼 활성화
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");

    // 다시 start() 함수 호출하여 자동 슬라이드 재시작
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

  // 진행바 애니메이션 코드
  for (let i = 0; i <= 79; i++) {
    setTimeout(() => {
      $(".solid").css("width", i + "%");
      if (i === 79) {
        $(".solid").css("right", "10%");
      }
    }, i * 30);
  }

  let baseline = -600;
  let con1 = $("#room").offset().top + baseline;
  let con2 = $("#gallery").offset().top + baseline;
  let con3 = $("#event").offset().top + baseline;
  let con4 = $("#dining").offset().top + baseline;

  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();

    // Reduced the delay to 50ms for a quicker response
    timeout = setTimeout(function () {
      let scroll = $(window).scrollTop();

      if (scroll >= con1) {
        $("#room").addClass("on");
      } else {
        $("#room").removeClass("on");
      }

      if (scroll >= con1 && scroll >= con2) {
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

  $(".xe").on("click", function () {
    $(".overlay").toggleClass("off");
    $(this).toggleClass("active");
    $("body").toggleClass("overlay-active");
  });

  $(".hamburger").on("click", function () {
    $("body").toggleClass("overlay-active");
  });
});
