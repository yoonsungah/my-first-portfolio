$(function () {

    //보여지는 배너를 체크할 변수
    let showBanner = 0;
    let moveX = 0;

    //복사 : 마지막 슬라이드에서 첫번째 슬라이드로 이동하며 무한슬라이드
    let cloneObj = $(".banner>li").eq(0).clone();
    $(".banner").append(cloneObj);
    let liWidth = $(".banner>li").eq(0).width();

    //배너의 개수
    let count = $(".banner>li").length;

    //자동으로 이동
    let timer;


    function moveSlide() {
        // moveX만큼 배너가 왼쪽으로 이동한다.
        moveX = -liWidth * showBanner;
        $(".banner").stop().animate({
            "margin-left": moveX + "px"
        }, 500);

        if (showBanner === 4) {
            $(".pager>a").eq(0).addClass("active")
                .siblings("a").removeClass("active");
        } else {
            $(".pager>a").eq(showBanner).addClass("active")
                .siblings("a").removeClass("active");
        }
    }

    //오른쪽 버튼을 클릭하면 배너 한개를 왼쪽으로 이동
    $(".rightBtn").on("click", function () {
        if (showBanner === count - 1) {
            showBanner = 0;
            $(".banner").css("margin-left", 0);
        }
        showBanner++;
        moveSlide();
    });
    //왼쪽 버튼을 클릭하면 배너 한개를 오른쪽으로 이동
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

    //3초마다 배너가 하나씩 이동하도록
    //오른쪽 버튼을 클릭한 것 처럼 베너가 한개씩 왼쪽으로 이동
    timer = setInterval(() => {
        $(".rightBtn").trigger("click");
    }, 3000)

    //배너에 마우스를 올리면 배너가 멈춘다
    //배너에서 마우스가 벗어나면 자동슬라이드 실행
    $("#mainBanner").on({
        "mouseover": function () {
            clearInterval(timer)
        },
        "mouseout": function () {
            timer = setInterval(() => {
                $(".rightBtn").trigger("click");
            }, 3000)
        }
    });

    //------검색 돋보기
    $(".searchIcon").click(function () {
        $(this).toggleClass("aa");
        $(".searchTxt").toggleClass("searchON");
    })


    // ----------------------------------------------------------------------------------


    let list = $('.topSaleUl');
    

    let length = list.children().length;
    let time;
 
    let innerSize = 640;
    let topCount = 4;
    //.topSaleUl>li의 넓이와 높이를 설정
    list.css('width', 100 * length /topCount+ '%');
    // console.log(listWidth);
    let listWidth = list.children().outerWidth();

    //next버튼을 클릭했을 경우
    $('.ToprightBtn').click(function () {
        //animate({}, time, function(){}); 애니메이션이 실행된 다음 function블록의 실행
        list.animate({ left: -listWidth + 'px' }, 500, function () {
            //append : 새로운 태그를 만들어서 append하면 추가가 되지만
            // 기존에 선택자를 append하면 이동된다 (복사가 안됨)
            $(this).append($(this).find('li:first'));
            // $(this).find('img:first').remove();
            $(this).css('left', 0);
        });
    });
    // prev버튼을 클릭했을 경우
    // 1->2->3->4 : 4번 슬라이드를 맨 앞에 복사 -> animate를 실행
    $('.TopleftBtn').click(function () {
        list.prepend(list.find('li:last'));
        // list.find('img:last').remove();
        list.css('left', -listWidth);
        list.stop().animate({ left: 0 }, 500);
    });

    $('.topSale>.innerBox').mouseenter(function () { //마우스 올리면 멈춤
        clearInterval(time);
    }).mouseleave(function () {//마우스 떼면 자동 슬라이드 재개
        interval();
    });

    interval();
    function interval() {
        time = setInterval(function () {
            $('.ToprightBtn').trigger('click');
        }, 2000);
    }

    //------------------------------------------------------------------
    //Li를 클릭했을 경우 해당 순위 선택됨
    let Li = $('.hotContWrap');
    let LiLength = Li.find('.bb').length;
    let LiIndex = 0;

    // function moveImg(){
    //     $(".bb").stop().fadeOut(1000);
    //     $(".bb").eq(LiIndex).addClass('focus2').siblings().removeClass('focus2')
    //     .stop().fadeIn(1000);
    // }

    let i = 0;
    function moveChart() {
        $('.hUl>li').eq(i).addClass('focus').siblings().removeClass('focus');
        $(".bb").eq(i).addClass('focus2').siblings().removeClass('focus2');
    }

    $('.hUl>li').on('click', function () {
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
    //--------------------------

    let duration = 300;

    $('.newItem .imgBox').on({
        'mouseover': function () {
            $(this).find('.itemCon').stop().animate({ bottom: '0px' }, duration);
            $(this).find('span').stop().animate({ opacity: 1 }, duration);
            $(this).find('img').stop().animate({ top: '-20px' }, duration * 1.3);
        },
        'mouseout': function () {
            $(this).find('.itemCon').stop().animate({ bottom: '-80px' }, duration);
            $(this).find('span').stop().animate({ opacity: 0 }, duration);
            $(this).find('img').stop().animate({ top: '0px' }, duration * 1.3);
        }
    });
    //-----------------------------------------
    let topBtn = $('.topBtn');
    topBtn.on('click', function () {
        $('html').animate({ scrollTop: 0 });
    })

    let winWidth=$(window).width();

    function resizeInit(){
        winWidth=$(window).width();
        showBanner=0;
        liWidth=winWidth;
        // moveX=0;
        $(".banner").css("margin-left", 0);
        moveSlide();
        if (winWidth > innerSize) {
            topCount = 4
        }
        else {
            topCount = 2
        }
        list.css('width', 100 * length /topCount+ '%');
        listWidth = list.children().outerWidth();
    }

    resizeInit();

    $(window).on("resize",function(){
        resizeInit();
    })


});
