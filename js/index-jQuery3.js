$(function () {


    // ----------------------------------------------------------------------------------


    let list = $('.topSaleUl');
    

    let length = list.children().length;
    let time;
    let winWidth = $(window).width();
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


    //-----------------------------------------


    
    function resizeInit() {
        winWidth = $(window).width();
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

    $(window).on("resize", function () {
        resizeInit();
    })


});
