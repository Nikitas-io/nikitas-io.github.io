
window.addEventListener('DOMContentLoaded', (evt) => {

	/* Navbar Scrollspy Start */
	'use strict';

	var section = document.querySelectorAll("section");
	var sections = {};
	var i = 0;

	Array.prototype.forEach.call(section, function(e) {
		sections[e.id] = e.offsetTop;
		
	});

	window.onscroll = function() {
		var scrollPosition = (document.documentElement.scrollTop + 150) || (document.body.scrollTop + 150);

		for (i in sections) {
			
			if (sections[i] <= scrollPosition) {
				document.querySelector('.active-section').setAttribute('class', ' ');
				document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active-section');
			}
		}
	};
	/* Navbar Scrollspy End */


	/* Projects Scrollspy Start */

	// Clear any hashtags from the page URL if there are any.
	window.history.replaceState("", document.title, window.location.pathname);
	
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});
	
	// Track all articles that have an `id` applied
	document.querySelectorAll('article[id]').forEach((article) => {
		observer.observe(article);
	});
	/* Projects Scrollspy End */
	
});

const projectList = document.getElementById('project-list');
// Select a project to scroll to.
projectList.addEventListener('click', function(evt){
    // Check if a tab label was clicked.
    if(evt.target.nodeName=='A'){
		// Prevent the default scrolling mechanism.
		evt.preventDefault();
		// Play SFX
		soundRestart(scrollSpy);

		// Get the id of the project we want to scroll to.
		let projectId = evt.target.getAttribute('href');
		// Get the project article we want to scroll to from the DOM.
		let project = document.querySelector(projectId);
		project.scrollIntoView();
	}
});




// Get the current year.
let year = new Date().getFullYear();
// Add the current year to the footer of the page.
const currentYear = document.getElementById('current-year');
currentYear.innerHTML = year;