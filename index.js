const prdAmt = document.querySelector('.prd-amt');
const nav = document.querySelector('.nav');
const burger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.menu-close');
const cartbtn = document.querySelector('.cart');
const cart = document.querySelector('.cart_list');
const addItems = document.querySelector('.plus');
const removeItems = document.querySelector('.minus');
const addToCart = document.querySelector('.cart-btn');
const cartProducts = document.querySelector('.cart-products');
const checkout_btn = document.querySelector('.cart-checkout_btn');

let currentAmt = 0;


burger.addEventListener('click', function () {
    nav.classList.add('open');
});

closeBtn.addEventListener('click', function () {
    nav.classList.remove('open');
});

cartbtn.addEventListener('click', function () {
    cart.classList.toggle('open');
});
prdAmt.textContent = currentAmt;




addItems.addEventListener('click', () => {
    currentAmt += 1;
    prdAmt.textContent = currentAmt;
});


removeItems.addEventListener('click', () => {
    if (currentAmt <= 0) return;
    currentAmt -= 1;
    prdAmt.textContent = currentAmt;
});

document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    console.log(e);
    if (e.key === 'Escape' && cart.classList.contains('open')) {
        cart.classList.remove('open');
    }
});

const arr = [];

addToCart.addEventListener('click', function (e) {
    empty = cartProducts.textContent === '';
    console.log(empty);
    // arr.push(e);


    const prodHtml = ` <div class="product-in-cart">
          <div class="product-cart-thumbnail"></div>

          <div class="product-cart-info">
            <p class="">Autumn Limited Edition Sneakers</p>
            <p class="product-cart-price">$125.00 * ${currentAmt} <span> $375.00</span></p>
          </div>

          <div class="product-delete"><img src="./images/icon-delete.svg" alt=""></div>

        </div>`;

    // const checkoutBtn = `<button class="cart-checkout_btn"> Checkout</button>`;

    // arr.forEach(movs => {
    // cartProducts.insertAdjacentHTML("beforeend", prodHtml);
    // });
    if (!cartProducts.textContent === '') {
        cartProducts.insertAdjacentHTML("beforeend", prodHtml);
    } else {
        cartProducts.innerHTML = '';
        cartProducts.insertAdjacentHTML("beforeend", prodHtml);
    }
    checkout_btn.classList.add('open');
    currentAmt = 0;
    prdAmt.textContent = currentAmt;

});
