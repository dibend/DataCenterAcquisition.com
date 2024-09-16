// JavaScript for Slide Deck functionality
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  // Function to show the current slide and hide others
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = '0';  // Hide all slides initially
      slide.style.visibility = 'hidden';
      if (i === index) {
        slide.style.opacity = '1';  // Show the active slide
        slide.style.visibility = 'visible';
      }
    });
  }

  // Display the first slide on page load
  showSlide(currentSlide);

  // Function to show the next slide
  function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Function to show the previous slide
  function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Add event listeners to the next and previous buttons
  document.getElementById('nextSlide').addEventListener('click', showNextSlide);
  document.getElementById('prevSlide').addEventListener('click', showPrevSlide);
});
