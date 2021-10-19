const ham = document.querySelector('.header .navbar .nav-list .ham');
const mobile = document.querySelector('.header .navbar .nav-list ul');
const header = document.querySelector('.header .container');

ham.addEventListener('click',()=>{
    ham.classList.toggle('active');
    mobile.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    
});