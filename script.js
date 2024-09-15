// Smooth scroll to sections when clicking navigation buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
