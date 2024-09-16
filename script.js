let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Dot navigation controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Reset all slides' opacity and hide them
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].style.transition = 'opacity 1.5s ease'; // Ensure smooth fading
    slides[i].style.display = 'block';  // Ensures they're in the flow for opacity to work
  }

  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Fade in the current slide
  slides[slideIndex - 1].style.opacity = 1;
  dots[slideIndex - 1].className += " active";  // Activate the corresponding dot
}

// Initialize by showing the first slide
document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
});
