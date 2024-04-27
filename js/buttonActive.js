export function buttonActive() {
	document.addEventListener('DOMContentLoaded', function () {
		// Al cargar la página, elimina la clase 'active' de todos los enlaces
		/* var allAnchors = document.querySelectorAll('.navbar-nav .nav-link');
		allAnchors.forEach(function (anchor) {
			anchor.classList.remove('active');
		}); */
		var navbarAnchors = document.querySelectorAll('.navbar-nav .nav-link');

		navbarAnchors.forEach(function (anchor) {
			anchor.addEventListener('click', function (e) {
				var activeElements = document.querySelectorAll(
					'.navbar-nav .active',
				);

				activeElements.forEach(function (activeElement) {
					activeElement.classList.remove('active');
				});

				e.target.classList.add('active');
			});
		});

		// Agrega la clase 'active' al enlace correspondiente a la página actual
		var currentPath = window.location.pathname;
		var currentPageAnchor = document.querySelector(
			`.navbar-nav a[href="${currentPath}"]`,
		);

		if (currentPageAnchor) {
			currentPageAnchor.classList.add('active');
		}
	});

	console.log('Botones activados!');
}
