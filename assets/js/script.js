import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

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
/*Add animation to home page hero image */
const animatedImage = document.querySelector(".main-thailand-map-hero-image");

const animatedImageTimeline = new ScrollTimeline({
  scrollOffsets: [
    {
      target: animatedImage,
      edge: "end",
      threshold: "1",
    },
    {
      target: animatedImage,
      edge: "start",
      threshold: "1",
    },
  ],
});

animatedImage.animate(
  {
    transform: [
      "perspective(1000px) rotateX(40deg)",
      " perspective(1000px)rotate(10)",
    ],
    opacity: ["0", "5"],
  },
  {
    duration: 1,
    timeline: animatedImageTimeline,
  }
);

/*Thailand map page  */
const revealMap = document.querySelector(".thailand-map-page-main-col2");

const hiddenMap = document.querySelector(
  ".thailand-map-page-main-col1.thailand-map-page-main-col3"
);
revealMap.addEventListener("click", getMap);

function getMap() {
  console.log(hiddenMap.value);
}

// function revealMap() {
//   if (hiddenMap.classList.contains(".thailand-map-page-main-col2")) {
//     hiddenMap.classList.remove(".thailand-map-page-main-col2");
//   } else {
//     hiddenMap.classList.add(".thailand-map-page-main-col2");
//   }
// }

// revealMap.addEventListener("click", revealMap);
