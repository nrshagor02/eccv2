const cursor = document.getElementsByClassName("cursor")[0];

// document.onmousemove = (ev) => {
//   cursor.style.top = ev.clientY + "px";
//   cursor.style.left = ev.clientX + "px";
// };

// document.querySelectorAll(".image").forEach((item) => {
//   item.addEventListener("mouseover", (event) => {
//     cursor.classList.add("active");
//   });
//   item.addEventListener("mouseleave", (event) => {
//     cursor.classList.remove("active");
//   });
// });

$(window).on("scroll", function () {
  $(".container-1").css("top", $(window).scrollTop() * -2.2);
  $(".container-2").css("top", $(window).scrollTop() * -2);
  $(".container-3").css("top", $(window).scrollTop() * -2.4);
});
