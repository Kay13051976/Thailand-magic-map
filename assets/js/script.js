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

const animatedImage = document.querySelector(".main-thailand-map-hero-image");

const animatedImageTimeline = new ScrollTimeline({
  scrollOffsets: [
    { target: animatedImage, edge: "end", threshold: "4" },
    { target: animatedImage, edge: "start", threshold: "4" },
  ],
});

animatedImage.animate(
  {
    transform: [
      "perspective(1000px) rotateX(30deg",
      " perspective(1000px)rotate(0)",
    ],
    opacity: ["1", "1"],
  },
  {
    duration: 1,
    timeline: animatedImageTimeline,
  }
);
/*Get access to the carousel container */
const containerImg = document.getElementById("container-img");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

const img = document.querySelectorAll("#imgs img");

let idx = 0;
let interval = setInterval(slide, 2000);

function slide() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  containerImage.style.transform = `translateX(${-idx * 550}px)`;
}
leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
}
