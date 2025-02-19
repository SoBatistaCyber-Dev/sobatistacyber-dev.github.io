var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "/images/illustrations/home.jpg",
        "/images/illustrations/home1.jpg",
        "/images/illustrations/home2.jpg",
        "/images/illustrations/home3.jpg",
        "/images/illustrations/home4.jpg",
        "/images/illustrations/home5.jpg",
    ];

    let index = 0;
    const carouselImage = document.getElementById("carousel-image");

    if (!carouselImage) {
        console.warn("❌ carousel-image element not found! Skipping carousel script.");
        return; // Stop execution if the element is missing
    }

    function changeImage() {
        index = (index + 1) % images.length;
        carouselImage.src = images[index];
        console.log(`🔄 Image changed to: ${images[index]}`);
    }

    // Change image every 120 seconds (120,000 ms)
    setInterval(changeImage, 30000);
});

// for the carousel
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".services-carousel");
    let slides = Array.from(document.querySelectorAll(".service-slide"));
    const prevButton = document.getElementById("prevService");
    const nextButton = document.getElementById("nextService");

    let index = 1; // Start with the second slide as active

    function updateCarousel() {
        console.log("Active Slide Index:", index); // See which slide is active
        console.log("Slides Order:", slides.map(s => s.dataset.index)); // Log the order of slides
    
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "left", "right", "others");

            if (i === index) {
                slide.classList.add("active"); // Center
            } else if (i === (index - 1 + slides.length) % slides.length) {
                slide.classList.add("left"); // Left slide
            } else if (i === (index + 1) % slides.length) {
                slide.classList.add("right"); // Right slide
            } else {
                slide.classList.add("others"); // Hidden slides
            }
        });

        const activeSlide = slides[index];
        const slideWidth = activeSlide.offsetWidth;
        const carouselCenter = carousel.offsetWidth / 2;

        const newScrollLeft = activeSlide.offsetLeft - carouselCenter + slideWidth / 2;

        carousel.scrollTo({
            left: newScrollLeft,
            behavior: "smooth"
        });
    }

    function shiftRight() {
        index = (index + 1) % slides.length; // ✅ Fix: Ensure smooth rotation
        updateCarousel();
    }

    function shiftLeft() {
        index = (index - 1 + slides.length) % slides.length; // ✅ Fix: Ensure smooth rotation
        updateCarousel();
    }

    nextButton.addEventListener("click", shiftRight);
    prevButton.addEventListener("click", shiftLeft);

    updateCarousel(); // Initial setup
});

