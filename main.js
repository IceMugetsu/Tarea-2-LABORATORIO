const carouselContainer = document.querySelector('.carousel-container');
const buttons = document.querySelectorAll('button');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const slideWidth = document.querySelector('.carousel-slide').offsetWidth;
        carouselContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    });
});

