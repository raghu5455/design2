

document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded
  adjustHeights();

  // Handle window resize to adjust heights if needed
  window.addEventListener('resize', adjustHeights);
});

function adjustHeights() {
  var consultInnerElements = document.querySelectorAll('.consult_section');

  consultInnerElements.forEach(function (consultInner) {
    var consultInner2 = consultInner.querySelector('.consult_inner_2');
    var consultInner2Height = consultInner2.offsetHeight;

    // Set the height of ulElement and consult_inner_1 to match consultInner2Height
    consultInner.querySelector('.consult_inner_1').style.height = consultInner2Height + 'px';
  });
}





$(document).ready(function () {
  var owl = $('.post_slider');
  owl.owlCarousel({
    margin: 10,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});


$(document).ready(function () {
  var owl = $('.how_it_works_slider');
  owl.owlCarousel({
    margin: 10,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  })
});

$(document).ready(function () {
  var videos = document.querySelectorAll('[id^="myVideo"]');
  var playButtons = document.querySelectorAll('[id^="play-button"]');

  videos.forEach(function (video, index) {
    var playButton = playButtons[index];

    video.addEventListener('loadedmetadata', function () {
      playButton.addEventListener('click', function () {
        if (video.paused) {
          video.play();
          playButton.style.display = 'none';
        } else {
          video.pause();
        }
      });

      video.addEventListener('play', function () {
        video.setAttribute('controls', 'true');
      });

      video.addEventListener('pause', function () {
        if (!video.getAttribute('controls')) {
          playButton.style.display = 'block';
        }
      });
    });
  });
});







// document.addEventListener("DOMContentLoaded", function () {
//   var menuItems = document.querySelectorAll(".navigation > li");

//   menuItems.forEach(function (item) {

//       item.addEventListener("click", function () {
//           // Remove active class from all dropdowns
//           var allIcons = document.querySelectorAll(".navigation i.bi");
//           allIcons.forEach(function (icon) {
//               icon.classList.remove("bi-chevron-up");
//               icon.classList.add("bi-chevron-down");
//           });

//           var allDropdowns = document.querySelectorAll(".dropdown");
//           allDropdowns.forEach(function (dropdown) {
//               dropdown.classList.remove("active");
//           });

//           // Toggle the class for the chevron icon
//           var icon = this.querySelector("i.bi");
//           if (icon.classList.contains("bi-chevron-down")) {
//               icon.classList.remove("bi-chevron-down");
//               icon.classList.add("bi-chevron-up");
//           } else {
//               icon.classList.remove("bi-chevron-up");
//               icon.classList.add("bi-chevron-down");
//           }

//           // Add active class to the dropdown associated with the clicked list item
//           var dropdown = this.querySelector(".dropdown");
//           if (dropdown) {
//               dropdown.classList.toggle("active");
//           }
//       });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".navigation > li");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var icon = this.querySelector("i.bi");
      var dropdown = this.querySelector(".dropdown");

      // Remove active class from all dropdowns except the one being clicked
      var allDropdowns = document.querySelectorAll(".dropdown");
      allDropdowns.forEach(function (dropdownItem) {
        if (dropdownItem !== dropdown) {
          dropdownItem.classList.remove("active");
        }
      });

      // Remove chevron classes from all icons except the one being clicked
      var allIcons = document.querySelectorAll(".navigation i.bi");
      allIcons.forEach(function (iconItem) {
        if (iconItem !== icon) {
          iconItem.classList.remove("bi-chevron-up");
          iconItem.classList.add("bi-chevron-down");
        }
      });

      // Toggle the class for the chevron icon
      icon.classList.toggle("bi-chevron-up");
      icon.classList.toggle("bi-chevron-down");

      // Toggle the active class for the dropdown
      if (dropdown) {
        dropdown.classList.toggle("active");
      }
    });
  });
});



// document.addEventListener("DOMContentLoaded", function () {
//   var menuItems = document.querySelectorAll(".navigation > li");

//   menuItems.forEach(function (item) {
//     item.addEventListener("mouseenter", function () {
//       // Remove active class from all dropdowns
//       var allDropdowns = document.querySelectorAll(".dropdown");
//       allDropdowns.forEach(function (dropdown) {
//         dropdown.classList.remove("active");
//       });


//       // Add active class to the dropdown associated with the hovered list item
//       var dropdown = this.querySelector(".dropdown");
//       if (dropdown) {
//         dropdown.classList.add("active");
//       }
//     });


//   });
// });



(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  on('click', '.navbar .dropdown > i', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      // e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)




})()


function TabsManager(el) {
  this.tabsContainers = document.querySelectorAll(el);
  this.init();
}

TabsManager.prototype.init = function () {
  var self = this;

  document.body.addEventListener("click", function (event) {
    var target = event.target;

    while (target !== document.body) {
      if (target.matches(".tabs-tags__tag")) {
        self.handleTabClick(target);
        return;
      }

      target = target.parentNode;
    }
  });

  self.tabsContainers.forEach(function (tabsContainer) {
    if (tabsContainer) {
      var contentTexts = tabsContainer.querySelectorAll(".tabs-content__text");
      contentTexts.forEach(function (text, index) {
        if (index !== 0) {
          text.style.display = "none";
        }
      });
      tabsContainer.querySelector(".tabs-tags__tag").classList.add("active");
    }
  });
};

TabsManager.prototype.handleTabClick = function (clickedTab) {
  var self = this;
  var tabsContainer = clickedTab.closest(".tabs");

  if (tabsContainer) {
    var contentTexts = tabsContainer.querySelectorAll(".tabs-content__text");
    var tags = tabsContainer.querySelectorAll(".tabs-tags__tag");
    var index = clickedTab.getAttribute("data-index");
    contentTexts.forEach(function (text) {
      text.style.display = "none";
    });
    contentTexts[index].style.display = "block";
    tags.forEach(function (t) {
      t.classList.remove("active");
    });
    clickedTab.classList.add("active");

    // Change the video source based on the data-video attribute of the clicked tab
    var tabsVideo = tabsContainer.querySelector(".tabs-video video");
    tabsVideo.src = clickedTab.getAttribute("data-video");
  }
};

var tabsManager = new TabsManager(".tabs");

