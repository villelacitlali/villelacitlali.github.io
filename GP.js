let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    document.getElementById('carousel-slide').style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 5000); // Cambia de imagen cada 5 segundos
}

document.addEventListener('DOMContentLoaded', () => {
    autoSlide();
});