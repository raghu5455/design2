$('.dropdown-toggle').click(function (e) {
  if ($(document).width() > 768) {
    e.preventDefault();

    var url = $(this).attr('href');


    if (url !== '#') {

      window.location.href = url;
    }

  }
});



// document.addEventListener("DOMContentLoaded", function () {
//   var menuItems = document.querySelectorAll(".navigation > li");

//   menuItems.forEach(function (item) {
//     item.addEventListener("click", function () {
//       var icon = this.querySelector("i.bi");
//       var dropdown = this.querySelector(".dropdown");

//       // Remove active class from all dropdowns except the one being clicked
//       var allDropdowns = document.querySelectorAll(".dropdown");
//       allDropdowns.forEach(function (dropdownItem) {
//         if (dropdownItem !== dropdown) {
//           dropdownItem.classList.remove("active");
//         }
//       });

//       // Remove chevron classes from all icons except the one being clicked
//       var allIcons = document.querySelectorAll(".navigation i.bi");
//       allIcons.forEach(function (iconItem) {
//         if (iconItem !== icon) {
//           iconItem.classList.remove("bi-chevron-up");
//           iconItem.classList.add("bi-chevron-down");
//         }
//       });

//       // Toggle the class for the chevron icon
//       icon.classList.toggle("bi-chevron-up");
//       icon.classList.toggle("bi-chevron-down");

//       // Toggle the active class for the dropdown
//       if (dropdown) {
//         dropdown.classList.toggle("active");
//       }
//     });
//   });
// });


