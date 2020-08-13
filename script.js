const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const cross = document.querySelector('.cross');


burger.addEventListener('click', () => {    
    nav.classList.toggle('nav-appear');
})

cross.addEventListener('click', () => {
    nav.classList.remove('nav-appear');
})