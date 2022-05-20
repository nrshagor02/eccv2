// menu button
const menu = document.querySelector(".menu-list");
const menuBnt = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBnt.onclick = () => {
  menu.classList.add("active");
  menuBnt.classList.add("hide");
};
cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBnt.classList.remove("hide");
};

// Scroll Progress
const scrollProgressElement = document.querySelector("#scroll-progress");
function scrollProgress() {
  const totalHeightOfWebPage = document.body.scrollHeight;
  const currentDistanceFromTop = document.documentElement.scrollTop;
  const windowHeight = document.documentElement.clientHeight;
  const scrolledPercentage =
    (currentDistanceFromTop / (totalHeightOfWebPage - windowHeight)) * 100;
  scrollProgressElement.style.width = Math.round(scrolledPercentage) + "%";

  return Math.round(currentDistanceFromTop);
}

document.addEventListener("scroll", scrollProgress);
// Drawer Text change
var cb = document.getElementById("left-menu");
var label = document.getElementById("left-menu-text");
cb.addEventListener(
  "click",
  function (evt) {
    if (cb.checked) {
      label.innerHTML = "Close all";
    } else {
      label.innerHTML = "Explore all";
    }
  },
  false
);

// Sticky Image

$(window).on("scroll", function () {
  const start = scrollProgress();
  console.log(start);
  if (start > 600 && start < 1450) {
    $(".container-1").css("margin-top", $(window).scrollTop() * -0.067 + "vw");
    $(".container-2").css("margin-top", $(window).scrollTop() * -0.081 + "vw");
    $(".container-3").css("margin-top", $(window).scrollTop() * -0.164 + "vw");
  }
});
