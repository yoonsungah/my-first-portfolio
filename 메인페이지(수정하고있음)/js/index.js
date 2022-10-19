window.onload=function(){
    //------햄버거--------------------------------------------------------------------------
    //변수선언
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
    //변수선언
    const searchIcon = document.querySelector(".searchIcon");
    const searchTxt = document.querySelector(".searchTxt");

    function toggleMenu2() {
        if (searchIcon.classList.contains("aa")) { //.aa을 포함하고 있다면?
            searchTxt.classList.remove("searchON");
            searchIcon.classList.remove("aa");
        }
        else {
            searchTxt.classList.add("searchON");
            searchIcon.classList.add("aa");
        }
    }
    searchIcon.addEventListener("click", toggleMenu2);
}