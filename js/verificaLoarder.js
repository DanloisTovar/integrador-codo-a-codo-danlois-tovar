const verificaLoader = (function () {
	return function () {
		document.addEventListener('DOMContentLoaded', function () {
			// Verifica si ya se mostró el loader anteriormente
			var loaderShown = localStorage.getItem('loaderShown');
			var loaderElement = document.querySelector('.centrar-loader');

			// Si no se ha mostrado el loader, lo mostramos y marcamos como mostrado
			if (loaderElement && !loaderShown) {
				// Marcamos el loader como mostrado en el almacenamiento local
				localStorage.setItem('loaderShown', false);
			} else if (loaderElement) {
				// Si ya se mostró el loader, ocultamos el div del loader
				loaderElement.style.display = 'none';
			}
		});
	};
})();

export default verificaLoader;
