let veryDarkGrayishBlue = "hsl(217, 19%, 35%)";
let desaturatedDarkBlue = "hsl(214, 17%, 51%)";
let grayishBlue = "hsl(212, 23%, 69%)";
let lightGrayishBlue = "hsl(210, 46%, 95%)";

function openShareMenu() {
  let svgBtn = document.querySelector(".svgBtn");
  let svgShareIcon = document.querySelector(".svgSharePath");
  let user = document.querySelector(".user");
  let share = document.querySelector(".share");
  let footer = document.querySelector("footer");

  if (window.innerWidth >= 1200) {
    //desktop
    if (svgBtn.classList.contains("shareMenuOpen")) {
      svgBtn.classList.remove("shareMenuOpen");
      share.style.display = "none";
    } else {
      svgBtn.classList.add("shareMenuOpen");
      share.style.display = "grid";
    }
  } else {
    //mobile
    if (svgBtn.classList.contains("shareMenuOpen")) {
      svgBtn.classList.remove("shareMenuOpen");
      svgBtn.style.backgroundColor = lightGrayishBlue;
      svgShareIcon.style.fill = grayishBlue;
      user.style.display = "grid";
      share.style.display = "none";
      footer.style.backgroundColor = "white";
    } else {
      svgBtn.classList.add("shareMenuOpen");
      svgBtn.style.backgroundColor = desaturatedDarkBlue;
      svgShareIcon.style.fill = "white";
      user.style.display = "none";
      share.style.display = "grid";
      footer.style.backgroundColor = veryDarkGrayishBlue;
    }
  }
}

function init() {
  document.querySelector(".svgBtn").addEventListener("click", openShareMenu);
}

window.addEventListener("load", init);
