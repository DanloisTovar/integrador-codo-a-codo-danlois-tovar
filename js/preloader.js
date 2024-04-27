const preloader = function () {
	document.addEventListener('DOMContentLoaded', function () {
		// Muestra el preloader
		// !lo comente porque ya le di estilo en el css
		/* document.querySelector(".centrar-loader").style.display = "block"; */
		setTimeout(function () {
			document.querySelector('.centrar-loader').style.display = 'none';
			document.body.classList.remove('ocultar-body');
		}, 1000);
	});
};

export default preloader;
