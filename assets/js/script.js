/*Declare variable for the button and clickable map in each page*/

const buttonResetId = "btn-reset-map";
const buttonBackId = "btn-back";
const buttonMapClass = "btn-thailand-map";
const buttonProvinceMapId = "part-province-page-main-col2";
const partProvinceNorth = "part-province-northern";
const buttonResetProvinceId = "btn-reset-province-map";
const pagePartId = "part-province-page";
const pageProvinceId = "province-sightseeing-page";
const buttonSightSeeningClass = "province-sightseeing-page-main-col2";
const buttonResetSightseeingId = "btn-reset-sightseeing";


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

/*Get access to from thailand map page */
const elmResetMapButton = document.getElementById(buttonResetId);
const elmMapButton = document.getElementsByClassName(buttonMapClass);
const elmBackButton = document.getElementById(buttonBackId);


/*Get access to from Part page */
const elmPartPage = document.getElementById(pagePartId);
const elmProvinceMapButton = document.getElementsByClassName(buttonProvinceMapId);
const elmResetProvinceMapButton = document.getElementById(buttonResetProvinceId);

/*Get access to from SightSeeing page */
const elmProvicePage = document.getElementById(pageProvinceId);
const elmSightSeeningButton = document.getElementsByClassName(buttonSightSeeningClass);
const elmResetSightseeingButton = document.getElementById(buttonResetSightseeingId);


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

function onClickProvince() {
  let id = this.getAttribute("id");
  window.location.href = "province-sightseeing.html?id=" + id;
}

/*Function to click to display then click to hide */
function showHideElement(id) {
  const img = document.getElementById(id);
  if (img && img.style.opacity === "1") {
    img.style.opacity = 0;
  } else {
    img.style.opacity = 1;
  }
}

function onClickMap() {
  const elementId = this.getAttribute("value");
  if (elementId) {
    showHideElement(elementId);
  }
}

function bindResetButtonEventClick() {
  for (let i = 0; i < elmMapButton.length; i++) {
    const mapId = elmMapButton[i].getAttribute("value");
    const img = document.getElementById(mapId);
    if (img) {
      img.style.opacity = 0;
    }
  }
}

function onClickPart() {
  const elementId = this.getAttribute('data-value');
  if (elementId) {
    const provinceLists = document.getElementById(elementId).getElementsByClassName('parentContainer')
    for (let i = 0; i < provinceLists.length; i++) {
      provinceLists[i].style.opacity = 1;
    }
  }
}

function bindResetProvinceButtonEventClick() {
  const provinceLists = document.getElementsByClassName('parentContainer');
  for (let i = 0; i < provinceLists.length; i++) {
    provinceLists[i].style.opacity = 0;
  }
}


function onClickSightSeeing() {
  const provinceLists = document.getElementById("province-section").getElementsByClassName('parentContainer')
  for (let i = 0; i < provinceLists.length; i++) {
    provinceLists[i].style.opacity = 1;
  }
}

function bindResetSightseeingButtonEventClick() {
  const sightseeingLists = document.getElementsByClassName('parentContainer');
  for (let i = 0; i < sightseeingLists.length; i++) {
    sightseeingLists[i].style.opacity = 0;
  }
}


/*Create function  event to work after download home page prevent flickering page*/
document.addEventListener("DOMContentLoaded", function (event) {
  const thailand_map = document.getElementById("thailand-map");
  if (thailand_map) {
    thailand_map.style.display = "block";
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

  /* addEventListener click to map button*/
  if (elmMapButton) {
    for (let i = 0; i < elmMapButton.length; i++) {
      elmMapButton[i].addEventListener("click", onClickMap, false);
    }
  }

  /*addEventListener click to reset button*/
  if (elmResetMapButton) {
    elmResetMapButton.addEventListener("click", bindResetButtonEventClick, false);
  }

  /* addEventListener click to reset button*/
  if (elmBackButton) {
    elmBackButton.addEventListener("click", () => {
      history.back();
    }, false);
  }

  if (elmProvinceMapButton) {
    for (let i = 0; i < elmProvinceMapButton.length; i++) {
      elmProvinceMapButton[i].addEventListener("click", onClickPart, false);
    }
  }

  /* addEventListener click to reset button*/
  if (elmResetProvinceMapButton) {
    elmResetProvinceMapButton.addEventListener("click", bindResetProvinceButtonEventClick, false);
  }

  if (elmPartPage) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const partId = urlParams.get("id");
    if (partId) {
      const partName = document.getElementById("part-province-" + partId);
      if (partName) {
        partName.style.display = "grid";
      }

      const title = document.getElementById("part-province-name");
      if (title) {
        title.innerText = partId.toUpperCase();
      }

      const provinceLists = partName.getElementsByClassName("onclick-province");
      for (let i = 0; i < provinceLists.length; i++) {
        provinceLists[i].addEventListener("click", onClickProvince, false);
      }

    }
  }


  if (elmProvicePage) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sightSeeningid = urlParams.get("id");
    if (sightSeeningid) {
      const province = document.getElementById("province-section");
      if (province) {
        province.style.display = "grid";
      }

      const title = document.getElementById("province-name");
      if (title) {
        title.innerText = sightSeeningid.toUpperCase();
      }

      let provinceObject = provinceSightseeing.find((x) => x.id === sightSeeningid);

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

        let provinceImage = document.getElementById("province-image");
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
      }



    }
  }

  if (elmSightSeeningButton) {
    for (let i = 0; i < elmSightSeeningButton.length; i++) {
      elmSightSeeningButton[i].addEventListener("click", onClickSightSeeing, false);
    }
  }

  if (elmResetSightseeingButton) {
    elmResetSightseeingButton.addEventListener("click", bindResetSightseeingButtonEventClick, false);
  }

});