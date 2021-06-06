function openShareMenu() {
  let user = document.querySelector(".user");
  if (user.style.display == "none") {
    console.log("1");
    user.style.display = "grid";
    document.querySelector(".share").style.display = "none";
    document.querySelector("footer").style.backgroundColor = "white";
  } else {
    console.log("2");
    user.style.display = "none";
    document.querySelector(".share").style.display = "grid";
    document.querySelector("footer").style.backgroundColor =
      "hsl(217, 19%, 35%)";
  }
}

function init() {
  let svgBtns = document.querySelectorAll(".svgBtn");
    svgBtns.forEach(el =>{
        el.addEventListener("click", openShareMenu);
    })

}

window.addEventListener("load", init);
