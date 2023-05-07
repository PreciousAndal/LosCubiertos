// Select DOM elements
const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');
const toggleBtnIcon = document.querySelector('.toggle_btn i');

// Add event listener for click event on toggle button
toggleBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open');
  const isOpen = dropdownMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

// Add scroll event listener using jQuery in About Us Section (Fade out)
$(window).scroll(function(){
  $(".parallax-container").css("opacity", 1 - $(window).scrollTop() / 250);
});

// Add scroll event listener using jQuery to reveal the About Us Section
const infos = document.querySelector('.infos');
let scrollPosition = window.scrollY;

function revealOnScroll() {
  const revealPosition = infos.offsetTop + (infos.offsetHeight / 2);
  const windowBottom = scrollPosition + window.innerHeight;
  const revealClass = 'reveal';

  if (windowBottom >= revealPosition) {
    infos.classList.add(revealClass);
  } else {
    infos.classList.remove(revealClass);
  }
}

window.addEventListener('scroll', () => {
  scrollPosition = window.scrollY;
  revealOnScroll();
});

// EXPLANATION
// 1. First, we select the .infos div and initialize a variable scrollPosition to keep track of the current scroll position.
// 2. We define a function revealOnScroll that checks if the bottom of the viewport is at or below the midpoint of the .infos div, and adds or removes a class reveal accordingly.
// 3. we add an event listener to the window object that updates scrollPosition and calls revealOnScroll whenever the user scrolls.
// 4. Finally, we can use CSS to define the styles for the .infos.reveal class to reveal the element, for example: CSS Line 237
// This CSS will initially hide the .infos element (with opacity: 0 and transform: translateY(50px)), and will transition to fully reveal...
// ...the element when the reveal class is added (with opacity: 1 and transform: translateY(0)).