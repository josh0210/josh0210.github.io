function showModel1() {
  document.getElementById("model").src =
    "https://sketchfab.com/models/60e8c68180094d21a83f2340aa8d6013/embed";
  document
    .getElementsByClassName("thumbnail")[1]
    .classList.add("thumbnail-disabled");
  document
    .getElementsByClassName("thumbnail")[0]
    .classList.remove("thumbnail-disabled");
  document
    .getElementsByClassName("model-arrow")[0]
    .classList.add("model-arrow-disabled");
  document
    .getElementsByClassName("model-arrow")[1]
    .classList.remove("model-arrow-disabled");
}
function showModel2() {
  document.getElementById("model").src =
    "https://sketchfab.com/models/bf69eb00eaba4df3851b510f941a3c7a/embed";
  document.getElementById("model").title = "Military telescope";
  document
    .getElementsByClassName("thumbnail")[0]
    .classList.add("thumbnail-disabled");
  document
    .getElementsByClassName("thumbnail")[1]
    .classList.remove("thumbnail-disabled");
  document
    .getElementsByClassName("model-arrow")[1]
    .classList.add("model-arrow-disabled");
  document
    .getElementsByClassName("model-arrow")[0]
    .classList.remove("model-arrow-disabled");
}
function openNav() {
  document
    .getElementsByClassName("nav-container")[0]
    .classList.add("nav-active");
  document.getElementById("nav-arrow").onclick = closeNav;
  document.getElementById("nav-arrow").classList.add("arrow-rotate");
}
function closeNav() {
  document
    .getElementsByClassName("nav-container")[0]
    .classList.remove("nav-active");
  document.getElementById("nav-arrow").onclick = openNav;
  document.getElementById("nav-arrow").classList.remove("arrow-rotate");
}

function createStars() {
  for (const section of document.getElementsByClassName("timeline-section")) {
    for (i = 0; i <= 75; i++) {
      let star = document.createElement("div");
      star.classList.add("star");
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      section.appendChild(star);
    }
  }
}
