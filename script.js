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
          tabButtons[i].classList.remove('active');
          contents[i].classList.remove('active-content');
      }

      event.target.classList.add('active');
  
      const tabId = event.target.getAttribute('data-tab');
      document.getElementById(`service-content-${tabId}`).classList.add('active-content');
}

for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].addEventListener('click', switchTab);
}