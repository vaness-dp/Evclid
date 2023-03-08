// burger

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
  });
});

// search

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener("click", (e) => {
    document.getElementById('search-form').classList.remove('display-none')

    setTimeout(() => {
      document.getElementById('search-form').classList.add('search-active')
    }, 100)
  })


  document.getElementById('search-form__btn-closed').addEventListener("click", (e) => {
    document.getElementById('search-form').classList.remove('search-active')

    setTimeout(() => {
      document.getElementById('search-form').classList.add('display-none')
    }, 100)
  })

  document.getElementById('search-form').addEventListener("submit", (e) => {
    e.preventDefault()
  })
})

// swiper

const swiper = new Swiper(".swiper-container", {
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  a11y: {
    firstSlideMessage: "Это первый слайд",
    lastSlideMessage: "Это последний слайд",
    prevSlideMessage: "Предыдущий слайд",
    nextSlideMessage: "Следующий слайд",
    paginationBulletMessage: "Перейти к слайду {{index}}",
  },
});

// tabs

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn_active')
    });
    e.currentTarget.classList.add('tabs-nav__btn_active');

    tabsItem.forEach(function (element) {
      element.classList.remove('tabs-item_active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item_active');
  });
});

const accordionBoxes = document.querySelectorAll(".accordion-faq__item");

accordionBoxes.forEach((el) => {
  el.addEventListener("click", (e) => {
    const thisElement = e.currentTarget;
    const accordionBtn = thisElement.querySelector(".accordion-faq__btn");
    const accordionContent = thisElement.querySelector(
      ".accordion-faq__content"
    );

    thisElement.classList.toggle("accordion-active");

    if (thisElement.classList.contains("accordion-active")) {
      accordionBtn.setAttribute("aria-expanded", true);
      accordionContent.setAttribute("aria-hidden", false);
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
    } else {
      accordionBtn.setAttribute("aria-expanded", false);
      accordionContent.setAttribute("aria-hidden", true);
      accordionContent.style.maxHeight = null;
    }
  });
});

// accordion

new Accordion(".accordion-container");

