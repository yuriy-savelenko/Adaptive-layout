//  Бурегр мнею
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let burgerclose = document.querySelector(".burger-menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.add("header__nav--active");
})

burgerclose.addEventListener("click", function () {
  menu.classList.remove("header__nav--active");
})


// Свайпер
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

let tabsBtn = document.querySelectorAll(".tabs-btn");
let tabsItem = document.querySelectorAll(".tabs-item");

tabsBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach((btn) => { btn.classList.remove("tabs-btn--active") });
    e.currentTarget.classList.add("tabs-btn--active");


    tabsItem.forEach((element) => { element.classList.remove("tabs-item--active") });
    document.querySelector(`[data-target="${path}"]`).classList.add("tabs-item--active");

  });
});

// аккордеон

$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  icons: false
});

// форма поиска

const btn_search = document.querySelector(".header__btn_search");
const search = document.querySelector(".search");
const btn_close = document.querySelector(".search-btn--close");

btn_search.addEventListener("click", () => {
  search.classList.add("search--active");
  btn_search.style.outline = "none";
});

btn_close.addEventListener("click", () => {
  search.classList.remove("search--active");
});

btn_search.addEventListener("click", () => {
  btn_search.classList.add("search-hide");
});

btn_close.addEventListener("click", () => {
  btn_search.classList.remove("search-hide");
});


