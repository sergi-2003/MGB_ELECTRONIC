let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    if (n < 0) {
        currentSlide = slides.length - 1;
    } else if (n >= slides.length) {
        currentSlide = 0;
    }

    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function autoSlide() {
    nextSlide();
}

showSlide(currentSlide);

document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);

// Agrega un intervalo para cambiar automáticamente las diapositivas cada 3 segundos
const interval = setInterval(autoSlide, 5000);

// Detiene el intervalo cuando el mouse está sobre el slider
document.querySelector(".slider").addEventListener("mouseover", () => {
    clearInterval(interval);
});

// Reanuda el intervalo cuando el mouse sale del slider
document.querySelector(".slider").addEventListener("mouseout", () => {
    interval = setInterval(autoSlide, 5000);
});
