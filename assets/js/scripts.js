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
    const slides = document.querySelectorAll(".service-slide");
    let slideArray = Array.from(slides);
    const prevButton = document.getElementById("prevService");
    const nextButton = document.getElementById("nextService");
    let index = 1; // Middle slide starts as active
    let isTransitioning = false; // Prevents multiple clicks during transition

    function updateCarousel() {
        if (isTransitioning) return; // Prevent multiple clicks during animation
        isTransitioning = true; // Lock transitions

        console.log("Active Slide Index:", index);
        console.log("Slides Order:", slideArray.map(s => s.dataset.index));

        // Remove all previous classes
        slideArray.forEach(slide => slide.classList.remove("active", "left", "right", "others"));

        // Assign new classes
        slideArray[index].classList.add("active"); // Center slide (highlighted)
        slideArray[(index - 1 + slideArray.length) % slideArray.length].classList.add("left"); // Left slide
        slideArray[(index + 1) % slideArray.length].classList.add("right"); // Right slide

        // Hide all other slides
        slideArray.forEach((slide, i) => {
            if (i !== index && i !== (index - 1 + slideArray.length) % slideArray.length && i !== (index + 1) % slideArray.length) {
                slide.classList.add("others");
            }
        });

        // 🔄 **Apply Circular Motion Using Translate**
        slideArray.forEach((slide, i) => {
    let position = (i - index + slideArray.length) % slideArray.length;

    if (position === 0) {
        slide.style.transform = `translateX(0) scale(1.3)`;
        slide.style.opacity = "1";
    } else if (position === 1) {
        slide.style.transform = `translateX(120%) scale(0.9)`; // 🔥 Reduced from 50% to 35%
        slide.style.opacity = "0.8";
    } else if (position === slideArray.length - 1) {
        slide.style.transform = `translateX(-120%) scale(0.9)`; // 🔥 Reduced from -50% to -35%
        slide.style.opacity = "0.8";
    } else {
        slide.style.transform = `translateX(240%) scale(0.7)`; // 🔥 Reduced from 100% to 80%
        slide.style.opacity = "0";
    }
});

        // Unlock after transition finishes
        setTimeout(() => {
            isTransitioning = false;
        }, 1000); // Match CSS transition time (1s)
    }

    function shiftRight() {
        if (isTransitioning) return; // Prevent spamming clicks
        index = (index - 1 + slideArray.length) % slideArray.length;
        updateCarousel();
    }

    function shiftLeft() {
        if (isTransitioning) return; // Prevent spamming clicks
        index = (index + 1) % slideArray.length;
        updateCarousel();
    }

    nextButton.addEventListener("click", shiftRight);
    prevButton.addEventListener("click", shiftLeft);

    updateCarousel(); // Initial setup
});
