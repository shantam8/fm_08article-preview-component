function openShareMenu() {
  let user = document.querySelector(".user");
  let share = document.querySelector(".share");
  let footer = document.querySelector("footer");
  if (user.style.display == "none") {
    user.style.display = "grid";
    share.style.display = "none";
    footer.style.backgroundColor = "white";
  } else {
    user.style.display = "none";
    share.style.display = "grid";
    footer.style.backgroundColor = "hsl(217, 19%, 35%)";
  }
}

function init() {
  let svgBtns = document.querySelectorAll(".svgBtn");
  svgBtns.forEach((el) => {
    el.addEventListener("click", openShareMenu);
  });
}

window.addEventListener("load", init);
