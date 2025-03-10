function toggleModal() {
    const modal = document.getElementById('myModal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

$(document).ready(function () {

    $(".date__number").click(function () {
        $(".date__number").removeClass("date__number--true");
        $(this).addClass("date__number--true");
    });
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    $(".yer").each(function () {
        if (Number($(this).text()) === (year)) {
            $(this).prop("selected", true);
        }
    });

    $(".mon").each(function () {
        if ($(this).attr("name") === String(month)) {
            $(this).prop("selected", true);
        }
    });

    $(".date__number").each(function () {
        if (Number($(this).text()) === day) {
            $(this).addClass("date__number--true");
        }
    });

    $(".choosen").text(day + '.' + month + '.' + year);
    $(".date").click(function () {
        day = $(".date__number--true").text();
        month = $(".month option:selected").attr("name");
        year = $(".year option:selected").text();
        $(".choosen").text(day + '.' + month + '.' + year);
    });
});

$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const showcaseSlider = new Swiper(".home-showcaseSlider", {
        speed: 3000, 
        slidesPerView: 1,
        parallax: true,
        autoplay: {
            delay: 12000, 
            disableOnInteraction: false,
        },
        pagination: {
            el: ".showcaseSlider-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.showcaseSlider-next',
            prevEl: '.showcaseSlider-prev',
        },
        on: {
            init: function () {
                const firstSlide = document.querySelector('.swiper-slide:first-child');
                const filterElement = firstSlide.querySelector('.filter');

                if (filterElement) {
                   
                    filterElement.style.opacity = "0";
                    filterElement.style.transition = "opacity 2s ease-in-out";

                   
                    setTimeout(() => {
                        filterElement.style.transition = "opacity 3s ease-in-out";
                        filterElement.style.opacity = "1";
                    }, 5000);
                }

               
                const activeSlide = document.querySelector(".swiper-slide-active");
                const textContainer = activeSlide.querySelector(".text-container .bigTitlejp");
                const bigTitleText = activeSlide.querySelector(".text-container .bigTitle");

                if (textContainer) textContainer.style.animationName = "none";
                if (bigTitleText) bigTitleText.style.animationName = "none";
            },
            slideChangeTransitionStart: function () {
                const slides = document.querySelectorAll(".swiper-slide");
                slides.forEach((slide, index) => {
                    const textContainer = slide.querySelector(".text-container .bigTitlejp");
                    const bigTitleText = slide.querySelector(".text-container .bigTitle");

                    
                    if (index === this.previousIndex) {
                        if (textContainer) textContainer.style.animationName = "slideOutToRight";
                        if (bigTitleText) bigTitleText.style.animationName = "slideOutToLeft";
                    }
                });
            },
            slideChangeTransitionEnd: function () {
                const activeSlide = document.querySelector(".swiper-slide-active");
                const textContainer = activeSlide.querySelector(".text-container .bigTitlejp");
                const bigTitleText = activeSlide.querySelector(".text-container .bigTitle");

                
                setTimeout(() => {
                    if (textContainer) {
                        textContainer.style.animationName = "none"; 
                        textContainer.offsetHeight; 
                        textContainer.style.animationName = "slideInFromLeft"; 
                    }
                    if (bigTitleText) {
                        bigTitleText.style.animationName = "none"; 
                        bigTitleText.offsetHeight; 
                        bigTitleText.style.animationName = "slideInFromLeft"; 
                    }
                }, 4000); 
            },
            slideChange: function () {
                const slides = document.querySelectorAll('.swiper-slide');
                slides.forEach((slide, index) => {
                    const filterElement = slide.querySelector('.filter');
                    if (index === this.activeIndex) {
                        filterElement.style.opacity = "0";
                          filterElement.style.transition = "opacity 2s ease-in-out";                        
                        setTimeout(() => {
                            filterElement.style.transition = "opacity 2s ease-in-out";
                            filterElement.style.opacity = "1";
                        }, 7000);
                    } else {
                      
                        if (filterElement) {
                            filterElement.style.opacity = "0";
                              filterElement.style.transition = "opacity 2s ease-in-out";
                        }
                    }
                });
            }
        }
    });


    const firstSlideFilter = document.querySelector('.swiper-slide:first-child .filter');
    if (firstSlideFilter) {
        firstSlideFilter.style.opacity = "0"; 
        firstSlideFilter.style.transition = "none"; 

     
        setTimeout(() => {
            firstSlideFilter.style.transition = "opacity 3s ease-in-out";
            firstSlideFilter.style.opacity = "1";
        }, 5000);
    }
});








$(document).ready(function () {
    $(".bcxform1").hide();
    $(".bcxform2").hide();
    $(".bcxform3").hide();
    $(".bcxform4").hide();
    let originalParent = $(".calendar").parent();
    function scrollToForm() {
        $(".srcl")[0].scrollIntoView({ behavior: "smooth", block: "start" });
    }
    $(".date__number").click(function () {
        $(".calendar").hide();
        $(".bcxform1").append($(".calendar"));
        $(".bcxform1").show();
        scrollToForm();
    });

    $(".backTocalender").click(function () {
        $(".bcxform1, .bcxform2, .bcxform3, .bcxform4").hide();
        $(".calendar").appendTo(originalParent).show();
        $(".calendar").show();
        scrollToForm();
        $('.hide_with_form').removeClass('activeblank_spc');
        /*$(".bcxform1").hide();
        originalParent.append($(".calendar"));
        $(".calendar").show();
        scrollToForm();*/
        $('.hide_with_form').removeClass('activeblank_spc');
    });

    let originalParentSignup = $(".bcxform1").parent();
    $("#backToReserve").click(function () {
        $(".bcxform1").hide();
        $(".bcxform2").append($(".bcxform1"));
        $(".bcxform2").show();
        scrollToForm();
    });

    $(".backTocalender1").click(function (e) {
        e.preventDefault();
        location.reload();
    });


    let originalParentReserve = $(".bcxform2").parent();
    $("#backtoform3").click(function () {
        $(".bcxform2").hide();
        $(".bcxform3").append($(".bcxform2"));
        $(".bcxform3").show();
        scrollToForm();
    });

    $(".backTocalender1").click(function () {
        location.reload();
    });

    let originalParentFinal = $(".bcxform3").parent();
    $("#backtoform4").click(function () {
        $(".bcxform3").hide();
        $(".bcxform4").append($(".bcxform3"));
        $(".bcxform4").show();
        scrollToForm();
    });

    $(".backTocalender2").click(function (e) {
        location.reload();
    });

    let originalParentFinal1 = $(".bcxform4").parent();
    $(".backTocalender3").click(function (e) {
        location.reload();
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const feedIns = document.querySelectorAll('.feed-in');

    function getInViewThresholds() {
       if (window.innerWidth <= 767) {
          return {
             topThreshold: 185,
             bottomThreshold: window.innerHeight - 100
          };

       } else if (window.innerHeight > 950) {
          return {
             topThreshold: 355,
             bottomThreshold: window.innerHeight - 170
          };    
       } else {
          return {
             topThreshold: 185,
             bottomThreshold: window.innerHeight - 100
          };
       }
    }

    function isInView(element) {
       const rect = element.getBoundingClientRect();
       const thresholds = getInViewThresholds();
       return rect.top >= thresholds.topThreshold && rect.bottom <= thresholds.bottomThreshold;
    }

    function handleScroll() {
       feedIns.forEach(feedIn => {
          if (isInView(feedIn)) {
             feedIn.classList.add('in-view');
          } else {
             feedIn.classList.remove('in-view');
          }
       });
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
 });



 document.addEventListener('DOMContentLoaded', function () {
    const newsMains = document.querySelectorAll('.news-main');

    function isInView(element) {
       const rect = element.getBoundingClientRect();
       return rect.bottom <= window.innerHeight - 60;
    }

    function handleScroll() {
       newsMains.forEach(newsMain => {
          if (isInView(newsMain)) {
             newsMain.classList.add('in-view');
          } else {
             newsMain.classList.remove('in-view');
          }
       });
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);
 });
