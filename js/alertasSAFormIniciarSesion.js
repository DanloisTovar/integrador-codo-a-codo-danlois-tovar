export default function alertasSAFormIniciarSesion() {
	document.addEventListener('DOMContentLoaded', (e) => {
		console.log('sweetAlert.js probando!!!!');

		document
			.querySelector('.form')
			.addEventListener('submit', function (e) {
				e.preventDefault();
				/* elementos del formulario: */
				let nombre = document.getElementById('nombre').value.trim();
				let correo = document.getElementById('email').value.trim();
				var mensaje = document.getElementById('mensaje').value.trim();

				if (!nombre) {
					swal('Error', 'Por favor, introduce tu nombre.', 'error');
					return;
				}

				/* Validar input nombre con regex */
				const nombreValidoRegex = /^[a-zA-Z0-9\s]*$/;
				if (!nombreValidoRegex.test(nombre)) {
					swal(
						'Error',
						'El nombre solo puede contener letras y numeros.',
						'error',
					);
					return;
				}
				if (!correo) {
					swal(
						'Error',
						'Por favor, introduce tu correo electrónico.',
						'error',
					);
					return;
				}

				/* Validar input correo con regex */
				let correoValidoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!correoValidoRegex.test(correo)) {
					swal(
						'Error',
						'Por favor, introduce un correo electrónico válido.',
						'error',
					);
					return;
				}

				if (!mensaje) {
					swal('Error', 'Por favor, introduce tu mensaje.', 'error');
					return;
				}

				swal('Buen trabajo!', 'Tu mensaje ha sido enviado.', 'success');
			});
	});
}
