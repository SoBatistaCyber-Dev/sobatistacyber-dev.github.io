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
        console.error("❌ carousel-image element not found! Check your HTML.");
        return;
    }

    function changeImage() {
        index = (index + 1) % images.length;
        carouselImage.src = images[index];
        console.log(`🔄 Image changed to: ${images[index]}`);
    }

    // Change image every 120 seconds (120,000 ms)
    setInterval(changeImage, 30000);
});
