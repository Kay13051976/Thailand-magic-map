/*
Get access to the header nav list and hamburger icon
 */
const hamburgerIcon = document.querySelector(".hamburger-icon");
const headerNavList = document.querySelector(".header-nav-list");

/* Add eventListener type click to header nav list and hamburger icon */

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  headerNavList.classList.toggle("active");
});
