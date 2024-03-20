const btn = document.getElementById('btn-humburger');
const menu = document.getElementById('mobile-menu');
const btnCloseMenu = document.querySelector('.btn__close');
btn.addEventListener('click', () => {   
    menu.classList.toggle('hide__menu');
    menu.classList.toggle('show__menu');
});


btnCloseMenu.addEventListener('click', () => {
    menu.classList.remove('show__menu');
    menu.classList.add('hide__menu');  
});
    