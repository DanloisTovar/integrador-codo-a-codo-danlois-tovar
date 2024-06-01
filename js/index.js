/* preloader */
import preloader from './preloader.js';
/*  verificacion para que que no vuelva a cargar el preloader un vez ya haya estado en la pagina! */
import verificaLoarder from './verificaLoarder.js';
/* botones activos */
import { buttonActive } from './buttonActive.js';
/* mouse-move */
import EfectoMouseMove from './efectoMouseMove.js';
/* fetch */
import obtenerDatos from './obtenerDatos.js';
/* validador de formulario index */
import alertasSAFormIndex from './alertasSAFormIndex.js';
/* validador de formulario inicio de sesion */
import alertasSAFormIniciarSesion from './alertasSAFormIniciarSesion.js';

/* validador de formulario de registro */
import alertasSAFormRegistrar from './alertasSAFormRegistrar.js';

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

/* sweet Alert index */
alertasSAFormIndex();

/* sweet Alert inicar sesion */
alertasSAFormIniciarSesion();

/* sweet Alert registar */
alertasSAFormRegistrar();
