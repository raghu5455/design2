/* Version 1.0.0 | December 4, 2023 */
/************* SWIPER **************/

// Constants for Swiper URLs
const SWIPER_CSS_URL =
  "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
const SWIPER_SCRIPT_URL =
  "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";

// Create elements
var swiperCssLink = document.createElement("link");
var swiperScriptLink = document.createElement("script");

// Set element sources
swiperCssLink.rel = "stylesheet";
swiperCssLink.href = SWIPER_CSS_URL;
swiperScriptLink.src = SWIPER_SCRIPT_URL;

// Append elements to the head of the document
document.head.appendChild(swiperCssLink);
document.head.appendChild(swiperScriptLink);

// Swiper initialization function
function initializeSwiper() {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
      delay: 3000,
    },
  });
}

// Set the onload callback for modern browsers
swiperScriptLink.addEventListener("load", initializeSwiper);

// Fallback for older browsers
swiperScriptLink.onreadystatechange = function () {
  if (
    swiperScriptLink.readyState === "loaded" ||
    swiperScriptLink.readyState === "complete"
  ) {
    initializeSwiper();
  }
};
