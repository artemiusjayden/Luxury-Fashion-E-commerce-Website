const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

let a = 0;

plus.addEventListener("click", () => {
    a++;
    num.innerText = a;
});

minus.addEventListener("click", () => { 
    if (a >= 1) {
        a--;
        num.innerText = a;
    }
});

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

const detailsToggle = document.querySelector('.details-toggle');
    detailsToggle.addEventListener('click', function() {
    this.parentNode.classList.toggle('active');
  });

const sizeToggle = document.querySelector('.size-toggle');
    sizeToggle.addEventListener('click', function() {
    this.parentNode.classList.toggle('active');
  });

const careToggle = document.querySelector('.care-toggle');
    careToggle.addEventListener('click', function() {
    this.parentNode.classList.toggle('active');
  });

const sustToggle = document.querySelector('.sust-toggle');
    sustToggle.addEventListener('click', function() {
    this.parentNode.classList.toggle('active');
  });



document.querySelectorAll('.size-dropdown').forEach(function(dropdown) {
const toggleButton = dropdown.querySelector('.size-dropdown-toggle');
toggleButton.addEventListener('click', function() {
    dropdown.classList.toggle('active');
});
    
dropdown.querySelectorAll('.size-dropdown-content li').forEach(function(item) {
    item.addEventListener('click', function() {
        toggleButton.textContent = this.textContent;
            dropdown.classList.remove('active');
        });
    });
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
  } else {
    console.error("One or more cart overlay elements not found. Check your HTML element class names.");
  }
});
