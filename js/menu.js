
const menu = document.getElementById("menubar");
const navBar = document.getElementsByClassName("nav");
const burger = document.getElementById('hamburger');
const closeBurger = document.getElementById("close-burger");
const navigationPanel = document.getElementById("page-navigation");
const mainContent = document.getElementsByTagName('main');
const homeSection = document.getElementById('home');
const word = document.querySelector("h1 span");
const loadingDots = document.getElementsByClassName('loading-dots');
const scrollIndicator = document.getElementsByClassName('arrows');

window.addEventListener('DOMContentLoaded', (evt) => {
  "use strict";

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
      document.body.style.overflowY = 'overlay';
      
      // Animate the Nikitas text.
      void word.offsetWidth;
      word.classList.add("animating");
      
      // Fade in the burger menu.
      burger.style.opacity = 1;
      
      // Fade out the loading dots.
      loadingDots[0].classList.add('loaded');
      setTimeout(function(){
        loadingDots[0].style.display = 'none';
        // Fade in the scroll indicator.
        scrollIndicator[0].style.opacity = 1;
      }, 500);
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

  
  let aboutSection = document.getElementById('about');
  // The scroll indicator was clicked.
  scrollIndicator[0].addEventListener('click', function() {
    // Play SFX
    soundRestart(scrollSpy);
    aboutSection.scrollIntoView();
  });

  /*--------TOUCH EVENTS START---------*/
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
  /*--------TOUCH EVENTS END---------*/

  /*---------ACCORDION START---------*/
  // Function to slide up an element
  function slideUp(element, duration) {
    if (!element) return;
    element.style.height = element.offsetHeight + 'px';
    element.style.transitionProperty = `height, margin, padding`;
    element.style.transitionDuration = `${duration}ms`;
    element.style.boxSizing = 'border-box';
    element.offsetHeight; // force repaint
    element.style.overflow = 'hidden';
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;

    window.setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('padding-top');
      element.style.removeProperty('padding-bottom');
      element.style.removeProperty('margin-top');
      element.style.removeProperty('margin-bottom');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, duration);
  }

  // Function to slide down an element
  function slideDown(element, duration) {
    if (!element) return;
    element.style.removeProperty('display');
    let display = window.getComputedStyle(element).display;

    if (display === 'none') {
      display = 'block';
    }

    element.style.display = display;
    let height = element.offsetHeight;
    element.style.height = 0;
    element.style.overflow = 'hidden';
    element.style.boxSizing = 'border-box';
    element.offsetHeight; // force repaint
    element.style.transitionProperty = `height, margin, padding`;
    element.style.transitionDuration = `${duration}ms`;
    element.style.height = height + 'px';

    window.setTimeout(() => {
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, duration);
  }

  // Function to toggle slide up/down
  function slideToggle(element, duration) {
    if (window.getComputedStyle(element).display === 'none') {
      slideDown(element, duration);
    } else {
      slideUp(element, duration);
    }
  }

  // Attach click event to elements with class 'item'
  const items = document.querySelectorAll('.item');

  items.forEach(function(item) {
    item.addEventListener('click', function() {
      const nextElement = this.nextElementSibling;

      // Toggle the next sibling element
      slideToggle(nextElement, 100);

      // Slide up all other <p> elements except the toggled one
      const pElements = document.querySelectorAll('.role-content');
      pElements.forEach(function(p) {
        if (p !== nextElement) {
          slideUp(p, 200); // 'fast' in jQuery is approximately 200ms
        }
      });
    });
  });
  /*---------ACCORDION END---------*/
});