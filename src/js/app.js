import Swiper, { Navigation, Pagination } from "swiper";
import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";
// import { testWebP } from "./modules/functions.js";

// import "./modules/slideToggle.js";
// import "./modules/spoilers.js";

// Анимация для спойлеров
let fadeOut = (target, duration = 500) => {
  target.style.transitionProperty = 'opacity';
  target.style.transitionDuration = duration + 'ms';
  target.style.opacity = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('opacity');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    //alert("!");
  }, duration);
}

let fadeIn = (target, duration = 500) => {
  target.style.opacity = 0;
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none')
    display = 'block';

  target.style.display = display;
  target.style.transitionProperty = "opacity";
  target.style.transitionDuration = duration + 'ms';
  window.setTimeout(() => {
    target.style.opacity = 1;
    window.setTimeout(() => {
      target.style.removeProperty('opacity');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  }, 1);
}

var fadeToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return fadeIn(target, duration);
  } else {
    return fadeOut(target, duration);
  }
}

let slideUp = (target, duration = 500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    //alert("!");
  }, duration);
}

let slideDown = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none')
    display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

var slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
}

// Spoilers
let sectionSpoilers = document.querySelectorAll('.spoiler');
let sectionSpoilersBody = document.querySelectorAll('.spoiler-body');
for (let index = 0; index < sectionSpoilers.length; index++) {
  const sectionSpoiler = sectionSpoilers[index];
  const sectionSpoilerBody = sectionSpoilersBody[index];
  sectionSpoiler.addEventListener('click', function () {
    sectionSpoilerBody.classList.toggle('active');
    sectionSpoiler.classList.toggle('active');
    slideToggle(sectionSpoilerBody);
  })
}

// testWebP();

const mainSlider = new Swiper('.slider-main__body', {
  modules: [Navigation, Pagination],
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 32,
  watchOverflow: true,
  speed: 400,
  loop: true,
  loopAdditionalSlides: 5,
  preloadImages: false,
  parallax: true,
  pagination: {
    el: '.controls-slider-main__dots',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider-main .slider-arrow_next',
    prevEl: '.slider-main .slider-arrow_prev',
  }
});

const roomsSlider = new Swiper('.slider-rooms__body', {
  modules: [Navigation, Pagination],
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 400,
  preloadImages: false,
  pagination: {
    el: '.slider-rooms__dots',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider-rooms .slider-arrow_next',
    prevEl: '.slider-rooms .slider-arrow_prev',
  }
});

const tipsSlider = new Swiper('.slider-tips__body', {
  modules: [Navigation, Pagination],
  observer: true,
  observeParents: true,
  slidesPerView: 3,
  // slidesPerGroup: 3,
  spaceBetween: 33,
  speed: 400,
  loop: true,
  pagination: {
    el: '.slider-tips__dots',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider-tips .slider-arrow_next',
    prevEl: '.slider-tips .slider-arrow_prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
  }
});

const menuLinksSubmenu = document.querySelectorAll('.menu__link_submenu');
const menuBlocks = document.querySelectorAll('.menu__sub-list');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  for (let menuLinkSubmenu of menuLinksSubmenu) {
    let menuLinkValue = `All ${menuLinkSubmenu.innerHTML.toLowerCase()}`;
    menuLinkSubmenu.addEventListener('click', function (e) {
      let linkValue = menuLinkSubmenu.getAttribute('href');
      for (let menuBlock of menuBlocks) {
        menuBlock.remove.lastElementChild;
        if (!menuBlock.lastElementChild.classList.contains('menu__sub-item_all')) {
          menuBlock.insertAdjacentHTML('beforeend',
            `<li class="menu__sub-item menu__sub-item_all"><a href="${linkValue}" class="menu__sub-link">${menuLinkValue}</a></li>`)
        } else if (menuBlock.lastElementChild.classList.contains('menu__sub-item_all')) {
          menuBlock.removeChild(menuBlock.lastElementChild);
          menuBlock.insertAdjacentHTML('beforeend',
            `<li class="menu__sub-item menu__sub-item_all"><a href="${linkValue}" class="menu__sub-link">${menuLinkValue}</a></li>`)
        }
      }
      e.preventDefault();
    });
  }
}

document.addEventListener("click", documentActions);

const initialCartState = () => {
  if (localStorage.getItem('products') !== null) {
    document.querySelector('.cart-list').innerHTML = localStorage.getItem('products');
    // cartQuantity.innerHTML = ++cartQuantity.innerHTML;
    // console.log(localStorage.getItem('products'))
  }

  const cart = document.querySelector('.cart-header');
  const cartList = document.querySelector('.cart-list');
  const cartIcon = cart.querySelector('.cart-header__icon');
  const cartListQuantity = cart.querySelectorAll('.cart-list__quantity span');

  let sumOfProducts = 0;

  for (let i = 0; i < cartListQuantity.length; i++) {
    let cartQuantityItem = cartListQuantity[i];
    sumOfProducts += +cartQuantityItem.innerHTML;
  }

  if (cartList.children.length > 0) {
    cartIcon.insertAdjacentHTML('beforeend', `<span>${sumOfProducts}</span>`);
  }
};

initialCartState();

const updateCartStorage = () => {
  let cartList = document.querySelector('.cart-list');
  let html = cartList.innerHTML;
  html = html.trim();
  if (html.length) {
    localStorage.setItem('products', html);
  } else {
    localStorage.removeItem('products');
  }
  // console.log(html);
};

const initialFavouritesState = () => {
  if (localStorage.getItem('favourites') !== null) {
    document.querySelector('.favourites-list').innerHTML = localStorage.getItem('favourites');
    // cartQuantity.innerHTML = ++cartQuantity.innerHTML;
    // console.log(localStorage.getItem('favourites'))
  }

  const favourites = document.querySelector('.favourites-header');
  const favouritesList = document.querySelector('.favourites-list');
  const favouritesIcon = favourites.querySelector('.favourites-header__icon');

  if (favouritesList.children.length > 0) {
    favouritesIcon.insertAdjacentHTML('beforeend', `<span>${favouritesList.children.length}</span>`);
  }
};

initialFavouritesState();

const updateFavouritesStorage = () => {
  let favouritesList = document.querySelector('.favourites-list');
  let html = favouritesList.innerHTML;
  html = html.trim();
  if (html.length) {
    localStorage.setItem('favourites', html);
  } else {
    localStorage.removeItem('favourites');
  }
  // console.log(html);
};


function documentActions(e) {

  const targetElement = e.target;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    if (targetElement.closest('[data-parent]')) {
      const subMenuId = targetElement.dataset.parent;
      const block = document.querySelector(`[data-submenu="${subMenuId}"]`);
      const activeButton = document.querySelector('.active-link');
      const activeBlock = document.querySelector('.active-block');

      if (activeButton && activeButton !== targetElement) {
        activeButton.classList.remove('active-link');
        activeBlock.classList.remove('active-block');
      }

      targetElement.classList.toggle('active-link');
      block.classList.toggle('active-block');
    }
    if (targetElement.matches('.icon-menu') || !targetElement.closest('.menu__link')) {
      document.querySelector('.active-link') ? document.querySelector('.active-link').classList.remove('active-link') : null;

      document.querySelector('.active-block') ? document.querySelector('.active-block').classList.remove('active-block') : null;
    }
  }
  if (targetElement.closest('.search-form__icon')) {
    document.querySelector('.search-form').classList.toggle('active');
  } else if (!targetElement.closest('.search-form') && document.querySelector('.search-form.active')) {
    document.querySelector('.search-form').classList.remove('active');
  }
  if (targetElement.closest('.icon-menu')) {
    document.querySelector('.menu__body').classList.toggle('menu-open');
    document.querySelector('.icon-menu').classList.toggle('menu-open');
    document.documentElement.classList.toggle('lock');
    slideToggle(document.querySelector('.menu__body'));
  }

  if (targetElement.classList.contains('actions-product__button')) {
    if (targetElement.closest('.item-product')) {
      const productId = targetElement.closest('.item-product').dataset.pid;
      addToCart(targetElement, productId);
      e.preventDefault();
      setTimeout(updateCartStorage, 1200);
    } else if (targetElement.closest('.favourites-list__item')) {
      const productId = targetElement.closest('.favourites-list__item').dataset.favouritesPid;
      addToCartFromFavourites(targetElement, productId);
      e.preventDefault();
      setTimeout(updateCartStorage, 1200);
      setTimeout(updateFavouritesStorage, 1200);
    }
    setTimeout(totalPrice, 1200);
  }

  if (targetElement.classList.contains('cart-header__icon') || targetElement.closest('.cart-header__icon')) {
    if (document.querySelector('.cart-list').children.length > 0) {
      document.querySelector('.cart-header').classList.toggle('active');
    }
    e.preventDefault();
  } else if (!targetElement.closest('.cart-header') && !targetElement.classList.contains('actions-product__button')) {
    document.querySelector('.cart-header').classList.remove('active');
  }

  if (targetElement.classList.contains('cart-list__plus')) {
    const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
    const cart = document.querySelector('.cart-header');
    const cartIcon = cart.querySelector('.cart-header__icon');
    const cartQuantity = cartIcon.querySelector('span');
    const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
    // const product = document.querySelector(`[data-pid="${productId}"]`);
    const cartProductPrice = cartProduct.querySelector('.cart-list__price').dataset.price;
    // const productPrice = product.querySelector('.item-product__price').innerHTML;

    cartProduct.querySelector('.cart-list__minus').classList.remove('disabled');

    const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity>span');
    cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
    if (cartProductQuantity.innerHTML == 10) {
      targetElement.classList.add('disabled')
    }

    const cartQuantityValue = ++cartQuantity.innerHTML;
    cartQuantity.innerHTML = cartQuantityValue;


    const priceAsNum = cartProductPrice.match(/\d/g).join('');
    let result = priceAsNum * cartProductQuantity.innerHTML;
    const PriceAsCart = String(result).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.')
    cartProduct.querySelector('.cart-list__price').innerHTML = `Rp ${PriceAsCart}`;

    updateCartStorage();
    totalPrice();
  }

  if (targetElement.classList.contains('cart-list__minus')) {
    const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
    const cart = document.querySelector('.cart-header');
    const cartIcon = cart.querySelector('.cart-header__icon');
    const cartQuantity = cartIcon.querySelector('span');
    const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
    const product = document.querySelector(`[data-pid="${productId}"]`);
    // const productPrice = product.querySelector('.item-product__price').innerHTML;
    const cartProductPrice = cartProduct.querySelector('.cart-list__price').dataset.price;


    cartProduct.querySelector('.cart-list__plus').classList.remove('disabled');

    const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity>span');
    cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
    if (cartProductQuantity.innerHTML == 1) {
      targetElement.classList.add('disabled')
    }

    const cartQuantityValue = --cartQuantity.innerHTML;
    cartQuantity.innerHTML = cartQuantityValue;

    const priceAsNum = cartProductPrice.match(/\d/g).join('');
    let result = priceAsNum * cartProductQuantity.innerHTML;
    const PriceAsCart = String(result).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.')
    cartProduct.querySelector('.cart-list__price').innerHTML = `Rp ${PriceAsCart}`;

    updateCartStorage();
    totalPrice();
  }


  if (targetElement.classList.contains('cart-list__delete')) {
    const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
    updateCart(targetElement, productId, false);
    updateCartStorage();
    totalPrice();
    e.preventDefault();
  }

  if (targetElement.classList.contains('actions-product__link_like')) {
    const productId = targetElement.closest('.item-product').dataset.pid;
    updateFavourites(targetElement, productId, true);
    updateFavouritesStorage();
    e.preventDefault();
  }

  if (targetElement.classList.contains('favourites-header__icon') || targetElement.closest('.favourites-header__icon')) {
    if (document.querySelector('.favourites-list').children.length > 0) {
      document.querySelector('.favourites-header').classList.toggle('active');
    }
    e.preventDefault();
  } else if (!targetElement.closest('.favourites-header') && !targetElement.classList.contains('actions-product__link_like')) {
    document.querySelector('.favourites-header').classList.remove('active');
  }

  if (targetElement.classList.contains('favourites-list__delete')) {
    const productId = targetElement.closest('.favourites-list__item').dataset.favouritesPid;
    updateFavourites(targetElement, productId, false);
    updateFavouritesStorage();
    e.preventDefault();
  }

  if (targetElement.classList.contains('actions-product__link_share')) {
    let productId = targetElement.closest('.item-product').dataset.pid;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      shareMobile(targetElement, productId);
    } else {
      shareMobile(targetElement, productId);
      // share(targetElement, productId);
    }
    e.preventDefault();
  }

  if (targetElement.classList.contains('products__more')) {
    getProducts(targetElement);
    e.preventDefault();
  }
}

// Проверка на наличие товара в списке желаемых, чтобы выключить кнопку лайка

function favouritesCheck() {
  if (document.querySelector('.favourites-list').children.length > 0) {
    let favouritesList = document.querySelector('.favourites-list');
    let favouritesProducts = favouritesList.querySelectorAll('.favourites-list__item');
    for (let favouritesProduct of favouritesProducts) {
      let favouritesProductId = favouritesProduct.dataset.favouritesPid;
      let itemProduct = document.querySelector(`[data-pid="${favouritesProductId}"]`);
      if (itemProduct) {
        let likeButton = itemProduct.querySelector('.actions-product__link_like');
        likeButton.classList.add('liked');
      }

    }
  }
}
setTimeout(favouritesCheck, 100);

function cartCheck() {
  if (document.querySelector('.cart-list').children.length > 0) {
    let cartList = document.querySelector('.cart-list');
    let cartProducts = cartList.querySelectorAll('.cart-list__item');
    for (let cartProduct of cartProducts) {
      let cartProductId = cartProduct.dataset.cartPid;
      let itemProduct = document.querySelector(`[data-pid="${cartProductId}"]`);
      if (itemProduct) {
        let addToCartButton = itemProduct.querySelector('.actions-product__button');
        addToCartButton.classList.add('hold');
      }
      if (document.querySelector('.favourites-list').children.length > 0 && document.querySelector(`[data-favourites-pid="${cartProductId}"]`)) {
        let itemProductInFavourites = document.querySelector(`[data-favourites-pid="${cartProductId}"]`);
        let likeButtonInFavourites = itemProductInFavourites.querySelector('.actions-product__button');
        likeButtonInFavourites.classList.add('hold');
      }
    }
  }
}
setTimeout(cartCheck, 100);

function totalPrice() {
  let cartPrices = document.querySelectorAll('.cart-list__price')
  let total = 0;
  for (let cartPrice of cartPrices) {
    let cartPriceValue = cartPrice.innerHTML;
    const priceAsNum = cartPriceValue.match(/\d/g).join('');
    total += +priceAsNum;
  }
  const PriceAsCart = String(total).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.')
  document.querySelector('.cart-header__total>span').innerHTML = `Rp ${PriceAsCart}`;
}

totalPrice();

// Load more products

async function getProductsAfterPageLoad() {
  const file = 'json/products.json';
  let response = await fetch(file, {
    method: 'GET'
  });
  if (response.ok) {
    let result = await response.json();
    loadProducts(result);
  }
}

getProductsAfterPageLoad();


async function getProducts(button) {
  if (!button.classList.contains('hold')) {
    button.classList.add('hold');
    const file = 'json/products.json';
    let response = await fetch(file, {
      method: 'GET'
    });
    if (response.ok) {
      let result = await response.json();
      // console.log(result);
      loadProducts(result);
      button.classList.remove('hold');
      setTimeout(favouritesCheck, 1000);
      setTimeout(cartCheck, 1000);
    } else {
      alert('Error');
    }
  }
}

function loadProducts(data) {
  const productsItems = document.querySelector('.products__items');
  // data.products.forEach(item => {
  // if (productsItems.children.length == 0 || productsItems.children.length % 3 !== 0) {
  // console.log(data.products.length)
  for (let i = 0; i < 4; i++) {
    let item = data.products[productsItems.children.length];

    const productId = item.id;
    const productUrl = item.url;
    const productImage = item.image;
    const productTitle = item.title;
    const productText = item.text;
    const productPrice = item.price;
    const productOldPrice = item.priceOld;
    // const productShareUrl = item.shareUrl;
    // const productLikeUrl = item.likeUrl;
    const productLabels = item.labels;

    let productTemplateStart = `<article data-pid="${productId}" class="products__item item-product">`;
    let productTemplateEnd = `</article>`;

    let productTemplateLabels = '';
    if (productLabels) {
      let productTemplateLabelsStart = `<div class="item-product__labels">`;
      let productTemplateLabelsEnd = `</div>`;
      let productTemplateLabelsContent = '';

      productLabels.forEach(labelItem => {
        productTemplateLabelsContent += `<div class="item-product__label item-product__label_${labelItem.type}">${labelItem.value}</div>`;
      });

      productTemplateLabels += productTemplateLabelsStart;
      productTemplateLabels += productTemplateLabelsContent;
      productTemplateLabels += productTemplateLabelsEnd;
    }

    let productTemplateImage = `
		<a href="${productUrl}" class="item-product__image">
			<img src="img/products/${productImage}" alt="${productTitle}">
		</a>
	`;

    let productTemplateBodyStart = `<div class="item-product__body">`;
    let productTemplateBodyEnd = `</div>`;

    let productTemplateContent = `
		<div class="item-product__content">
			<h3 class="item-product__title">${productTitle}</h3>
			<div class="item-product__text">${productText}</div>
		</div>
	`;

    let productTemplatePrices = '';
    let productTemplatePricesStart = `<div class="item-product__prices">`;
    let productTemplatePricesCurrent = `<div class="item-product__price">Rp ${productPrice}</div>`;
    let productTemplatePricesOld = `<div class="item-product__price item-product__price_old">Rp ${productOldPrice}</div>`;
    let productTemplatePricesEnd = `</div>`;

    productTemplatePrices = productTemplatePricesStart;
    productTemplatePrices += productTemplatePricesCurrent;
    if (productOldPrice) {
      productTemplatePrices += productTemplatePricesOld;
    }
    productTemplatePrices += productTemplatePricesEnd;

    let productTemplateActions = `
		<div class="item-product__actions actions-product">
			<div class="actions-product__body">
				<button class="actions-product__button">Add to cart</button>
				<button class="actions-product__link actions-product__link_share">Share</button>
				<button class="actions-product__link actions-product__link_like">Like</button>
			</div>
		</div>
	`;

    let productTemplateBody = '';
    productTemplateBody += productTemplateBodyStart;
    productTemplateBody += productTemplateContent;
    productTemplateBody += productTemplatePrices;
    productTemplateBody += productTemplateActions;
    productTemplateBody += productTemplateBodyEnd;

    let productTemplate = '';
    productTemplate += productTemplateStart;
    productTemplate += productTemplateLabels;
    productTemplate += productTemplateImage;
    productTemplate += productTemplateBody;
    productTemplate += productTemplateEnd;

    productsItems.insertAdjacentHTML('beforeend', productTemplate);
    console.log(productsItems.children.length)
  }
  if (productsItems.children.length == data.products.length) {
    document.querySelector('.products__more').remove();
  }
  // });
}

// Add to cart

function addToCartFromFavourites(productButton, productId) {
  if (!productButton.classList.contains('hold')) {
    productButton.classList.add('hold');
    productButton.classList.add('fly');

    const cart = document.querySelector('.cart-header__icon');
    const product = document.querySelector(`[data-favourites-pid="${productId}"]`);
    const productImage = product.querySelector('.favourites-list__image');

    const productImageFly = productImage.cloneNode(true);

    const productImageFlyWidth = productImage.offsetWidth;
    const productImageFlyHeight = productImage.offsetHeight;
    const productImageFlyLeft = productImage.getBoundingClientRect().left;
    const productImageFlyTop = productImage.getBoundingClientRect().top;

    productImageFly.setAttribute('class', 'flyImage');
    productImageFly.style.cssText =
      `
    left: ${productImageFlyLeft}px;
    top: ${productImageFlyTop}px;
    width: ${productImageFlyWidth}px;
    height: ${productImageFlyHeight}px;
    `;

    document.body.append(productImageFly);

    const cartFlyLeft = cart.getBoundingClientRect().left;
    const cartFlyTop = cart.getBoundingClientRect().top;

    productImageFly.style.cssText =
      `
    left: ${cartFlyLeft}px;
    top: ${cartFlyTop}px;
    width: 0px;
    height: 0px;
    opacity: 0;
    `;

    productImageFly.addEventListener('transitionend', function () {
      if (productButton.classList.contains('fly')) {
        productImageFly.remove();
        updateCart(productButton, productId);
        productButton.classList.remove('fly');

        const favourites = document.querySelector('.favourites-header');
        const favouritesIcon = favourites.querySelector('.favourites-header__icon');
        const favouritesProduct = document.querySelector(`[data-favourites-pid="${productId}"]`);
        const product = document.querySelector(`[data-pid="${productId}"]`);
        const favouritesQuantity = favouritesIcon.querySelector('span');

        if (product) {
          product.querySelector('.actions-product__button').classList.add('hold');
          product.querySelector('.actions-product__link_like').classList.remove('liked');
        }
        favouritesProduct.remove();

        const favouritesQuantityValue = --favouritesQuantity.innerHTML;

        if (favouritesQuantityValue) {
          favouritesQuantity.innerHTML = favouritesQuantityValue;
        } else {
          favouritesQuantity.remove();
          favourites.classList.remove('active')
        }

      }
    });
  }
}

function addToCart(productButton, productId) {
  if (!productButton.classList.contains('hold')) {
    productButton.classList.add('hold');
    productButton.classList.add('fly');

    const cart = document.querySelector('.cart-header__icon');
    const product = document.querySelector(`[data-pid="${productId}"]`);
    const productImage = product.querySelector('.item-product__image');
    const productImageFly = productImage.cloneNode(true);

    const productImageFlyWidth = productImage.offsetWidth;
    const productImageFlyHeight = productImage.offsetHeight;
    const productImageFlyLeft = productImage.getBoundingClientRect().left;
    const productImageFlyTop = productImage.getBoundingClientRect().top;

    productImageFly.setAttribute('class', 'flyImage');
    productImageFly.style.cssText =
      `
    left: ${productImageFlyLeft}px;
    top: ${productImageFlyTop}px;
    width: ${productImageFlyWidth}px;
    height: ${productImageFlyHeight}px;
    `;

    document.body.append(productImageFly);

    const cartFlyLeft = cart.getBoundingClientRect().left;
    const cartFlyTop = cart.getBoundingClientRect().top;

    productImageFly.style.cssText =
      `
    left: ${cartFlyLeft}px;
    top: ${cartFlyTop}px;
    width: 0px;
    height: 0px;
    opacity: 0;
    `;

    productImageFly.addEventListener('transitionend', function () {
      if (productButton.classList.contains('fly')) {
        productImageFly.remove();
        updateCart(productButton, productId);
        productButton.classList.remove('fly');
      }
    });
  }
}

function updateCart(productButton, productId, productAdd = true) {
  const cart = document.querySelector('.cart-header');
  const cartIcon = cart.querySelector('.cart-header__icon');
  const cartQuantity = cartIcon.querySelector('span');
  const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
  const cartList = document.querySelector('.cart-list');
  // const product = document.querySelector(`[data-pid="${productId}"]`);
  // const productPrice = product.querySelector('.item-product__price').innerHTML;
  // const cartProductQuantity = document.querySelector('.cart-list__quantity>span');

  // Add
  if (productAdd) {
    if (cartQuantity) {
      cartQuantity.innerHTML = ++cartQuantity.innerHTML;
    } else {
      cartIcon.insertAdjacentHTML('beforeend', '<span>1</span>');
    }
    if (!cartProduct) {
      if (productButton.closest('.item-product')) {
        const product = document.querySelector(`[data-pid="${productId}"]`);
        const cartProductImage = product.querySelector('.item-product__image').innerHTML;
        const cartProductTitle = product.querySelector('.item-product__title').innerHTML;
        const cartProductPrice = product.querySelector('.item-product__price').innerHTML;
        const cartProductContent = `
        <a href="" class="cart-list__image">${cartProductImage}</a>
        <div class="cart-list__body">
        <a href="" class="cart-list__title">${cartProductTitle}</a>
        <div class="cart-list__quantity-menu">
        <button class="cart-list__minus disabled"></button>
        <div class="cart-list__quantity"><span>1</span></div>
        <button class="cart-list__plus"></button>
        </div>
        <div data-price="${cartProductPrice}" class="cart-list__price">${cartProductPrice}</div>
        <a href="" class="cart-list__delete"></a>
        </div>
        `;
        cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productId}" class="cart-list__item">${cartProductContent}</li>`);

        // } else if (productButton.closest('.item-product')) {

        // }
      } else if (productButton.closest('.favourites-list__item')) {
        const product = document.querySelector(`[data-favourites-pid="${productId}"]`);
        const cartProductImage = product.querySelector('.favourites-list__image').innerHTML;
        const cartProductTitle = product.querySelector('.favourites-list__title').innerHTML;
        const cartProductPrice = product.querySelector('.favourites-list__price').innerHTML;
        const cartProductContent = `
        <a href="" class="cart-list__image">${cartProductImage}</a>
        <div class="cart-list__body">
        <a href="" class="cart-list__title">${cartProductTitle}</a>
        <div class="cart-list__quantity-menu">
        <button class="cart-list__minus disabled"></button>
        <div class="cart-list__quantity"><span>1</span></div>
        <button class="cart-list__plus"></button>
        </div>
        <div data-price="${cartProductPrice}" class="cart-list__price">${cartProductPrice}</div>
        <a href="" class="cart-list__delete"></a>
        </div>
        `;
        cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productId}" class="cart-list__item">${cartProductContent}</li>`);

      }
    } else {
      const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
      cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
    }

    const product = document.querySelector(`[data-pid="${productId}"]`);
    if (product) {
      product.querySelector('.actions-product__button').classList.add('hold');
    }


    if (document.querySelector('.favourites-list').children.length > 0 && document.querySelector(`[data-favourites-pid="${productId}"]`)) {
      const favouritesProduct = document.querySelector(`[data-favourites-pid="${productId}"]`);
      favouritesProduct.querySelector('.actions-product__button').classList.add('hold');
    }
    // For possibility to add more same products
    // productButton.classList.remove('hold');



    // const priceAsNum = productPrice.match(/\d/g).join('');
    // let result = priceAsNum * cartProductQuantity.innerHTML;
    // const PriceAsCart = String(result).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.')
    // cartProduct.querySelector('.cart-list__price').innerHTML = `Rp ${PriceAsCart}`;

  } else {
    const product = document.querySelector(`[data-pid="${productId}"]`);
    if (product) {
      product.querySelector('.actions-product__button').classList.remove('hold');
    }

    if (document.querySelector('.favourites-list').children.length > 0 && document.querySelector(`[data-favourites-pid="${productId}"]`)) {
      let itemProductInFavourites = document.querySelector(`[data-favourites-pid="${productId}"]`);
      itemProductInFavourites.querySelector('.actions-product__button').classList.remove('hold');
    }


    const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity>span');
    cartProduct.remove();
    cartQuantity.innerHTML = cartQuantity.innerHTML - cartProductQuantity.innerHTML;
    console.log(cartQuantity.innerHTML);
    console.log(cartProductQuantity.innerHTML);
    // cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
    // if (!parseInt(cartProductQuantity.innerHTML)) {
    // }

    // const cartQuantityValue = --cartQuantity.innerHTML;

    if (cartQuantity.innerHTML == 0) {
      cartQuantity.remove();
      cart.classList.remove('active')
    }
  }
}

// Add to favourites

function updateFavourites(likeButton, productId, productAdd = true) {
  const favourites = document.querySelector('.favourites-header');
  const favouritesIcon = favourites.querySelector('.favourites-header__icon');
  const favouritesQuantity = favouritesIcon.querySelector('span');
  const favouritesProduct = document.querySelector(`[data-favourites-pid="${productId}"]`);
  const favouritesList = document.querySelector('.favourites-list');

  // Add
  if (productAdd) {

    if (favouritesQuantity) {
      favouritesQuantity.innerHTML = ++favouritesQuantity.innerHTML;
    } else {
      favouritesIcon.insertAdjacentHTML('beforeend', '<span>1</span>');
    }
    if (!favouritesProduct) {
      const product = document.querySelector(`[data-pid="${productId}"]`);
      const favouritesProductImage = product.querySelector('.item-product__image').innerHTML;
      const favouritesProductTitle = product.querySelector('.item-product__title').innerHTML;
      const favouritesProductPrice = product.querySelector('.item-product__price').innerHTML;
      const favouritesProductContent = `
          <a href="" class="favourites-list__image">${favouritesProductImage}</a>
          <div class="favourites-list__body">
            <a href="" class="favourites-list__title">${favouritesProductTitle}</a>
            <div class="favourites-list__prices">
              <div class="favourites-list__price">${favouritesProductPrice}</div>
            </div>
            <div class="favourites-list__buttons">
              <a href="" class="favourites-list__add actions-product__button">Move to cart</a>
              <a href="" class="favourites-list__delete"></a>
            </div>
          </div>
        `;
      favouritesList.insertAdjacentHTML('beforeend', `<li data-favourites-pid="${productId}" class="favourites-list__item">${favouritesProductContent}</li>`);
      likeButton.classList.add('liked');
    }

    if (document.querySelector('.cart-list').children.length > 0 && document.querySelector(`[data-cart-pid="${productId}"]`)) {
      const product = document.querySelector(`[data-favourites-pid="${productId}"]`);
      product.querySelector('.actions-product__button').classList.add('hold');
    }


  } else {
    const product = document.querySelector(`[data-pid="${productId}"]`);
    if (product) {
      product.querySelector('.actions-product__link_like').classList.remove('liked');
    }
    favouritesProduct.remove();

    const favouritesQuantityValue = --favouritesQuantity.innerHTML;

    if (favouritesQuantityValue) {
      favouritesQuantity.innerHTML = favouritesQuantityValue;
    } else {
      favouritesQuantity.remove();
      favourites.classList.remove('active')
    }

  }
}

// Share

function share(shareButton, productId) {
  let shareProduct = document.querySelector(`[data-pid="${productId}"]`)
  let productLink = shareProduct.querySelector('.item-product__image');
  let productLinkContent = productLink.getAttribute('href');
  // console.log(productLinkContent);

  navigator.clipboard.writeText(productLinkContent)
    .then(() => {
      shareButton.classList.add('shared');
      setTimeout(() => {
        shareButton.classList.remove('shared')
      }, 1500);
    })
    .catch(err => {
      alert('error');
    })
}

function shareMobile(shareButton, productId) {
  let shareProduct = document.querySelector(`[data-pid="${productId}"]`)
  let productLink = shareProduct.querySelector('.item-product__image');
  let productLinkContent = productLink.getAttribute('href');
  let sharePopup = document.querySelector('.share-popup');

  let textArea = document.createElement("textarea");
  textArea.value = productLinkContent;
  textArea.style.position = "fixed";  //avoid scrolling to bottom
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    let successful = document.execCommand('copy');
    sharePopup.classList.add('active');
    setTimeout(() => {
      sharePopup.classList.remove('active')
    }, 1500);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

// Header scroll
const headerEl = document.querySelector('.header');

const callback = function (entries, observer) {
  if (entries[0].isIntersecting) {
    headerEl.classList.remove('scroll');
  } else {
    headerEl.classList.add('scroll');
  }
};

const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerEl);


// Furniture gallery parallax

const furniture = document.querySelector('.furniture__body');
if (furniture && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  const furnitureItems = document.querySelector('.furniture__items');
  const furnitureColumn = document.querySelectorAll('.furniture__column');

  const speed = furniture.dataset.speed;

  let positionX = 0;
  let coordXpercent = 0;

  function setMouseGalleryStyle() {
    let furnitureItemsWidth = 0;

    furnitureColumn.forEach(item => {
      furnitureItemsWidth += item.offsetWidth;
    });

    const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
    const distX = Math.floor(coordXpercent - positionX);

    positionX = positionX + (distX * speed);
    let position = furnitureDifferent / 200 * positionX;

    furnitureItems.style.cssText = `transform: translate3d(${-position}px,0,0);`;

    if (Math.abs(distX) > 0) {
      requestAnimationFrame(setMouseGalleryStyle);
    } else {
      furniture.classList.remove('init');
    }
  }
  furniture.addEventListener("mousemove", function (e) {

    const furnitureWidth = furniture.offsetWidth;

    // 0 as center
    const coordX = e.pageX - furnitureWidth / 2;

    // get percents
    coordXpercent = coordX / furnitureWidth * 200;

    if (!furniture.classList.contains('init')) {
      requestAnimationFrame(setMouseGalleryStyle);
      furniture.classList.add('init')
    }
  })
}