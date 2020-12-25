$(document).ready(function() {
    $("img.lazy-load").lazyload();
    $(window).scroll(function() {
        if($(this).scrollTop() > 200) {
            $(".header").addClass("active");
            $(".form-search-respon").addClass("d-none");
        } else {
            $(".header").removeClass("active");
            $(".form-search-respon").removeClass("d-none");

        }
    })
    $(".dropdown").hover(function () {
        $(this).toggleClass("active");
    });
    $(".dropdown__sidebar").click(function () {
        $(".dropdown__sidebar .dropdown__sidebar-menu").animate({
            height: "toggle"
        });
    });
    $(".btn-menu-open").click(function () {
        $(".header .sidebar").addClass("active");
    });
    $(".btn-menu-close").click(function () {
        $(".header .sidebar").removeClass("active");
    });
    $(".header .sidebar__bg").click(function () {
        $(".header .sidebar").toggleClass("active");
    });
    $(".top__search").hover(function() {
        $(this).toggleClass("active");
    });
    $('.owl-banner').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
    });
    $('.owl-danhgia').owlCarousel({
        autoHeight: true,
        center: true,
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive : {
            0 : {
                items: 1,
            },
            480 : {
               items: 1,
            },
            768 : {
                items: 3
            }
        },
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]

    }) 
});