/*
 * IDs  -> Elementos únicos de la página.
 * Clases -> Elementos que se repiten dentro de cada tarjeta.
 * data-id -> Identificador único de cada pasantía.
*/



/*
=            PERFIL DE LA EMPRESA
*/

const empresaFotoPerfil = document.getElementById("empresaFotoPerfil");
const empresaTipo = document.getElementById("empresaTipo");
const empresaNombre = document.getElementById("empresaNombre");
const empresaVerPerfil = document.getElementById("empresaVerPerfil");



/*
=            BOTONES Y FILTROS
*/

const btnFiltroTodas = document.getElementById("btnFiltroTodas");
const btnFiltroActivas = document.getElementById("btnFiltroActivas");
const btnFiltroFinalizadas = document.getElementById("btnFiltroFinalizadas");

const selectOrdenPasantias = document.getElementById("selectOrdenPasantias");



/*
=            CONTADORES SUPERIORES
*/

const contadorPasantiasActivas = document.getElementById("contadorPasantiasActivas");
const contadorPostulaciones = document.getElementById("contadorPostulaciones");
const contadorAceptados = document.getElementById("contadorAceptados");
const contadorPasantiasFinalizadas = document.getElementById("contadorPasantiasFinalizadas");



/*
=            CONTENEDOR DE TARJETAS
*/

const contenedorPasantias = document.getElementById("contenedorPasantias");



/*
=            TARJETAS DE PASANTÍAS
*/

/*
    Cada tarjeta posee:

    class="tarjeta-pasantia"

    data-id=""

    El data-id identifica de manera única la pasantía.
    Gracias a él podemos editar, eliminar o finalizar una
    tarjeta sin afectar las demás.
*/

const tarjetasPasantia = document.querySelectorAll(".tarjeta-pasantia");



/*
=            ELEMENTOS INTERNOS DE CADA TARJETA
*/

/*
    Estas clases NO son únicas.

    Se repiten en cada tarjeta y se utilizan para obtener
    información únicamente de la tarjeta seleccionada.

    Ejemplo:

    tarjeta.querySelector(".titulo-pasantia");
*/

const titulosPasantia = document.querySelectorAll(".titulo-pasantia");

const descripcionPasantia = document.querySelectorAll(".descripcion-pasantia");

const estadoPasantia = document.querySelectorAll(".estado-pasantia");

const especialidadPasantia = document.querySelectorAll(".especialidad-pasantia");

const modalidadPasantia = document.querySelectorAll(".modalidad-pasantia");

const ubicacionPasantia = document.querySelectorAll(".ubicacion-pasantia");

const horasPasantia = document.querySelectorAll(".horas-pasantia");

const contadorPostulacionesTarjeta = document.querySelectorAll(".contador-postulaciones");

const contadorAceptadosTarjeta = document.querySelectorAll(".contador-aceptados");



/*
=            BOTONES DE CADA TARJETA
*/

/*
    Estos botones también utilizan clases porque existen
    muchos dentro de la página.

    Cuando se haga clic en uno de ellos se buscará la tarjeta
    padre mediante:

    boton.closest(".tarjeta-pasantia")

    Así sabremos exactamente qué pasantía fue seleccionada.
*/

const btnEditar = document.querySelectorAll(".btn-editar");

const btnEliminar = document.querySelectorAll(".btn-eliminar");

const btnFinalizar = document.querySelectorAll(".btn-finalizar");



/*
=            FUNCIONES
*/

/*
Aquí irán funciones como:

crearPasantia()

editarPasantia()

eliminarPasantia()

finalizarPasantia()

actualizarContadores()

filtrarPasantias()

ordenarPasantias()

cargarPasantias()

guardarPasantias()

etc...
*/