/*document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    const items = document.querySelectorAll(".carousel-item");
    let angle = 0;
    const totalItems = items.length;

    // Set initial positions
    items.forEach((item, index) => {
        const theta = (360 / totalItems) * index;
        item.style.transform = `rotateY(${theta}deg) translateZ(300px)`;
    });

    // Rotate carousel
    const rotateCarousel = () => {
        angle -= 360 / totalItems;
        carouselContainer.style.transform = `rotateY(${angle}deg)`;
    };

    // Rotate on hover (optional)
    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            carouselContainer.style.transition = "transform 0.5s";
        });

        item.addEventListener("mouseleave", () => {
            carouselContainer.style.transition = "transform 1s ease-out";
        });
    });

    // Auto-rotate every 5 seconds
    setInterval(rotateCarousel, 5000);
});*/

document.addEventListener("DOMContentLoaded", () => {
    let currentAngle = 0;
    const slides = document.querySelectorAll(".slide-3d");
    const totalSlides = slides.length;
    const angle = 360 / totalSlides; // Divide o círculo igualmente entre os slides

    function setupSlides() {
        slides.forEach((slide, index) => {
            const rotateY = angle * index;
            slide.style.transform = `rotateY(${rotateY}deg) translateZ(300px)`;
        });
    }

    function rotateCarousel(direction) {
        currentAngle += direction * angle;
        document.querySelector(".slides-3d").style.transform = `rotateY(${currentAngle}deg)`;
    }

    document.querySelector(".proximo-3d").addEventListener("click", () => {
        rotateCarousel(-1);
    });

    document.querySelector(".anterior-3d").addEventListener("click", () => {
        rotateCarousel(1);
    });

    setupSlides();
});

