const menuIcon = document.querySelector('.menu-icon');
const offScreenMenu = document.querySelector('.off-screen-menu');
const offScreenMenuBackground = document.querySelector('.off-screen-menu-background');
const xIcon = document.querySelector('.x-icon');

menuIcon.addEventListener('click', () => {
    offScreenMenu.classList.toggle('open');
    offScreenMenuBackground.classList.toggle('open');
    xIcon.classList.toggle('open');
});

xIcon.addEventListener('click', () => {
    offScreenMenu.classList.remove('open');
    offScreenMenuBackground.classList.remove('open');
    xIcon.classList.remove('open');
});

offScreenMenuBackground.addEventListener('click', () => {
    offScreenMenu.classList.remove('open');
    offScreenMenuBackground.classList.remove('open');
    xIcon.classList.remove('open');
});

const searchIcon = document.querySelector('.search-icon');
const offScreenSearch = document.querySelector('.off-screen-search');
const offScreenSearchBackground = document.querySelector('.off-screen-search-background');

searchIcon.addEventListener('click', () => {
    offScreenSearch.classList.toggle('open');
    offScreenSearchBackground.classList.toggle('open');
    xIcon.classList.toggle('open');
});

xIcon.addEventListener('click', () => {
    offScreenSearch.classList.remove('open');
    offScreenSearchBackground.classList.remove('open');
    xIcon.classList.remove('open');
});

offScreenSearchBackground.addEventListener('click', () => {
    offScreenSearch.classList.remove('open');
    offScreenSearchBackground.classList.remove('open');
    xIcon.classList.remove('open');
});

const cartIcon = document.querySelector('.cart-icon');
const offScreenCart = document.querySelector('.off-screen-cart');
const offScreenCartBackground = document.querySelector('.off-screen-cart-background');
const xCartIcon = document.querySelector('.xcart-icon');

cartIcon.addEventListener('click', () => {
    offScreenCart.classList.toggle('open');
    offScreenCartBackground.classList.toggle('open');
    xCartIcon.classList.toggle('open');
});

xCartIcon.addEventListener('click', () => {
    offScreenCart.classList.remove('open');
    offScreenCartBackground.classList.remove('open');
    xCartIcon.classList.remove('open');
});

offScreenCartBackground.addEventListener('click', () => {
    offScreenCart.classList.remove('open');
    offScreenCartBackground.classList.remove('open');
    xCartIcon.classList.remove('open');
});


document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtn = document.querySelector('#button-container button[type="submit"]');
  // Query the cart overlay elements
  const offScreenCart = document.querySelector('.off-screen-cart');
  const offScreenCartBackground = document.querySelector('.off-screen-cart-background');
  const xCartIcon = document.querySelector('.xcart-icon');

  if(addToCartBtn && offScreenCart && offScreenCartBackground && xCartIcon) {
    addToCartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // Toggle the cart overlay just like clicking the cart icon
      offScreenCart.classList.toggle('open');
      offScreenCartBackground.classList.toggle('open');
      xCartIcon.classList.toggle('open');
    });
  } else {
    console.error("One or more cart overlay elements not found.");
  }
});