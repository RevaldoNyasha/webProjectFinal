let search=document.querySelector('.search-box');

document.querySelector('#search-icon').onclick=()=>
{
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu=document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick=()=>
{
    menu.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll=() =>
{
    menu.classList.remove('active');
    search.classList.remove('active');
}

let header=document.querySelector('header');

window.addEventListener('sroll', () => {
    header.classList.toogle('shadow', window.scrollY >0);
});