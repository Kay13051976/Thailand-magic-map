/*
Get access to the header nav list and hamburger 
 */
const hamburger = document.querySelector(".hamburger");
const headerNavLists = document.querySelector(".header-nav-lists");

/* Add eventListener type click to header nav list and hamburger  */
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headerNavLists.classList.toggle("active");
});

/* Add eventListener type click to header nav link to remove
class active (to close nav menu by click on each link)*/
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerNavLists.classList.remove("active");
  })
);
