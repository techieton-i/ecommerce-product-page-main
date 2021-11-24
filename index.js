const prdAmt = document.querySelector('.prd-amt');
const nav = document.querySelector('.nav');
const burger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.menu-close');
const cartbtn = document.querySelector('.cart');
const cart = document.querySelector('.cart_list');
const addItems = document.querySelector('.plus');
const removeItems = document.querySelector('.minus');



burger.addEventListener('click', function () {
    nav.classList.add('open');
});

closeBtn.addEventListener('click', function () {
    nav.classList.remove('open');
});

cartbtn.addEventListener('click', function () {
    cart.classList.toggle('open');
});

prdAmt.textContent = 0;

