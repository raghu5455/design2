
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.nav').addClass('logo-brand');
    } else {
      $('.nav').removeClass('logo-brand');
    }
  });
});


$(document).ready(function () {
  var splide1 = new Splide('.testi-slider', {
    type: 'loop',
    perPage: 4,
    rewind: true,
    pagination: false,
    gap: 20,
    breakpoints: {
      1280: {
        perPage: 3,
      },
      1024: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  });

  splide1.mount();
});




$(document).ready(function () {
  var splide1 = new Splide('.framecity-slider', {
    type: 'loop',
    perPage: 4,
    rewind: true,
    pagination: false,
    gap: 20,
    breakpoints: {
      1280: {
        perPage: 3,
      },
      1024: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  });

  splide1.mount();
});


$(document).ready(function () {
  var splide1 = new Splide('.image_slide', {
    // type: 'loop',
    perPage: 2,
    rewind: true,
    pagination: false,
    gap: 20,
    breakpoints: {
      540: {
        perPage: 1,
      },
    },
  });

  splide1.mount();
});


$(document).ready(function () {
  var splide1 = new Splide('.image_slide1', {
    // type: 'loop',
    perPage: 1,
    rewind: true,
    pagination: false,
    gap: 20,
    breakpoints: {
      540: {
        perPage: 1,
      },
    },
  });

  splide1.mount();
});



$(document).ready(function () {
  var splide1 = new Splide('.verified_frames', {
    type: 'loop',
    perPage: 4,
    rewind: true,
    pagination: false,
    gap: 20,
    breakpoints: {
      1280: {
        perPage: 3,
      },
      1024: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  });

  splide1.mount();
});

$(document).ready(function () {
  var splide1 = new Splide('.frame_guide', {
    type: 'loop',
    perPage: 4,
    rewind: true,
    pagination: false,
    gap: 20,
    breakpoints: {
      1280: {
        perPage: 3,
      },
      1024: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  });

  splide1.mount();
});


$(document).ready(function () {
  var splide1 = new Splide('.works_slide', {
    type: 'loop',
    perPage: 4,
    rewind: true,
    pagination: false,
    gap: 20,
    breakpoints: {
      1280: {
        perPage: 4,
      },
      1024: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  });

  splide1.mount();
});



$(document).ready(function () {
  var splide1 = new Splide('.moment_slide', {
    type: 'loop',
    perPage: 4,
    rewind: true,
    pagination: false,
    gap: 20,
    breakpoints: {
      1280: {
        perPage: 3,
      },
      1024: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  });

  splide1.mount();
});


$(document).ready(function () {
  var splide1 = new Splide('.productimageslide', {
    type: 'loop',
    perPage: 1,
    rewind: true,
    arrow: false,
    gap: 10,
  });

  splide1.mount();
});


$(document).ready(function () {
  const splide = new Splide('.video_slider', {
    type: 'loop',
    pagination: false,
    perPage: 2,
    heightRatio: 0.3325,
    gap: 20,
    cover: true,
    video: {
      loop: true,
      playerOptions: {
        youtube: {},
        vimeo: {},
        htmlVideo: {},
      },
    },
    breakpoints: {
      1280: {
        perPage: 2,
      },
      1024: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  });

  splide.on('move', function () {
    document.querySelectorAll('.video_slider video').forEach(function (video) {
      video.currentTime = 0
    })
  });

  splide.mount(window.splide.Extensions);
});






document.addEventListener('DOMContentLoaded', function () {
  var aboutInnerImg = document.querySelector('.popup-youtube').offsetHeight;
  document.querySelector('.fix_height').style.height = aboutInnerImg + 'px';
});



$(document).ready(function () {
  $('[data-fancybox="mixed"]').fancybox({
    buttons: [
      'slideShow',
      'close'
    ],
    slideShow: {
      autoStart: true,
     
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
    if (href.includes('youtube.com/shorts/')) {
        var videoId = href.split('/shorts/')[1].split('?')[0];
        $(this).attr('href', 'https://www.youtube.com/embed/' + videoId);
    }
});
});

document.addEventListener("DOMContentLoaded", function () {
  var searchInputDiv = document.querySelector(".search_input");
  var filterBtn = document.querySelector(".filter_btn");

  document.addEventListener("click", function (event) {
    if (searchInputDiv.contains(event.target)) {
      searchInputDiv.classList.add("shadow_ring");
    } else {
      searchInputDiv.classList.remove("shadow_ring");
    }
    if (filterBtn.contains(event.target)) {
      filterBtn.classList.add("shadow_ring");
    } else {
      filterBtn.classList.remove("shadow_ring");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const tabContainer = document.querySelector("#tab_container");
  const navList = tabContainer.querySelectorAll(".menu button");
  const tabList = tabContainer.querySelectorAll(".tab");

  for (let i = 0; i < navList.length; i++) {
    navList[i].addEventListener('click', (evt) => {
      let currentLink = tabContainer.querySelector("button.active");
      let currentTab = tabContainer.querySelector(".tab.active");

      currentLink.classList.remove("active");
      navList[i].classList.add("active");

      currentTab.classList.remove("active");
      tabList[i].classList.add("active");
    })
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const chooseFile = document.getElementById("choose-file");

  chooseFile.addEventListener("change", function () {
    getImgData();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    var topbar = document.querySelector('.topbar');
    if (window.scrollY >= 600) {
      topbar.classList.add('topbar_scrolled');
    } else {
      topbar.classList.remove('topbar_scrolled');
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  var divElements = document.querySelectorAll('.insight_img');

  divElements.forEach(function (divElement) {
    var imgElement = divElement.querySelector('img');

    if (imgElement) {
      var imageWidth = imgElement.width;

      var paragraphElement = divElement.querySelector('p');
      if (paragraphElement) {
        paragraphElement.style.width = `${imageWidth}px`;
      }
    }
  });
});



document.addEventListener('DOMContentLoaded', function () {
  
  function setupModal(modalId) {
    const modal = document.querySelector(`#${modalId}`);
    const btnBack = modal.querySelector('.btn-back');
    const modalbtn = modal.querySelector('.modal-btn');
    const btnClose = modal.querySelector('.btn-close');
    const continueBoxes = modal.querySelectorAll('.continue_mail');
    const exampleModalLabel = modal.querySelector('#exampleModalLabel');
    const exampleModalLabel1 = modal.querySelector('#exampleModalLabel1');
    const modalBody = modal.querySelector('.modal-body');
    const modalBody1 = modal.querySelector('.modal-body1');

    
    function switchModalView(showLabel, showLabel1, showBody, hideBody) {
      exampleModalLabel.style.display = showLabel;
      exampleModalLabel1.style.display = showLabel1;
      modalBody.style.display = showBody;
      modalBody1.style.display = hideBody;
      btnBack.classList.toggle('active', showLabel1 === 'block');
    }

    
   
    continueBoxes.forEach(function(box) {
      box.addEventListener('click', function () {
        switchModalView('none', 'block', 'none', 'flex');
      });
    });

    
    btnBack.addEventListener('click', function () {
      switchModalView('block', 'none', 'flex', 'none');
    });

  

    
    btnClose.addEventListener('click', function () {
      switchModalView('block', 'none', 'flex', 'none');
    });
  }


  setupModal('exampleModal1');
  setupModal('exampleModal2');

});
