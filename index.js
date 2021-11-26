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
    if (e.key === 'Escape' && cart.classList.contains('open')) {
        cart.classList.remove('open');
    }
});

const prod = [];

const prodmov = function (arr) {


    if (currentAmt === 0) return;

    cartProducts.innerHTML = ' ';


    arr.forEach(movs => {

        const prodHtml = ` <div class="product-in-cart">
                  <div class="product-cart-thumbnail prod-no_${movs}"></div>
        
                  <div class="product-cart-info">
                    <p class="">Autumn Limited Edition Sneakers</p>
                    <p class="product-cart-price" onclick = "console.log('delete')">$125.00 * ${movs} <span> $375.00</span></p>
                  </div>
        
                  <div class="product-delete"><img src="./images/icon-delete.svg" alt=""></div>
        
                </div>`;


        cartProducts.insertAdjacentHTML("beforeend", prodHtml);
    });

    checkout_btn.classList.add('open');

};


cartProducts.addEventListener('click', function (e) {
    e.preventDefault();
    const deleteBtn = e.target.closest('.product-delete');
    const item = e.target.closest('.product-in-cart');
    const prdcart = item.closest('.cart-products').querySelectorAll('.product-in-cart');

    if (!deleteBtn) return;

    item.style.display = 'none';
    if (cartProducts.textContent === ' ') {
        console.log(cartProducts.textContent);
        prdcart.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
        checkout_btn.classList.remove('open');
    }





    // console.log(prdcart);
    // console.log(item);
    // console.log(deleteBtn);
    console.log(cartProducts.innerHTML);
});

addToCart.addEventListener('click', function () {


    currentAmt !== 0 && prod.push(currentAmt);
    console.log(prod);

    prodmov(prod);

    currentAmt = 0;
    prdAmt.textContent = currentAmt;

});
