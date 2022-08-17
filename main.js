'use strick';/* variables for navbar menu toggle */
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

/* Variables for navbar search toggle */
const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navBarSearchBtn = document.querySelector('.navbar-search-btn');

/* navbar menu toggle function */
function navIsActive() {
    header.classList.toggle('active');
    nav.classList.toggle('active');
    navbarMenuBtn.classList.toggle('active');
}
navbarMenuBtn.addEventListener('click', navIsActive);

/* Navbar search toggle function */
const searchBarIsActive = () => navbarForm.classList.toggle('active');

navBarSearchBtn.addEventListener('clicl', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);