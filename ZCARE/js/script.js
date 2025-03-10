document.querySelector('.menuHamburgerIcon').addEventListener('click', function () {
    document.querySelector('.header-bottom').classList.toggle('active');
});

document.querySelector('.mobile_search a').addEventListener('click', function () {
    document.querySelector('.main-header').classList.add('moblie-search-active');
});
document.querySelector('.mobile_search a').addEventListener('click', function () {
    document.querySelector('body').classList.add('body-wrapper');
});

document.querySelector('.close-search').addEventListener('click', function () {
    document.querySelector('.main-header').classList.remove('moblie-search-active');
});

document.querySelector('.close-search').addEventListener('click', function () {
    document.querySelector('body').classList.remove('body-wrapper');
});

