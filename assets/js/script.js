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

/*Get access to the thailand map page 
 */
const mapClick = document.getElementsByClassName("btn-thailand-map");

/* Hamburger slide in animation*/
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



//Create function  event to work after download home page prevent blinking page

document.addEventListener("DOMContentLoaded", function (event) {
  const thailand_map = document.getElementById("thailand-map")
  if (thailand_map) {
    thailand_map.style.display = "block"
  }

})


/*Home page hero image scroll timeline animation*/

const animatedImageTimeline = new ScrollTimeline({
  scrollOffsets: [{
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


if (animatedImage) {
  animatedImage.animate({
    transform: [
      "perspective(1000px) rotateX(40deg)",
      " perspective(1000px)rotate(10)",
    ],
    opacity: ["0", "5"],
  }, {
    duration: 1,
    timeline: animatedImageTimeline,
  });
}


function showElement(id) {
  const img = document.getElementById(id);
  img.style.opacity = 1;
}

// Thailand map page function

function onClickMap() {
  var value = this.getAttribute("value");
  showElement(value);
}
for (var i = 0; i < mapClick.length; i++) {
  mapClick[i].addEventListener("click", onClickMap, false);
}