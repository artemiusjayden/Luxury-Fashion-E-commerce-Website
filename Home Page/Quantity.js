
const plusCart = document.querySelector(".plusCart");
const minusCart = document.querySelector(".minusCart");
const numCart = document.querySelector(".numCart");

let b = 1;

plusCart.addEventListener("click", () => {
    b++;
    numCart.innerText = b;
});

minusCart.addEventListener("click", () => { 
    if (b >= 1) {
        b--;
        numCart.innerText = b;
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtn = document.querySelector('#button-container button[type="submit"]');
  const buyNowBtn = document.querySelector('#button-container button[type="reset"]');
  const offScreenCart = document.querySelector('.off-screen-cart');
  const offScreenCartBackground = document.querySelector('.off-screen-cart-background');
  const xCartIcon = document.querySelector('.xcart-icon');

  if (addToCartBtn && buyNowBtn && offScreenCart && offScreenCartBackground && xCartIcon) {
    const openCartOverlay = (e) => {
      e.preventDefault();
      offScreenCart.classList.add('open');
      offScreenCartBackground.classList.add('open');
      xCartIcon.classList.add('open');
    };

    addToCartBtn.addEventListener("click", openCartOverlay);
    buyNowBtn.addEventListener("click", openCartOverlay);
  }
});
