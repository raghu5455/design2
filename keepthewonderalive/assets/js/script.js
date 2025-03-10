(function ($) {
    "use strict";
    document.querySelector(".sidebar-button").addEventListener("click", () => document.querySelector(".main-menu").classList.toggle("show-menu"));
    $(".sidebar-button").on("click", function () {
        $(this).toggleClass("active");
        $("body").addClass("sidebar-active");
    });
    jQuery(".dropdown-icon").on("click", function () {
        jQuery(this).toggleClass("active").next("ul").slideToggle();
        jQuery(this).parent().siblings().children("ul").slideUp();
        jQuery(this).parent().siblings().children(".active").removeClass("active");
    });
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header.header-area");
        header.classList.toggle("sticky", window.scrollY > 200);
    });
    $(".search-btn").on("click", function (e) {
        let parent = $(this).parent();
        parent.find(".search-input, .lang-card").toggleClass("active");
        e.stopPropagation();
        $("body").addClass("search-active");
    });
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".search-input, .search-btn").length) {
            $(".search-input").removeClass("active");
            $("body").removeClass("search-active");
        }
    });
    $(".search-close").on("click", function (e) {
        $(".search-input").removeClass("active");
        $("body").removeClass("search-active");
    });
    $(".close-sidebar i").on("click", function (e) {
        $("body").removeClass("sidebar-active");
        $(".main-menu").removeClass("show-menu");
    });
    
})(jQuery);

