
function toggleScrolled() {
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');
  if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
  window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
}

document.addEventListener('scroll', toggleScrolled);
window.addEventListener('load', toggleScrolled);



let lastScrollTop = 0;
window.addEventListener('scroll', function () {
  const selectHeader = document.querySelector('#header');
  if (!selectHeader.classList.contains('scroll-up-sticky')) return;

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > selectHeader.offsetHeight) {
    selectHeader.style.setProperty('position', 'sticky', 'important');
    selectHeader.style.top = `-${header.offsetHeight + 50}px`;
  } else if (scrollTop > selectHeader.offsetHeight) {
    selectHeader.style.setProperty('position', 'sticky', 'important');
    selectHeader.style.top = "0";
  } else {
    selectHeader.style.removeProperty('top');
    selectHeader.style.removeProperty('position');
  }
  lastScrollTop = scrollTop;
});


const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

function mobileNavToogle() {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  mobileNavToggleBtn.classList.toggle('bi-list');
  mobileNavToggleBtn.classList.toggle('bi-x');
}
mobileNavToggleBtn.addEventListener('click', mobileNavToogle);


document.querySelectorAll('#navmenu a').forEach(navmenu => {
  navmenu.addEventListener('click', () => {
    if (document.querySelector('.mobile-nav-active')) {
      mobileNavToogle();
    }
  });

});


document.querySelectorAll('.navmenu .has-dropdown i').forEach(navmenu => {
  navmenu.addEventListener('click', function (e) {
    if (document.querySelector('.mobile-nav-active')) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    }
  });
});

if (document.querySelector('.partner_slider')) {
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.partner_slider', {
    type: 'loop',
    drag: 'free',
    pagination: false,
    arrows: false,
    gap: 40,
    perPage: 7,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      1200: {
        perPage: 6,
        gap    : '.7rem',
      },
      1023: {
        perPage: 5,
        gap    : '.7rem',
      },
      767: {
        perPage: 4,
        gap    : '.7rem',
      },
      540: {
        perPage: 3,
        gap    : '.1rem',
      }
    }
  }).mount(window.splide.Extensions);
});
}

if (document.querySelector('.splide0')) {
  var splide0 = new Splide('.splide0', {
    type: 'loop',
    pagination: false,
    autoplay: true,
  });
  splide0.mount();
}
if (document.querySelector('.splide1')) {
  var splide1 = new Splide('.splide1', {
    type: 'loop',
    pagination: false,
    autoplay: true,
  });
  splide1.mount();
}
if (document.querySelector('.splide2')) {
  var splide2 = new Splide('.splide2', {
    type: 'loop',
    pagination: false,
    autoplay: true,
  });
  splide2.mount();
}
if (document.querySelector('.splide3')) {
  var splide3 = new Splide('.splide3', {
    type: 'loop',
    pagination: false,
    autoplay: true,
  });
  splide3.mount();
}
if (document.querySelector('.splide4')) {
  var splide4 = new Splide('.splide4', {
    type: 'loop',
    pagination: false,
    autoplay: true,
  });
  splide4.mount();
}
if (document.querySelector('.splide5')) {
  var splide5 = new Splide('.splide5', {
    type: 'loop',
    pagination: false,
    autoplay: true,
  });
  splide5.mount();
}
if (document.querySelector('.splide6')) {
  var splide6 = new Splide('.splide6', {
    type: 'loop',
    pagination: false,
    autoplay: true,
  });
  splide6.mount();
}
if (document.querySelector('.splide7')) {
  var splide7 = new Splide('.splide7', {
    type: 'loop',
    pagination: false,
    autoplay: true,
  });
  splide7.mount();
}
if (document.querySelector('.splide8')) {
  var splide8 = new Splide('.splide8', {
    type: 'loop',
    pagination: false,
    autoplay: true,
  });
  splide8.mount();
}
if (document.querySelector('.splide9')) {
  var splide9 = new Splide('.splide9', {
    type: 'loop',
    pagination: false,
    autoplay: true,
  });
  splide9.mount();
}
if (document.querySelector('.splide10')) {
  var splide10 = new Splide('.splide10', {
    type: 'loop',
    pagination: false,
    autoplay: true,
  });
  splide10.mount();
}
if (document.querySelector('.splide11')) {
  var splide11 = new Splide('.splide11', {
    type: 'loop',
    pagination: false,
    autoplay: true,
  });
  splide11.mount();
}

if (document.querySelector('.testi_slider')) {
  var testi_slider = new Splide('.testi_slider', {
    autoplay: true,
    type: 'loop',
  });
  testi_slider.mount();
}



document.addEventListener('DOMContentLoaded', function () {
  var contactFormFieldsHeight = document.querySelector('.contact_form_fields').offsetHeight;
  document.querySelector('.contact_form_inner_img').style.height = contactFormFieldsHeight + 'px';
});


document.addEventListener('DOMContentLoaded', function () {
  var aboutInnerImg = document.querySelector('.about_inner').offsetHeight;
  document.querySelector('.about_img img').style.height = aboutInnerImg + 'px';
});



AOS.init();