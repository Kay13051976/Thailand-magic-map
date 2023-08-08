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



//Create function  event to work after download home page prevent flickering page

document.addEventListener("DOMContentLoaded", function (event) {
  const thailand_map = document.getElementById("thailand-map")
  if (thailand_map) {
    thailand_map.style.display = "block"
  }


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


});


//thailand map page function to display Thailand part using id

function showElement(id) {
  const img = document.getElementById(id);
  img.style.opacity = 1;
}
/*sample start*/
// function hideElement(id) {
//   const img = document.getElementById(id);
//   img.style.opacity = 0;
// }
/*sample end*/


/*Thailand map page function 
 *Using  value and for loop 
 */
function onClickMap() {
  let value = this.getAttribute("value");
  showElement(value);
}



for (let i = 0; i < mapClick.length; i++) {
  mapClick[i].addEventListener("click", onClickMap, false);
}


// Part province page
// Get parameter from URL

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
if (id) {
  const province = document.getElementById("part-province-" + id)
  if (province) {
    province.style.display = "grid"
  }

  const title = document.getElementById("part-province-name");
  if (title) {
    title.innerText = id.toUpperCase();
  }

}


const province = document.getElementsByClassName("onclick-province");

function onClickProvince() {
  let id = this.getAttribute("id");
  window.location.href = "province-sightseeing.html?id=" + id;
}
for (let i = 0; i < province.length; i++) {
  province[i].addEventListener("click", onClickProvince, false);
}


// province-sightseeing page
if (id) {

  if (window.location.pathname == "/Thailand-magic-map/province-sightseeing.html") {

    const provinceObject = provinceSightseeing.find(x => x.id === id);

    if (provinceObject) {

      const s1img = document.getElementById("sightseeing1-img");
      const s2img = document.getElementById("sightseeing2-img");
      const s3img = document.getElementById("sightseeing3-img");
      const s4img = document.getElementById("sightseeing4-img");
      const s5img = document.getElementById("sightseeing5-img");
      const s6img = document.getElementById("sightseeing6-img");

      const s1name = document.getElementById("sightseeing1-name");
      const s2name = document.getElementById("sightseeing2-name");
      const s3name = document.getElementById("sightseeing3-name");
      const s4name = document.getElementById("sightseeing4-name");
      const s5name = document.getElementById("sightseeing5-name");
      const s6name = document.getElementById("sightseeing6-name");

      const provinceImage = document.getElementById("province-image");
      provinceImage.src = provinceObject.image;

      s1img.src = provinceObject.sightseeing1.image;
      s2img.src = provinceObject.sightseeing2.image;
      s3img.src = provinceObject.sightseeing3.image;
      s4img.src = provinceObject.sightseeing4.image;
      s5img.src = provinceObject.sightseeing5.image;
      s6img.src = provinceObject.sightseeing6.image;

      s1name.innerText = provinceObject.sightseeing1.name;
      s2name.innerText = provinceObject.sightseeing2.name;
      s3name.innerText = provinceObject.sightseeing3.name;
      s4name.innerText = provinceObject.sightseeing4.name;
      s5name.innerText = provinceObject.sightseeing5.name;
      s6name.innerText = provinceObject.sightseeing6.name;

      const province = document.getElementById("province-section");
      if (province) {
        province.style.display = "grid"
      }

    }

    const title = document.getElementById("province-name");
    if (title) {
      title.innerText = id.toUpperCase();
    }

  }

}