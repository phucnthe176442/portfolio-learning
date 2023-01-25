// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const menuLinkButton = document.querySelector(".navbar__links");

menuLinkButton.addEventListener('click', ()=>{
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
});

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
});

const aboutButton = document.querySelector(".about__btn");

aboutButton.addEventListener('click', ()=>{  
    document.getElementById("about__mktID").style.display = "inline-flex";
});