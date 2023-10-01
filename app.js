// document.querySelectorAll(".menu a").forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault(); // Prevent the default behavior
//     // Your custom scrolling code here
//   });
// });

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "orange"; // Change the background color on scroll
  } else {
    header.style.backgroundColor = "black"; // Revert to the original background color
  }
});
