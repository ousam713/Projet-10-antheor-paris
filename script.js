const slides = document.querySelectorAll(".mySlide");
// const slide_text = document.querySelectorAll("#slides .slide-text");
let slideIndex = 0;
let interval = null;


document.addEventListener("DOMContentLoaded",initSlidesContainer);

function initSlidesContainer(){
    if (slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        // slide_text[slideIndex].classList.add("displaySlide");
        interval = setInterval(nextSlide,3000);
    }
}

function transition(i){
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[i].classList.add("displaySlide");

    // slide_text.forEach(slide_txt => {
    //     slide_txt.classList.add("displaySlide");
    // });
    // slide_text[i].classList.add("displaySlide");
    initSlidesContainer();
}

function prevSlide(){
    clearInterval(interval);
    slideIndex--;
    if(slideIndex <= -1){
        slideIndex = slides.length - 1; 
    }
    
    transition(slideIndex);
}

function nextSlide(){
    clearInterval(interval);
    slideIndex++;
    if(slideIndex >= slides.length){
        slideIndex = 0;
    }
    transition(slideIndex);
}