// Variables
var body = document.querySelector('body');
var btnMenu = document.querySelector('.btn-menu');
var btnClose = document.querySelector('.btn-close');

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
