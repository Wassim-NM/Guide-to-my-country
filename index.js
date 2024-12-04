window.addEventListener("load",hidePreloader)
function hidePreloader(){
    document.getElementById("preloader-gif").style.display = 'none';
    document.getElementById("preholder-div").style.display = 'none';
}

const carousel = document.querySelector('.carousel');

let isDragging = false;
let startX = 0;
let currentRotation = 0;

carousel.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX;
});

carousel.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    const swipeDistance = event.clientX - startX;
    if (swipeDistance > 0) {
        isDragging = false;
        rotateCarousel(+90);
    } else if (swipeDistance < 0) {

        isDragging = false;
        rotateCarousel(-90);
    }
});

carousel.addEventListener('mouseup', () => {
    isDragging = false;
});

carousel.addEventListener('mouseleave', () => {
    isDragging = false;
});

carousel.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

carousel.addEventListener('touchmove', (event) => {
    const swipeDistance = event.touches[0].clientX - startX;
    if (swipeDistance > 50) {
        rotateCarousel(-90);
        startX = event.touches[0].clientX;
    } else if (swipeDistance < -50) {
        rotateCarousel(90);
        startX = event.touches[0].clientX;
    }
});

carousel.addEventListener('touchend', () => {
    isDragging = false;
});

function rotateCarousel(degrees) {
    currentRotation += degrees;
    carousel.style.transform = `rotateY(${currentRotation}deg)`;
}

document.getElementById('prev').addEventListener('click', () => {
    currentRotation -= 90;
    carousel.style.transform = `rotateY(${currentRotation}deg)`;
});

document.getElementById('next').addEventListener('click', () => {
    currentRotation += 90;
    carousel.style.transform = `rotateY(${currentRotation}deg)`;
});
