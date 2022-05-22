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

function showVideo() {
  document.getElementById("carousel").children[0].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  });
  document
    .getElementsByClassName("model-arrow")[0]
    .classList.add("model-arrow-disabled");
  document
    .getElementsByClassName("model-arrow")[1]
    .classList.remove("model-arrow-disabled");
  console.log(document.getElementById("carousel").children[0]);
  let video = document.getElementById("video");
  video.pause();
}

function showModel() {
  document.getElementById("carousel").children[1].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  });
  console.log(document.getElementById("carousel").children);
  document
    .getElementsByClassName("model-arrow")[0]
    .classList.remove("model-arrow-disabled");
  document
    .getElementsByClassName("model-arrow")[1]
    .classList.add("model-arrow-disabled");
  console.log(document.getElementById("carousel").children[1]);
  let video = document.getElementById("video");
  video.play();
}
