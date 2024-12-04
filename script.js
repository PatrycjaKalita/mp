// Function responsible for animating the button when clicked
var animateButton = function(e) {

    e.preventDefault;
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
};
  
var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

// Handle tab switching in the 'services' section
const tabButtons = document.getElementsByClassName('service-tab');
const contents = document.getElementsByClassName('service-container');
  
function switchTab(event) {
      for (let i = 0; i < tabButtons.length; i++) {
          tabButtons[i].classList.remove('active-service-tab');
          contents[i].classList.remove('active-content');
      }

      event.target.classList.add('active-service-tab');
  
      const tabId = event.target.getAttribute('data-tab');
      document.getElementById(`service-content-${tabId}`).classList.add('active-content');
}

for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].addEventListener('click', switchTab);
}

// Slideshow functionality that allows navigating through slides
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("portfolio-slide");
  let dots = document.getElementsByClassName("portfolio-slide-dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" portfolio-slide-active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " portfolio-slide-active";
}

//Adding event listeners for buttons in 'form' section
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".form-options button");

  buttons.forEach((button) => {
      button.addEventListener("click", () => {

          if (button.classList.contains("active-form")) {
              button.classList.remove("active-form");
          } else {
              buttons.forEach(btn => btn.classList.remove("active-form"));
              button.classList.add("active-form");
          }
      });
  });
});