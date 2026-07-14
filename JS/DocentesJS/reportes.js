const uiReportesDocente = {

    perfil: {

        foto: document.getElementById("docenteFotoPerfil"),
        nombre: document.getElementById("docenteNombre"),
        especialidad: document.getElementById("docenteEspecialidad"),
        botonPerfil: document.getElementById("docenteVerPerfil")

    },

    grupos: {

        contenedor: document.getElementById("docenteListaGrupos")

    },

    buscadores: {

        general: document.getElementById("docenteBuscarGeneral"),
        estudiantes: document.getElementById("docenteBuscarEstudiante")

    },

    estudiantes: {

        contenedor: document.getElementById("docenteListaEstudiantes"),

        tarjetas: document.querySelectorAll(".item-lista-alumno"),

        avatar: document.querySelectorAll(".mini-avatar-alumno"),

        nombre: document.querySelectorAll(".nombre-estudiante"),

        especialidad: document.querySelectorAll(".especialidad-estudiante"),

        flecha: document.querySelectorAll(".flecha-estudiante")

    },

    detalle: {

        foto: document.getElementById("detalleFotoEstudiante"),

        nombre: document.getElementById("detalleNombreEstudiante"),

        carrera: document.getElementById("detalleCarreraEstudiante"),

        horas: document.getElementById("detalleHorasEstudiante"),

        barra: document.getElementById("detalleBarraHoras")

    },

    reportes: {

        tabla: document.getElementById("docenteTablaReportes"),

        filas: document.querySelectorAll(".fila-reporte"),

        fecha: document.querySelectorAll(".fecha-reporte"),

        empresa: document.querySelectorAll(".empresa-reporte"),

        logoEmpresa: document.querySelectorAll(".logo-empresa"),

        descripcion: document.querySelectorAll(".descripcion-reporte"),

        horas: document.querySelectorAll(".horas-reporte")

    }

};