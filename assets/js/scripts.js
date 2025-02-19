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
    let slideArray = Array.from(slides); // Convert NodeList to Array
    const prevButton = document.getElementById("prevService");
    const nextButton = document.getElementById("nextService");
    let index = 1; // Middle slide starts as active

    function updateCarousel() {
        console.log(slideArray);
        // Remove all classes
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

        // Apply size and opacity
        slideArray.forEach((slide, i) => {
            if (i === index) {
                slide.style.opacity = "1";
                slide.style.transform = "scale(1.2)";
            } else if (i === (index - 1 + slideArray.length) % slideArray.length || i === (index + 1) % slideArray.length) {
                slide.style.opacity = "0.8";
                slide.style.transform = "scale(0.9)";
            } else {
                slide.style.opacity = "0";
                slide.style.transform = "scale(0.7)";
            }
        });
    }

    function shiftRight() {
        slideArray.push(slideArray.shift()); // Moves first item to last
        updateCarousel();
    }

    function shiftLeft() {
        slideArray.unshift(slideArray.pop()); // Moves last item to first
        updateCarousel();
    }

    nextButton.addEventListener("click", shiftRight);
    prevButton.addEventListener("click", shiftLeft);

    updateCarousel(); // Initial setup
});


