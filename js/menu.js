const menu = document.getElementById("menubar");
const burger = document.getElementById('hamburger');
const closeBurger = document.getElementById("close-burger");
const navigationPanel = document.getElementById("page-navigation");

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
