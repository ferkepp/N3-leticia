const menu = document.querySelector('.menu');
const Navmenu = document.querySelector('.menu-nav');

menu.addEventListener('click',() =>{
    menu.classList.toggle('ativo');
    Navmenu.classList.toggle('ativo');
})