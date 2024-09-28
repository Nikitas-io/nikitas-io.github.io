window.addEventListener("DOMContentLoaded", (evt) => {
  /* Navbar Scrollspy Start */
  "use strict";

  var sections = document.querySelectorAll("section");
  var sectionPositions = {};

  Array.prototype.forEach.call(sections, function (section) {
    sectionPositions[section.id] = section.offsetTop;
  });

  window.onscroll = function () {
    var scrollPosition =
      document.documentElement.scrollTop + 200 || document.body.scrollTop + 200;

    for (var i in sectionPositions) {
      if (sectionPositions[i] <= scrollPosition) {
        document
          .querySelector(".active-section")
          .classList.remove("active-section");
        document
          .querySelector("a[href*=" + i + "]")
          .classList.add("active-section");
      }
    }
  };
  /* Navbar Scrollspy End */

  /* Projects Scrollspy Start */
  let ticking = false;

window.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      handleScroll();
      ticking = false;
    });

    ticking = true;
  }
});

function handleScroll() {
  var scrollPosition =
    document.documentElement.scrollTop + 200 || document.body.scrollTop + 200;

  for (var i in sectionPositions) {
    if (sectionPositions[i] <= scrollPosition) {
      const activeLink = document.querySelector(".active-section");
      const newActiveLink = document.querySelector("a[href*=" + i + "]");

      if (activeLink !== newActiveLink) {
        activeLink.classList.remove("active-section");
        newActiveLink.classList.add("active-section");
      }
    }
  }
}

  /* Projects Scrollspy End */
});

const projectList = document.getElementById("project-list");
// Select a project to scroll to.
projectList.addEventListener("click", function (evt) {
  // Check if a tab label was clicked.
  if (evt.target.nodeName == "A") {
    // Prevent the default scrolling mechanism.
    evt.preventDefault();
    // Play SFX (assuming soundRestart is defined)
    soundRestart(scrollSpy);

    // Get the id of the project we want to scroll to.
    let projectId = evt.target.getAttribute("href");
    // Get the project article we want to scroll to from the DOM.
    let project = document.querySelector(projectId);
    project.scrollIntoView();
  }
});

// Get the current year.
let year = new Date().getFullYear();
// Add the current year to the footer of the page.
const currentYear = document.getElementById("current-year");
currentYear.innerHTML = year;
