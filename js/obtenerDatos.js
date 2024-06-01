import { API_KEY } from '../data/config.js';

const apiKey = API_KEY;

function crearTarjeta(item) {
	return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
  <div class="card h-100">
    <img src="${item.url}" class="card-img-top" alt="${item.title}"style="object-fit: cover;" />
    <div class="card-body card-body-api">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">Fecha: ${item.date}</p>
      <p class="card-text">Precio: $ 1.00</p>
    </div>
  </div>
</div>
  `;
}

async function obtenerDatos() {
	try {
		const response = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=16`,
		);

		const data = await response.json();
		const contenedor1 = document.querySelector('#contenedor-de-tarjetas-1');
		const contenedor2 = document.querySelector('#contenedor-de-tarjetas-2');

		// Dividir los datos en dos partes
		const mitad = Math.ceil(data.length / 2);
		const data1 = data.slice(0, mitad);
		const data2 = data.slice(mitad);

		// Crear tarjetas HTML para cada conjunto de datos
		const tarjetasHTML1 = data1.map(crearTarjeta).join('');
		const tarjetasHTML2 = data2.map(crearTarjeta).join('');

		// Asignar las tarjetas HTML a los contenedores
		contenedor1.innerHTML = tarjetasHTML1;
		contenedor2.innerHTML = tarjetasHTML2;
	} catch (error) {
		console.error('Error:', error);
	}
}

export default function ejecutarObtenerDatos() {
	obtenerDatos();
}
