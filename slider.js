let slideIndex = 0;
const slides = document.querySelectorAll(".slider-container .slide");

function showSlides() {
    slides.forEach((slide) => {
        slide.classList.remove("active"); // Remove active class from all slides
    });
    slides[slideIndex].classList.add("active"); // Add active class to current slide
    slideIndex = (slideIndex + 1) % slides.length; // Move to the next slide
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

showSlides(); // Start the slideshow