window.addEventListener('DOMContentLoaded', () => {

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
	
});

// Get the current year.
let year = new Date().getFullYear();
// Add the current year to the footer of the page.
const currentYear = document.getElementById('current-year');
currentYear.innerHTML = year;