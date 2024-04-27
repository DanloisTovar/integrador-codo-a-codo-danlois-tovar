const preloader = function () {
	document.addEventListener('DOMContentLoaded', function () {
		// Muestra el preloader
		// Muestra el preloader
		/* esta funcion elimina la clase ocultar-body y con esto elimino el error de comportamiento ue al cargar la pagina por mimera vez se oculta la barra de desplazamiento */
		window.onload = function () {
			document.body.classList.remove('ocultar-body');
		};
		setTimeout(function () {
			document.querySelector('.centrar-loader').style.display = 'none';
			document.body.classList.remove('ocultar-body');
		}, 1000);
	});
};

export default preloader;
