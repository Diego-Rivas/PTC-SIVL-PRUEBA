const uiAdministrador = {

    perfil: {

        foto: document.getElementById("adminFotoPerfil"),
        nombre: document.getElementById("adminNombre"),
        verPerfil: document.getElementById("adminVerPerfil")

    },

    vacantes: {

        buscador: document.getElementById("adminBuscarVacante"),
        filtroEspecialidad: document.getElementById("adminFiltroEspecialidad"),
        lista: document.getElementById("adminListaVacantes")

    },

    estudiantes: {

        buscador: document.getElementById("adminBuscarEstudiante"),
        lista: document.getElementById("adminListaEstudiantes")

    },

    asignacion: {

        empresa: document.getElementById("adminEmpresaAsignacion"),
        vacante: document.getElementById("adminVacanteAsignacion"),
        modalidad: document.getElementById("adminModalidadAsignacion"),
        duracion: document.getElementById("adminDuracionAsignacion")

    },

    estudianteSeleccionado: {

        contenedor: document.getElementById("adminEstudianteSeleccionado"),
        foto: document.getElementById("detalleFotoEstudiante"),
        nombre: document.getElementById("detalleNombreEstudiante"),
        grupo: document.getElementById("detalleGrupoEstudiante"),
        horas: document.getElementById("detalleHorasEstudiante"),
        barraProgreso: document.getElementById("detalleBarraProgreso"),
        porcentaje: document.getElementById("detallePorcentajeEstudiante")

    },

    botonAsignar: document.getElementById("adminAsignarPasantia")

};
