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
