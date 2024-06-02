export default function alertasSAFormIniciarSesion() {
	document.addEventListener('DOMContentLoaded', (e) => {
		document
			.querySelector('.form')
			.addEventListener('submit', function (e) {
				e.preventDefault();
				/* elementos del formulario: */
				let correo = document.getElementById('email').value.trim();
				let password = document.getElementById('password').value.trim();

				/* Validar input correo */
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

				if (!password) {
					swal(
						'Error',
						'Por favor, introduce tu contraseña.',
						'error',
					);
					return;
				}

				if (password.length < 8) {
					swal(
						'Error',
						'La contraseña debe tener al menos 8 caracteres.',
						'error',
					);
					return;
				}

				/* Validar input password con regex */
				const minLength = 8;
				const hasLowerCase = /[a-z]/.test(password);
				const hasUpperCase = /[A-Z]/.test(password);
				const hasSymbol = /[\W_]/.test(password);
				const isLongEnough = password.length >= minLength;

				/* validar que tenga una letra mayuscula */
				if (!hasUpperCase) {
					swal(
						'Error',
						'La contraseña debe tener al menos una letra mayúscula.',
						'error',
					);
					return;
				}
				/* validar que tenga una letra miniscula */
				if (!hasLowerCase) {
					swal(
						'Error',
						'La contraseña debe tener al menos una letra minuscula.',
						'error',
					);
					return;
				}
				/* validar que tenga un simbolo */
				if (!hasSymbol) {
					swal(
						'Error',
						`La contraseña debe tener al menos un simbolo.`,
						'error',
					);
					return;
				}
				/* validar que tenga 8 caracteres por lo menos */
				if (!isLongEnough) {
					swal(
						'Error',
						`La contraseña debe tener al menos ${minLength} caracteres.`,
						'error',
					);
					return;
				}

				swal(
					'Contraseña corecta',
					'¡Bienvenido a la Nasa image Store!',
					'success',
				);
			});
	});
}
