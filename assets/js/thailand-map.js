const buttonResetId = "btn-reset-map";
const buttonMapClass = "btn-thailand-map";

/*Get access to reset button Element */
const elmResetMapButton = document.getElementById(buttonResetId);
/*Get access to map click button Element */
const elmMapButton = document.getElementsByClassName(buttonMapClass);

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

document.addEventListener("DOMContentLoaded", function (event) {
  // addEventListener click to map button
  for (var i = 0; i < elmMapButton.length; i++) {
    elmMapButton[i].addEventListener("click", onClickMap, false);
  }

  // addEventListener click to reset button
  elmResetMapButton.addEventListener("click", bindResetButtonEventClick, false);
});