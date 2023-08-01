import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

/*
*Get access to the header nav list and hamburger 
* Add eventListener type click to header nav list and hamburger
*Add eventListener type click to header nav link to remove
class active (to close nav menu by click on each link)

 */
const hamburger = document.querySelector(".hamburger");
const headerNavLists = document.querySelector(".header-nav-lists");
/*
 *Add animation to home page hero image 
*Get access to the home page hero image
 */
const animatedImage = document.querySelector(".main-thailand-map-hero-image");




hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headerNavLists.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerNavLists.classList.remove("active");
  })
);




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


