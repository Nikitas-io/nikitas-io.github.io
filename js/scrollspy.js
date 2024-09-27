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
  window.addEventListener("scroll", () => {
    const articles = document.querySelectorAll("article[id]");
    let currentArticle = null;
    let minOffset = Infinity;

    articles.forEach((article) => {
      const rect = article.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < minOffset) {
        minOffset = rect.top;
        currentArticle = article;
      }
    });

    if (currentArticle) {
      const id = currentArticle.getAttribute("id");

      // Remove 'active' class from all nav items
      document
        .querySelectorAll("nav li")
        .forEach((li) => li.classList.remove("active"));

      // Add 'active' class to the current nav item
      document
        .querySelector(`nav li a[href="#${id}"]`)
        .parentElement.classList.add("active");
    }
  });
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
