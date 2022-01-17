// Main JavaScript for Portfolio.

// Select DOM Elements.
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav= document.querySelector('.menu-Nav');
const menuBrand = document.querySelector('.menu-Brand');
const navItems = document.querySelectorAll('.nav-Item');

// Set Initial State of the Menu
let showMenu = false;
//let move = false;

toggleMenu = () =>{
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        // Set Menu State.
        showMenu = false;
    }
}
menuBtn.addEventListener("click", toggleMenu);

// PROJECTS ON HOVER SHOW DESCRIPTIONS