// Variables
var body = document.querySelector('body');
var btnMenu = document.querySelector('.btn-menu');
var btnClose = document.querySelector('.btn-close');
var links = document.querySelectorAll('.menu-link');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', closeNavMenu);
}
// Functions
function openNavMenu() {
body.classList.add('menu-show');
}

function closeNavMenu() {
body.classList.remove('menu-show');
}

//Call functions
btnMenu.addEventListener('click', openNavMenu);
btnClose.addEventListener('click', closeNavMenu);
