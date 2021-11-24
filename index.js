const prdAmt = document.querySelector('.prd-amt');
const nav = document.querySelector('.nav');
const burger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.menu-close');



burger.addEventListener('click', function () {
    nav.classList.add('open');
});

closeBtn.addEventListener('click', function () {
    nav.classList.remove('open');
});

prdAmt.textContent = 0;

