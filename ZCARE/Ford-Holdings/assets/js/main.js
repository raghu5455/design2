
(function () {
  "use strict";


  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  const mobileNavToggle1 = document.querySelector('.mobile-nav-toggle1');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
    mobileNavToggle1.classList.toggle('active');
  }


  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }


  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });


  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);


  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);


  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);


  const glightbox = GLightbox({
    selector: '.glightbox'
  });


  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });


  new PureCounter();


  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });


  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

$(document).ready(function () {
  var splide = new Splide('.portfolio_slider', {
    type: 'loop',
    perPage: 4,
    gap: 25,
    perMove: 1,
    arrows: true,
    pagination: false,
    autoplay: true,
    interval: 3000,
    speed: 800,
    breakpoints: {
      1200: {
        perPage: 3,
      },
      991: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    }
  });

  splide.mount();
});


document.addEventListener("DOMContentLoaded", () => {
  var primarySlider = new Splide('#primary_slider', {
      type: 'fade',
      heightRatio: 0.7,
      pagination: false,
      arrows: false,
      cover: true,
      drag: true,

  });

  var thumbnailSlider = new Splide('#thumbnail_slider', {
      rewind: true,
      perPage: 5,
      isNavigation: true,
      gap: 10,
      focus: 'center',
      pagination: false,
      cover: true,
      pagination: false,
      arrows: false,
      breakpoints: {
          600: {
              perPage: 4,
          }
      }
  }).mount();

  primarySlider.sync(thumbnailSlider).mount();
});



$(document).ready(function () {
  setTimeout(function () {
    var id = '#dialog';
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({ 'height': maskHeight });
    $('#mask').fadeIn(0);
    $('#mask').fadeTo("slow", 0.6);

    $(id).css('top', '50%');
    $(id).css('left', '50%');
    $(id).fadeIn(0);


    $('.window .close').click(function (e) {
      e.preventDefault();
      $('#mask').hide();
      $('.window').hide();
    });


    $('#mask').click(function () {
      $(this).hide();
      $('.window').hide();
    });
  }, 1000);
});



$(document).ready(function () {
  const video = document.getElementById('background-video');
  video.addEventListener('ended', () => {
    video.play();
  });
});



document.addEventListener('DOMContentLoaded', function () {
  adjustHeights();
  window.addEventListener('resize', adjustHeights);
});

function adjustHeights() {
  var consultInnerElements = document.querySelectorAll('.about-buy');

  consultInnerElements.forEach(function (consultInner) {
    var consultInner2 = consultInner.querySelector('.about_buy_content');
    var consultInner2Height = consultInner2.offsetHeight;

    consultInner.querySelector('.about_buy_img img').style.height = consultInner2Height + 'px';
  });
}
