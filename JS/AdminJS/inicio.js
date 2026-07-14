const uiAdministrador = {


    estadisticas: {

        docentes: document.getElementById("adminTotalDocentes"),
        estudiantes: document.getElementById("adminTotalEstudiantes"),
        empresas: document.getElementById("adminTotalEmpresas")

    },

    grafico: {

        contenedor: document.getElementById("adminContenedorEspecialidades")

    },

    actividad: {

        contenedor: document.getElementById("adminActividadReciente")

    },

    accionesRapidas: {

        nuevoUsuario: document.getElementById("adminNuevoUsuario"),
        nuevaEspecialidad: document.getElementById("adminNuevaEspecialidad"),
        nuevoGrupo: document.getElementById("adminNuevoGrupo"),
        asignarGrupos: document.getElementById("adminAsignarGrupos")

    }

};

const especialidades = [

    {
        nombre: "Desarrollo de Software",
        estudiantes: 120
    },

    {
        nombre: "Contaduría",
        estudiantes: 85
    },

    {
        nombre: "Automotriz",
        estudiantes: 70
    },

    {
        nombre: "Arquitectura",
        estudiantes: 65
    },

    {
        nombre: "Diseño Gráfico",
        estudiantes: 55
    },

    {
        nombre: "Electrónica",
        estudiantes: 50
    },

    {
        nombre: "Electromecánica",
        estudiantes: 40
    },

    {
        nombre: "Energías Renovables",
        estudiantes: 25
    }

];

function cargarGraficoEspecialidades() {

    uiAdministrador.grafico.contenedor.innerHTML = "";

    const mayorCantidad = Math.max(
        ...especialidades.map(especialidad => especialidad.estudiantes)
    );

    especialidades.forEach(especialidad => {

        const porcentaje = (especialidad.estudiantes * 100) / mayorCantidad;

        const fila = document.createElement("div");
        fila.className = "d-flex align-items-center mb-2";

        fila.innerHTML = `

            <div class="etiqueta-grafico fw-medium text-secondary">

                ${especialidad.nombre}

            </div>

            <div class="contenedor-barra rounded-1 me-2 overflow-hidden">

                <div
                    class="barra-progreso-azul rounded-1"
                    style="width:${porcentaje}%">
                </div>

            </div>

            <div
                class="text-end fw-bold text-dark"
                style="width:30px; font-size:0.8rem;">

                ${especialidad.estudiantes}

            </div>

        `;

        uiAdministrador.grafico.contenedor.appendChild(fila);

    });

}

cargarGraficoEspecialidades();