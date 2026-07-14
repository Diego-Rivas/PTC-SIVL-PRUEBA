const uiPasantiasDocente = {

    perfil: {

        foto: document.getElementById("docenteFotoPerfil"),
        nombre: document.getElementById("docenteNombre"),
        especialidad: document.getElementById("docenteEspecialidad"),
        botonPerfil: document.getElementById("docenteVerPerfil")

    },

    grupos: {

        contenedor: document.getElementById("docenteListaGrupos"),
        tarjetas: document.getElementsByClassName("btn-grupo-lateral")

    },

    buscadores: {

        vacantes: document.getElementById("docenteBuscarVacante"),
        estudiantes: document.getElementById("docenteBuscarEstudiante")

    },

    vacantes: {

        contenedor: document.getElementById("docenteListaVacantes"),

        tarjetas: document.getElementsByClassName("tarjeta-vacante"),
        logo: document.getElementsByClassName("logo-vacante"),
        nombre: document.getElementsByClassName("nombre-vacante"),
        empresa: document.getElementsByClassName("empresa-vacante"),
        cupos: document.getElementsByClassName("cupos-vacante"),
        modalidad: document.getElementsByClassName("modalidad-vacante")

    },

    estudiantes: {

        contenedor: document.getElementById("docenteListaEstudiantes"),

        tarjetas: document.getElementsByClassName("tarjeta-estudiante"),
        avatar: document.getElementsByClassName("avatar-estudiante"),
        nombre: document.getElementsByClassName("nombre-estudiante"),
        grupo: document.getElementsByClassName("grupo-estudiante"),
        horas: document.getElementsByClassName("horas-estudiante"),
        barra: document.getElementsByClassName("barra-progreso"),
        porcentaje: document.getElementsByClassName("porcentaje-estudiante"),
        checkbox: document.getElementsByClassName("checkbox-estudiante")

    },

    detalle: {

        empresa: document.getElementById("docenteEmpresaAsignacion"),
        vacante: document.getElementById("docenteVacanteAsignacion"),
        modalidad: document.getElementById("docenteModalidadAsignacion"),
        duracion: document.getElementById("docenteDuracionAsignacion")

    },

    estudianteSeleccionado: {

        contenedor: document.getElementById("docenteEstudianteSeleccionado"),
        foto: document.getElementById("detalleFotoEstudiante"),
        nombre: document.getElementById("detalleNombreEstudiante"),
        grupo: document.getElementById("detalleGrupoEstudiante"),
        horas: document.getElementById("detalleHorasEstudiante"),
        barra: document.getElementById("detalleBarraProgreso"),
        porcentaje: document.getElementById("detallePorcentajeEstudiante")

    },

    botones: {

        asignar: document.getElementById("docenteAsignarPasantia")

    }

};