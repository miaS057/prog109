var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function prevSlide() {
  clearTimeout(timer);
  slideIndex -= 1;
  showSlides(slideIndex);
}

function nextSlide() {
  clearTimeout(timer);
  slideIndex += 1;
  showSlides(slideIndex);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slides");
  if (n === undefined) {
    n = ++slideIndex
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  else if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  timer = setTimeout(showSlides, 2000);
}

var prev = document.getElementById("prev");
var next = document.getElementById("next");


prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
