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



const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {


  let scrollY = window.pageYOffset;


  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");


    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}


document.querySelectorAll(".navigation a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();


    const sectionId = this.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);


    const offsetPosition = section.offsetTop + 130;


    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});




