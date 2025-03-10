
// Navbar logo hide show
window.addEventListener('scroll', function () {
    var navbarElements = document.getElementsByClassName('navbar');
    var navbarLogoElements = document.getElementsByClassName('navbar-logo');

    var scrollThreshold = 100;

    for (var i = 0; i < navbarElements.length; i++) {
        if (window.scrollY >= scrollThreshold) {
            navbarLogoElements[i].style.display = 'block';
        } else {
            navbarLogoElements[i].style.display = 'none';
        }
    }
});




// Dropdown on hover
var dropdownToggle = document.querySelector('.dropdown');
var dropdownMenu = dropdownToggle.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('mouseenter', function () {
    dropdownMenu.classList.add('show');
});

dropdownToggle.addEventListener('mouseleave', function () {
    dropdownMenu.classList.remove('show');
});






// Back to top button
let backtotop = document.querySelector('.back-to-top');

if (backtotop) {
    const toggleBacktotop = () => {
        if (window.scrollY > 200) {
            backtotop.classList.add('active');
        } else {
            backtotop.classList.remove('active');
        }
    }

    window.addEventListener('load', toggleBacktotop);
    window.addEventListener('scroll', toggleBacktotop);
}



// offset from top on navigation button hyperlink
document.addEventListener("DOMContentLoaded", function () {
    const offset = 100;

    const navLinks = document.querySelectorAll('.nav-links');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const targetOffset = targetSection.offsetTop - offset;

                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
