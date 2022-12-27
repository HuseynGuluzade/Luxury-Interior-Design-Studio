var logo = document.querySelector('.container');
var menu = document.querySelector('.menu');

logo.addEventListener('click',function(){
    menu.classList.toggle('showmenu')
});

let isMenuOpen = false;

const menuButton = document.querySelector('.hamburger');

menuButton.addEventListener('click', ()=> {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        menuButton.classList.add('open');
    }else {
        menuButton.classList.remove('open');
    }
});

AOS.init();