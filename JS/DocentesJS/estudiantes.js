const uiEstudiantesDocente = {

    perfil: {

        foto: document.getElementById("docenteFotoPerfil"),
        nombre: document.getElementById("docenteNombre"),
        especialidad: document.getElementById("docenteEspecialidad"),
        botonPerfil: document.getElementById("docenteVerPerfil")

    },

    grupos: {

        contenedor: document.getElementById("docenteListaGrupos")

    },

    accionesRapidas: {

        asignarPasantias: document.getElementById("docenteAsignarPasantias"),
        registrarHoras: document.getElementById("docenteRegistrarHoras"),
        nuevaAsignacion: document.getElementById("docentenuevaAsignacion")

    },

    buscador: document.getElementById("docenteBuscarEstudiante"),

    tabla: {

        contenedor: document.getElementById("docenteTablaEstudiantes"),
        filas: document.querySelectorAll(".fila-estudiante")

    },

    estadisticas: {

        totalEstudiantes: document.getElementById("docenteTotalEstudiantes"),
        totalHoras: document.getElementById("docenteTotalHoras"),
        totalPasantias: document.getElementById("docenteTotalPasantias")

    }

};
