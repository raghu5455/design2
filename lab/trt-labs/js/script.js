var TRT = {};
!function(e) {
    "use strict";
    
    function a() {
        if (e(".main-header").length) {
            var a = e(window).scrollTop(),
                n = e(".header-style-one"),
                o = e(".scroll-to-top"),
                i = e(".main-header .sticky-header");
            a > 100 ? (i.addClass("fixed-header animated slideInDown"), o.fadeIn(300)) : (i.removeClass("fixed-header animated slideInDown"), o.fadeOut(300)),
            a > 1 ? n.addClass("fixed-header") : n.removeClass("fixed-header");
        }
    }

    if (e("body"),
        TRT.isRTL = { check: function() { return "rtl" === e("html").attr("dir") } },
        TRT.isLTR = { check: function() { return "rtl" !== e("html").attr("dir") } },
        a(),
        e(".main-header li.dropdown ul").length && e(".main-header .navigation li.dropdown").append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>'),
        e(".mobile-menu").length) {
        var n = e(".main-header .main-menu .navigation").html();
        e(".mobile-menu .navigation").append(n),
        e(".sticky-header .navigation").append(n),
        e(".mobile-menu .close-btn").on("click", function() { e("body").removeClass("mobile-menu-visible") }),
        e(".mobile-menu li.dropdown .dropdown-btn").on("click", function() { e(this).prev("ul").slideToggle(500), e(this).toggleClass("active") }),
        e(".mobile-nav-toggler").on("click", function() { e("body").addClass("mobile-menu-visible") }),
        e(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").on("click", function() { e("body").removeClass("mobile-menu-visible") });
    }

    e(".search-btn").length && (
        e(".search-btn").on("click", function() { e(".main-header").addClass("moblie-search-active") }),
        e(".close-search, .search-back-drop").on("click", function() { e(".main-header").removeClass("moblie-search-active") })
    ),
    e(".banner-carousel").length && e(".banner-carousel").owlCarousel({
        rtl: TRT.isRTL.check(),
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        loop: !0,
        margin: 0,
        nav: !0,
        smartSpeed: 500,
        autoHeight: !0,
        autoplay: !0,
        autoplayTimeout: 1e4,
        navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1024: { items: 1 } }
    }),
    e(".product-carousel-trt").length && e(".product-carousel-trt").owlCarousel({
        rtl: TRT.isRTL.check(),
        loop: !0,
        margin: 30,
        nav: !1,
        smartSpeed: 500,
        autoHeight: !0,
        autoplay: !0,
        autoplayTimeout: 1e4,
        navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 991: { items: 3 }, 1200: { items: 5 } }
    }),
    e(window).on("scroll", function() { a(), TM_activateMenuItemOnReach() }),
    e(window).on("load", function() { e(".preloader").length && e(".preloader").delay(200).fadeOut(500) }),
    
    // Adding the new function for blog-carousel
    e(".blog-carousel").length && e(".blog-carousel").owlCarousel({
        rtl: TRT.isRTL.check(),
        loop: !0,
        margin: 30,
        nav: !1,
        smartSpeed: 400,
        autoplay: !0,
        navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 1024: { items: 3 }, 1200: { items: 3 } }
    });

}(window.jQuery);
