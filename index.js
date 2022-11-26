// carousel
const gallery = document.querySelectorAll(".gallery img");
const galleryContainer = document.querySelector(".galleryContainer");

function imgGalleryFunction1() {
  gallery[1].classList.add("disable");
  gallery[2].classList.add("disable");
  gallery[0].classList.remove("disable");
}
function imgGalleryFunction2() {
  gallery[2].classList.add("disable");
  gallery[0].classList.add("disable");
  gallery[1].classList.remove("disable");
}
function imgGalleryFunction3() {
  gallery[1].classList.add("disable");
  gallery[0].classList.add("disable");
  gallery[2].classList.remove("disable");
}

// CAROUSSEL SCROLL
const section = document.querySelector(".js_scroll");
const windowHalf3 = window.innerHeight * 0.9;

function itemAnimation() {
  const itemTop = section.getBoundingClientRect().top;
  const isItemVisible = itemTop - windowHalf3 < 0;
  const isItemInvisible = itemTop - windowHalf3 > 50;
  if (isItemVisible) section.classList.add("animate");
  if (isItemInvisible) section.classList.remove("animate");
}

itemAnimation();
window.addEventListener("scroll", itemAnimation);

// PROJECTS SCROLL
const windowHalf = window.innerHeight * 0.7;
const projects = document.querySelector(".left");
const windowHalf2 = window.innerHeight * 0.93;

function projectAnimation() {
  const projectTop = projects.getBoundingClientRect().top;
  const isProjectVisible = projectTop - windowHalf2 < 220;
  const isProjectInvisible = projectTop - windowHalf2 > 220;
  if (isProjectVisible) projects.classList.add("animate");
  if (isProjectInvisible) projects.classList.remove("animate");
}

projectAnimation();
window.addEventListener("scroll", projectAnimation);

const projects2 = document.querySelector(".right");

function project2Animation() {
  const project2Top = projects2.getBoundingClientRect().top;
  const isProject2Visible = project2Top - windowHalf2 < 220;
  const isProject2Invisible = project2Top - windowHalf2 > 220;
  if (isProject2Visible) projects2.classList.add("animate");
  if (isProject2Invisible) projects2.classList.remove("animate");
}

project2Animation();
window.addEventListener("scroll", project2Animation);

// SERVICES SCROLL
const col = document.querySelector(".services_col");

function colAnimation() {
  const colTop = col.getBoundingClientRect().top;
  const isColVisible = colTop - windowHalf < 0;
  const isColInvisible = colTop - windowHalf > 220;
  if (isColVisible) col.classList.add("animate");
  if (isColInvisible) col.classList.remove("animate");
}

window.addEventListener("scroll", colAnimation);

const col2 = document.querySelector(".services_col2");

function col2Animation() {
  const col2Top = col2.getBoundingClientRect().top;
  const isCol2Visible = col2Top - windowHalf < 0;
  const isCol2Invisible = col2Top - windowHalf > 220;
  if (isCol2Visible) col2.classList.add("animate");
  if (isCol2Invisible) col2.classList.remove("animate");
}

window.addEventListener("scroll", col2Animation);

const col3 = document.querySelector(".services_col3");

function col3Animation() {
  const col3Top = col3.getBoundingClientRect().top;
  const isColVisible = col3Top - windowHalf < 0;
  const isColInvisible = col3Top - windowHalf > 220;
  if (isColVisible) col3.classList.add("animate");
  if (isColInvisible) col3.classList.remove("animate");
}

window.addEventListener("scroll", col3Animation);

// ABOUT SCROLL
const about_img = document.querySelector(".img_about");

function imgAboutAnimation() {
  const aboutImgTop = about_img.getBoundingClientRect().top;
  const isAboutImgVisible = aboutImgTop - windowHalf < 0;
  const isAboutImgInvisible = aboutImgTop - windowHalf > 220;
  if (isAboutImgVisible) about_img.classList.add("animate");
  if (isAboutImgInvisible) about_img.classList.remove("animate");
}

window.addEventListener("scroll", imgAboutAnimation);

const about_contents = document.querySelector(".about-contents");

function contentsAboutAnimation() {
  const aboutContentsTop = about_contents.getBoundingClientRect().top;
  const isAboutContentsVisible = aboutContentsTop - windowHalf < 0;
  const isAboutContentsInvisible = aboutContentsTop - windowHalf > 220;
  if (isAboutContentsVisible) about_contents.classList.add("animate");
  if (isAboutContentsInvisible) about_contents.classList.remove("animate");
}

window.addEventListener("scroll", contentsAboutAnimation);

// FOOTER SCROLL
const footer = document.querySelector(".footer-contents");
const footerBottom = document.querySelector(".footer-direitos");
const footerHeight = window.innerHeight * 0.9;

function footerAnimation() {
  const footerTop = footer.getBoundingClientRect().top;
  const isFooterVisible = footerTop - footerHeight < 0;
  const isFooterInvisible = footerTop - footerHeight > 220;
  if (isFooterVisible) footer.classList.add("animate");
  if (isFooterInvisible) footer.classList.remove("animate");
}

function footerBottomAnimation() {
  const footerTop = footerBottom.getBoundingClientRect().top;
  const isFooterVisible = footerTop - footerHeight < 0;
  const isFooterInvisible = footerTop - footerHeight > 220;
  if (isFooterVisible) footerBottom.classList.add("animate");
  if (isFooterInvisible) footerBottom.classList.remove("animate");
}

window.addEventListener("scroll", footerAnimation);
window.addEventListener("scroll", footerBottomAnimation);

// HEADER SHADOW
let handleShow = false;
const header = document.querySelector("#header");

const transitionNavbar = () => {
  if (window.scrollY > 100) {
    handleShow = true;
    header.classList.add("shadow");
  } else {
    handleShow = false;
    header.classList.remove("shadow");
  }
};

window.addEventListener("scroll", transitionNavbar);

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
