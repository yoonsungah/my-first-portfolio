$(function () {
  let showBanner = 0;
  let moveX = 0;

  let cloneObj = $(".banner>li").eq(0).clone();
  $(".banner").append(cloneObj);
  let liWidth = $(".banner>li").eq(0).width();
  let count = $(".banner>li").length;
  let timer;

  function moveSlide() {
    moveX = -liWidth * showBanner;
    $(".banner")
      .stop()
      .animate(
        {
          "margin-left": moveX + "px",
        },
        500
      );

    if (showBanner === 4) {
      $(".pager>a")
        .eq(0)
        .addClass("active")
        .siblings("a")
        .removeClass("active");
    } else {
      $(".pager>a")
        .eq(showBanner)
        .addClass("active")
        .siblings("a")
        .removeClass("active");
    }
  }

  $(".rightBtn").on("click", function () {
    if (showBanner === count - 1) {
      showBanner = 0;
      $(".banner").css("margin-left", 0);
    }
    showBanner++;
    moveSlide();
  });

  $(".leftBtn").on("click", function () {
    if (showBanner === 0) {
      showBanner = count - 1;
      $(".banner").css("margin-left", -(count - 1) * liWidth);
    }
    showBanner--;
    moveSlide();
  });

  $(".pager>a").on("click", function () {
    showBanner = $(this).index();
    moveSlide();
  });

  timer = setInterval(() => {
    $(".rightBtn").trigger("click");
  }, 3000);

  $("#mainBanner").on({
    mouseover: function () {
      clearInterval(timer);
    },
    mouseout: function () {
      timer = setInterval(() => {
        $(".rightBtn").trigger("click");
      }, 3000);
    },
  });

  $(".searchIcon").click(function () {
    $(".searchTxt").toggleClass("searchON");
  });

  let list = $(".topSaleUl");

  let length = list.children().length;
  let time;

  let innerSize = 640;
  let topCount = 4;

  list.css("width", (100 * length) / topCount + "%");

  let listWidth = list.children().outerWidth();
  console.log(listWidth);

  $(".ToprightBtn").click(function () {
    list.animate({ left: -listWidth + "px" }, 500, function () {
      $(this).append($(this).find("li:first"));
      $(this).css("left", 0);
    });
  });

  $(".TopleftBtn").click(function () {
    list.prepend(list.find("li:last"));
    list.css("left", -listWidth);
    list.stop().animate({ left: 0 }, 500);
  });

  $(".topSale>.innerBox")
    .mouseenter(function () {
      clearInterval(time);
    })
    .mouseleave(function () {
      interval();
    });

  interval();
  function interval() {
    time = setInterval(function () {
      $(".ToprightBtn").trigger("click");
    }, 2000);
  }

  let Li = $(".hotContWrap");
  let LiLength = Li.find(".bb").length;
  let LiIndex = 0;

  let i = 0;
  function moveChart() {
    $(".hUl>li").eq(i).addClass("focus").siblings().removeClass("focus");
    $(".bb").eq(i).addClass("focus2").siblings().removeClass("focus2");
  }

  $(".hUl>li").on("click", function () {
    i = $(this).index();
    moveChart();
  });

  setInterval(function () {
    if (i === 4) {
      i = 0;
    } else {
      i++;
    }
    moveChart();
  }, 2000);

  let duration = 300;

  $(".newItem .imgBox").on({
    mouseover: function () {
      $(this).find(".itemCon").stop().animate({ bottom: "0px" }, duration);
      $(this).find("span").stop().animate({ opacity: 1 }, duration);
      $(this)
        .find("img")
        .stop()
        .animate({ top: "-20px" }, duration * 1.3);
    },
    mouseout: function () {
      $(this).find(".itemCon").stop().animate({ bottom: "-80px" }, duration);
      $(this).find("span").stop().animate({ opacity: 0 }, duration);
      $(this)
        .find("img")
        .stop()
        .animate({ top: "0px" }, duration * 1.3);
    },
  });

  let topBtn = $(".topBtn");
  topBtn.on("click", function () {
    $("html").animate({ scrollTop: 0 });
  });

  let winWidth = $(window).width();

  function resizeInit() {
    winWidth = $(window).width();
    showBanner = 0;
    liWidth = winWidth;
    $(".banner").css("margin-left", 0);
    moveSlide();

    if (winWidth > innerSize) {
      topCount = 4;
    } else {
      topCount = 2;
    }
    list.css("width", (100 * length) / topCount + "%");
    listWidth = list.children().outerWidth();
  }

  resizeInit();

  $(window).on("resize", function () {
    resizeInit();
  });
});
