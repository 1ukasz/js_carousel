const slides = document.getElementsByClassName('item');
let slidePosition = 0;
const totalSlides = slides.length;
const counter = document.getElementById('counter');

document.getElementById('next').addEventListener('click', moveToNextSlide);
document.getElementById('prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('visible');
        slide.classList.add('hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
        
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("visible");
    counter.innerHTML = slidePosition + 1 + '/' + totalSlides;
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("visible");
    counter.innerHTML = slidePosition + 1 + '/' + totalSlides;
}