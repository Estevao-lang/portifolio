function showDetails(projectId) {
  alert(`Detalhes do ${projectId}`);
  // Adicione mais lógica conforme necessário para mostrar detalhes do projeto.
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
document.addEventListener("DOMContentLoaded", function () {
  var paragraphs = document.querySelectorAll(".fade-in-text");

  function handleScroll() {
    paragraphs.forEach(function (paragraph) {
      if (isInViewport(paragraph) && !paragraph.classList.contains("visible")) {
        paragraph.classList.add("visible");
      }
    });
  }

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) / 2
    );
  }

  // Initial check
  handleScroll();

  // Listen for scroll events
  window.addEventListener("scroll", handleScroll);
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}