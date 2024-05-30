import preloader from './preloader.js';
import verificaLoarder from './verificaLoarder.js';
import { buttonActive } from './buttonActive.js';
import EfectoMouseMove from './efectoMouseMove.js';
import obtenerDatos from './obtenerDatos.js';

console.log('Inicio de Proyecto!');
/* preloader */
preloader();

/* verificaLoader */
verificaLoarder();

/* active class navbar links */
buttonActive();

/* mouseMove */
EfectoMouseMove();

/* fetch api */
obtenerDatos();
