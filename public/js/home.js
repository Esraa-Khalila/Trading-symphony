let slideCounter = 1;
showSlides(slideCounter);

function incrseSlides(number) {
  showSlides((slideCounter += number));
}

function currentSlide(number) {
  showSlides((slideCounter = number));
}

function showSlides(number) {
  let slides = document.getElementsByClassName("hero");
  let dots = document.getElementsByClassName("shape_slider");
  if (number > slides.length) {
    slideCounter = 1;
  }
  if (number < 1) {
    slideCounter = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideCounter - 1].style.display = "block";
  dots[slideCounter - 1].className += " active";
}
// here make slider Auto move 
let slide = 0;
AutoShow();

function AutoShow() {
  let slides = document.getElementsByClassName("hero");
  let dot = document.getElementsByClassName("shape_slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slide++;
  if (slide > slides.length) {
    slide = 1;
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slides[slide - 1].style.display = "block";
  dot[slide - 1].className += " active";
  setTimeout(AutoShow, 5000); 
}
