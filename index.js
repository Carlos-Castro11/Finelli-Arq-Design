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

// projects scroll
const windowHalf = window.innerHeight * 0.7;
const projects = document.querySelector(".left");

function projectAnimation() {
  const projectTop = projects.getBoundingClientRect().top;
  const isProjectVisible = projectTop - windowHalf < 0;
  const isProjectInvisible = projectTop - windowHalf > 220;
  if (isProjectVisible) projects.classList.add("animate");
  if (isProjectInvisible) projects.classList.remove("animate");
}

window.addEventListener("scroll", projectAnimation);

const projects2 = document.querySelector(".right");

function project2Animation() {
  const project2Top = projects2.getBoundingClientRect().top;
  const isProject2Visible = project2Top - windowHalf < 0;
  const isProject2Invisible = project2Top - windowHalf > 220;
  if (isProject2Visible) projects2.classList.add("animate");
  if (isProject2Invisible) projects2.classList.remove("animate");
}

window.addEventListener("scroll", project2Animation);

// services scroll
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
