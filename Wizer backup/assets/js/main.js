document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarNav = document.querySelector('.navbar-nav');

  navbarToggler.addEventListener('click', function () {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      document.body.classList.add('nav-expanded');
      navbarNav.style.display = 'block';
    } else {
      document.body.classList.remove('nav-expanded');
      navbarNav.style.display = 'none';
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
const sections = document.querySelectorAll("section[id]");
const arrowDownBtn = document.querySelector(".arrow_down_btn");
const navLinks = document.querySelectorAll(".navigation a");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current, index) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove("active"));
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
      arrowDownBtn.setAttribute("data-section-index", index);

     
      if (index === 0) {
        arrowDownBtn.setAttribute("data-direction", "down");
        arrowDownBtn.classList.remove("last-section");
      } else if (index === sections.length - 1) {
        arrowDownBtn.setAttribute("data-direction", "up");
        arrowDownBtn.classList.add("last-section");
      }
    }
  });
}

navLinks.forEach((anchor, index) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const sectionId = this.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);
    const offsetPosition = section.offsetTop;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    arrowDownBtn.setAttribute("data-section-index", index);

   
    if (index === 0) {
      arrowDownBtn.setAttribute("data-direction", "down");
      arrowDownBtn.classList.remove("last-section");
    } else if (index === sections.length - 1) {
      arrowDownBtn.setAttribute("data-direction", "up");
      arrowDownBtn.classList.add("last-section");
    }
  });
});

arrowDownBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let currentIndex = parseInt(this.getAttribute("data-section-index"));
  let direction = this.getAttribute("data-direction");

  if (direction === "down") {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= sections.length - 1) {
      
      this.setAttribute("data-direction", "up");
      this.classList.add("last-section");
    }
    const nextSection = sections[nextIndex];
    const offsetPosition = nextSection.offsetTop;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    this.setAttribute("data-section-index", nextIndex);
  } else {
    
    const firstSection = sections[0];
    const offsetPosition = firstSection.offsetTop;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

   
    this.setAttribute("data-direction", "down");
    this.classList.remove("last-section");
    this.setAttribute("data-section-index", 0);
  }
});
});


document.addEventListener("DOMContentLoaded", function () {

  $(function(){
    var tickerHeight = $('.verical-slider ul li').outerHeight();
    var tickerLength = $('.verical-slider ul li').length;
  
   
    for (var i = 0; i < 8; i++) {
      $('.verical-slider ul').append($('.verical-slider ul').html());
    }
  
    var tickerTotalHeight = tickerHeight * tickerLength * 9; 
  
    
    $('.verical-slider ul').css('top', 0);
  
    function continuousScroll(){
      $('.verical-slider ul').animate({
        top: -tickerTotalHeight
      }, tickerTotalHeight * 20, 'linear', function(){
        $('.verical-slider ul').css('top', 0);
        continuousScroll();
      });
    }
  
    continuousScroll();
  });
  
});

document.addEventListener("DOMContentLoaded", function () {

  $(function(){
    var tickerHeight = $('.verical-slider1 ul li').outerHeight();
    var tickerLength = $('.verical-slider1 ul li').length;
  
   
    for (var i = 0; i < 8; i++) {
      $('.verical-slider1 ul').append($('.verical-slider1 ul').html());
    }
  
    var tickerTotalHeight = tickerHeight * tickerLength * 9; 
  
    
    $('.verical-slider1 ul').css('top', 0);
  
    function continuousScroll(){
      $('.verical-slider1 ul').animate({
        top: -tickerTotalHeight
      }, tickerTotalHeight * 20, 'linear', function(){
        $('.verical-slider1 ul').css('top', 0);
        continuousScroll();
      });
    }
  
    continuousScroll();
  });
  
});



document.addEventListener("DOMContentLoaded", function () {
  $(function() {
    var isFirstMove = true;
    var loopCount = 0;

    $('.vertical-slider2 ul').css('marginTop', 0);

    function moveTop() {
        var tickerHeight = $('.vertical-slider2 ul li:first-child').outerHeight();

        $('.vertical-slider2 ul li:first-child').animate({
            opacity: 0
        }, 700, function() {
            $('.vertical-slider2 ul').animate({
                marginTop: -tickerHeight - 20
            }, 1300, function() {
                $('.vertical-slider2 ul li:first-child').appendTo('.vertical-slider2 ul');
                $('.vertical-slider2 ul').css('marginTop', 0);

                if (isFirstMove) {
                    isFirstMove = false;
                    $('.vertical-slider2 ul li:nth-child(2)').animate({
                        opacity: 1
                    }, 500);
                } else {
                    $('.vertical-slider2 ul li').css('opacity', 1);
                }
            });
        });

        loopCount++;
    }

    setInterval(function() {
        moveTop();
    }, 3000);
});

  
});




document.addEventListener("DOMContentLoaded", function () {
  $('[data-fancybox="mixed"]').fancybox({
    buttons: [
      'slideShow',
      'close'
    ],
    slideShow: {
      autoStart: true
    },
    afterLoad: function (instance, current) {
      current.$content.find('iframe').each(function () {
        var src = $(this).attr('src');
        if (src.startsWith('//')) {
          $(this).attr('src', 'https:' + src);
        }
      });
    },
    afterShow: function (instance, current) {
      setTimeout(function () {
        $('.fancybox-slide').find('iframe').each(function () {
          var src = $(this).attr('src');
          if (src.startsWith('//')) {
            $(this).attr('src', 'https:' + src);
            
          }
        });
      }, 500);
    }
  });

  $('.vimeo-link').each(function () {
    var href = $(this).attr('href');
    if (href.startsWith('//')) {
      $(this).attr('href', 'https:' + href);
    }
  });

});

