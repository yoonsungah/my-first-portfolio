window.onload=function(){
    //------햄버거--------------------------------------------------------------------------
    //변수선언
    const body=document.querySelector("header");
    const menuWrap = document.querySelector(".menuWrap");
    const ham = document.querySelector(".hamClose>a");
    
    function toggleMenu() {
        if (ham.classList.contains("on")) { //.on을 포함하고 있다면?
            ham.classList.remove("on");
            menuWrap.classList.remove("activeMenu");
        }
        else {
            ham.classList.add("on");
            menuWrap.classList.add("activeMenu");
        }
    }
    ham.addEventListener("click", toggleMenu);

    //----------------------------------------------------------------
    // //변수선언
    // const searchIcon = document.querySelector(".searchIcon");
    // const searchTxt = document.querySelector(".searchTxt");

    // function toggleMenu2() {
    //     if (searchIcon.classList.contains("aa")) { //.aa을 포함하고 있다면?
    //         searchTxt.classList.remove("searchON");
    //         searchIcon.classList.remove("aa");
    //     }
    //     else {
    //         searchTxt.classList.add("searchON");
    //         searchIcon.classList.add("aa");
    //     }
    // }
    // searchIcon.addEventListener("click", toggleMenu2);

    
    // body.addEventListener("click", function(){
    //     searchTxt.classList.remove("searchON");
    //         searchIcon.classList.remove("aa");
    // });

    //-------------------------------------------------------------
    // Set the date we're counting down to
        var countDownDate = new Date("Oct 26, 2022 03:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
            
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
            
        // Time calculations for days, hours, minutes and seconds
        //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))/10);
        var hours2 = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))%10);
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)/10);
        var minutes2 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)%10);
        var seconds = Math.floor((distance % (1000 * 60)) / 1000/10);
        var seconds2 = Math.floor((distance % (1000 * 60)) / 1000%10);
            
        // Output the result in an element with id="demo"
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("hour2").innerHTML = hours2;
        document.getElementById("min").innerHTML = minutes;
        document.getElementById("min2").innerHTML = minutes2;
        document.getElementById("sec").innerHTML = seconds;
        document.getElementById("sec2").innerHTML = seconds2;

            
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("hour").innerHTML = "EXPIRED";
        }
        }, 1000);
}