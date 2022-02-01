
const menu = document.getElementById("menubar");
const navBar = document.getElementsByClassName("nav");
const burger = document.getElementById('hamburger');
const closeBurger = document.getElementById("close-burger");
const navigationPanel = document.getElementById("page-navigation");
const mainContent = document.getElementsByTagName('main');
const homeSection = document.getElementById('home');
const word = document.querySelector("h1 span");
const loadingDots = document.getElementsByClassName('loading-dots');

window.addEventListener('DOMContentLoaded', (evt) => {
  // Fade in the home section.
  homeSection.classList.add('loaded');
  
  // The page is fully loaded
  document.onreadystatechange = () => {
    // document ready
    if (document.readyState === 'complete') {
      // Slide in bottom menu.    
      navBar[0].classList.add('loaded');
      // Fade in the main content.
      mainContent[0].classList.add('loaded');
      // Animate the Nikitas text.
      void word.offsetWidth;
      word.classList.add("animating");

      // Fade out the loading dots.
      loadingDots[0].classList.add('loaded');
    }
  };

  // Check if the user has clicked inside the navigation panel.
  navigationPanel.addEventListener('click', function(evt) {
    // Check if the element that was clicked was a list item.
    if (evt.target.nodeName=='A') {
      // Play SFX
      soundRestart(scrollSpy);
      // Check if the side-menu is opened.
      if (menu.classList.contains('open')){
        setTimeout(function(){
          // Close the menu.
          toggleMenu();
        }, 300);
      }
    }
  });

  burger.addEventListener('click', function () {
    toggleMenu();
  });

  closeBurger.addEventListener('click', function () {
    toggleMenu();
  });

  let outsideBurger = '#menubar *';
  document.body.addEventListener('click', function(event){
    // Check if the side-menu is opened.
    if (menu.classList.contains('open')){
      // Only close the menu if the user has clicked outside the menu.
      if (!event.target.matches(outsideBurger) && event.target != burger){
        toggleMenu();
      }
    }
  });

  function toggleMenu() {
    //If open close it, if closed open it.
    if (!menu.classList.contains('open')) {
      menu.classList.add('open');
      burger.style.opacity = 0;
    }else{
      menu.classList.remove('open');
      burger.style.opacity = 1;
    }
  }

  /*--------TOUCH EVENTS---------*/
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return evt.touches // browser API
  }

  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
  };

  function handleTouchMove(evt) {
      if ( ! xDown || ! yDown ) {
          return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      // Most significant
      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        /* left swipe */
        if ( xDiff > 0 ) {
          // Check if the side-menu is closed so you can open it.
          if (menu.classList.contains('open')){
              // Close the menu.
              toggleMenu();
          }
        }
      } else {
          if ( yDiff > 0 ) {
              /* up swipe */
          } else {
              /* down swipe */
          }
      }
      /* reset values */
      xDown = null;
      yDown = null;
  };
});