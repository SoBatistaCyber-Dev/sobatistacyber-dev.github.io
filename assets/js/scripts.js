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
        if (isTransitioning) return;
        isTransitioning = true;

        // Remove previous classes
        slideArray.forEach(slide => slide.classList.remove("active", "left", "right", "others"));

        // Assign new classes
        slideArray[index].classList.add("active");
        slideArray[(index - 1 + slideArray.length) % slideArray.length].classList.add("left");
        slideArray[(index + 1) % slideArray.length].classList.add("right");

        // Hide all other slides
        slideArray.forEach((slide, i) => {
            if (i !== index && i !== (index - 1 + slideArray.length) % slideArray.length && i !== (index + 1) % slideArray.length) {
                slide.classList.add("others");
            }
        });

        // 🔄 Responsive Adjustments for Small Screens
        slideArray.forEach((slide, i) => {
            let position = (i - index + slideArray.length) % slideArray.length;

            if (position === 0) {
                slide.style.transform = `translateX(0) scale(1.3)`;
                slide.style.opacity = "1";
            } else if (position === 1) {
                if(window.innerWidth < 768) {
                    slide.style.transform = `translateX(30%) scale(0.9)`;
                    slide.style.opacity = "0.8";
                } else {
                    slide.style.transform = `translateX(120%) scale(0.9)`;
                    slide.style.opacity = "0.8";
                }
                
            } else if (position === slideArray.length - 1) {
                if(window.innerWidth < 768) {
                    slide.style.transform = `translateX(-30%) scale(0.9)`;
                    slide.style.opacity = "0.8";
                } else {
                    slide.style.transform = `translateX(-120%) scale(0.9)`;
                    slide.style.opacity = "0.8";
                }
            } else {
                if(window.innerWidth < 768) {
                    slide.style.transform = `translateX(0%) scale(0.9)`;
                    slide.style.opacity = "0.8";
                } else {
                    slide.style.transform = `translateX(30%) scale(0.9)`;
                    slide.style.opacity = "0";
                }
            }
        });

        // Unlock after transition
        setTimeout(() => {
            isTransitioning = false;
        }, 1000);
    }

    function shiftRight() {
        if (isTransitioning) return;
        index = (index - 1 + slideArray.length) % slideArray.length;
        updateCarousel();
    }

    function shiftLeft() {
        if (isTransitioning) return;
        index = (index + 1) % slideArray.length;
        updateCarousel();
    }

    nextButton.addEventListener("click", shiftRight);
    prevButton.addEventListener("click", shiftLeft);

    window.addEventListener("resize", function () {
        updateCarousel(); // 🔄 Recalculate positions dynamically
    });
    updateCarousel();
});

/* Search function */
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("serviceSearch");
    const carousel = document.querySelector(".strip-grey"); // The carousel wrapper
    const serviceGrid = document.getElementById("servicesList");
    const services = document.querySelectorAll(".service-item-page");

    function filterServices() {
        const query = searchInput.value.toLowerCase();
        let hasResults = false;

        services.forEach(service => {
            const title = service.querySelector(".service-title-page").textContent.toLowerCase();
            const description = service.querySelector("p").textContent.toLowerCase();

            if (title.includes(query) || description.includes(query)) {
                service.style.display = "block";
                hasResults = true;
            } else {
                service.style.display = "none";
            }
        });

        if (query.length > 0 && hasResults) {
            // 🔥 Hide Carousel & Show Grid
            carousel.style.display = "none";
            serviceGrid.style.display = "grid";
        } else {
            // 🔥 Show Carousel & Hide Grid
            carousel.style.display = "block";
            serviceGrid.style.display = "none";
        }
    }

    searchInput.addEventListener("input", filterServices);

    // Initially, hide the grid
    serviceGrid.style.display = "none";
});

