import { API_KEY } from '../data/config.js';

const apiKey = API_KEY;

function obtenerDatos() {
	console.log('llamando datos');
	(async function () {
		try {
			const response = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
			);

			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error('Error:', error);
		}
	})();
}

export default obtenerDatos;
