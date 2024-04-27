// efectoMouseMove.js
export default function EfectoMouseMove() {
	(function () {
		document.addEventListener('mousemove', parallax);
		function parallax(e) {
			document.querySelectorAll('.object').forEach(function (move) {
				let moving_value = move.getAttribute('data-value');
				let x = (e.clientX * moving_value) / 200;
				let y = (e.clientY * moving_value) / 200;
				move.style.transform =
					'translateX(' + x + 'px) translateY(' + y + 'px)';
			});
		}
	})();
}
