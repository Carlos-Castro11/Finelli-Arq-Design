const imgOps = document.querySelectorAll(".project-gallery-ops img");
const imgOn = document.querySelector(".project-gallery-on img");
imgOps.forEach((e) => {
  e.addEventListener("click", function () {
    const atributo = e.getAttribute("src");
    const atributoPrimario = imgOps[0].getAttribute("src");
    imgOn.setAttribute("src", atributo);
    // imgOps[0].setAttribute("src", atributo);
    // e.setAttribute("src", atributoPrimario);
  });
});

// FOOTER SCROLL
const footer = document.querySelector(".footer-contents");
const footerBottom = document.querySelector(".footer-direitos");
const footerHeight = window.innerHeight * 0.9;

function footerAnimation() {
  const footerTop = footer.getBoundingClientRect().top;
  const isFooterVisible = footerTop - footerHeight < 0;
  const isFooterInvisible = footerTop - footerHeight > 120;
  if (isFooterVisible) footer.classList.add("animate");
  if (isFooterInvisible) footer.classList.remove("animate");
}

function footerBottomAnimation() {
  const footerTop = footerBottom.getBoundingClientRect().top;
  const isFooterVisible = footerTop - footerHeight < 0;
  const isFooterInvisible = footerTop - footerHeight > 120;
  if (isFooterVisible) footerBottom.classList.add("animate");
  if (isFooterInvisible) footerBottom.classList.remove("animate");
}

window.addEventListener("scroll", footerAnimation);
window.addEventListener("scroll", footerBottomAnimation);

// MOBILE MENU
const button_mobile = document.querySelector(".nav_mobile");
const menu_mobile = document.querySelector(".menu");
const menu_items = document.querySelectorAll(".menu_item");
const page = document.querySelector("#main");
let menuOpen = false;

function showMenuMobile() {
  if (!menuOpen) {
    menu_mobile.classList.add("show_mobile");
    button_mobile.classList.add("animation");
    menuOpen = true;
  } else {
    menu_mobile.classList.remove("show_mobile");
    button_mobile.classList.remove("animation");
    menuOpen = false;
  }
}

function removeMenuMobile() {
  menu_mobile.classList.remove("show_mobile");
  button_mobile.classList.remove("animation");
  menuOpen = false;
}

menu_items.forEach((item) => {
  item.addEventListener("click", removeMenuMobile);
});

button_mobile.addEventListener("click", showMenuMobile);
page.addEventListener("click", removeMenuMobile);
