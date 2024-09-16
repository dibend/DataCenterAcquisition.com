// JavaScript for Slide Deck functionality
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  // Display the first slide
  slides[currentSlide].classList.add('active');

  // Function to show the next slide
  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  // Function to show the previous slide
  function showPrevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  // Add event listeners to the next and previous buttons
  document.getElementById('nextSlide').addEventListener('click', showNextSlide);
  document.getElementById('prevSlide').addEventListener('click', showPrevSlide);
});
