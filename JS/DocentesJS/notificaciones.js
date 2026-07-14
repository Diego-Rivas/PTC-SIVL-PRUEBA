const uiNotificacionesDocente = {

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

        general: document.getElementById("docenteBuscarGeneral")

    },

    navbar: {

        notificaciones: document.getElementById("docenteCantidadNotificaciones")

    },

    filtros: {

        contenedor: document.getElementById("docenteListaFiltros"),

        items: document.querySelectorAll(".item-filtro")

    },

    preferencias: {

        push: document.getElementById("switchPush"),

        email: document.getElementById("switchEmail"),

        silenciar: document.getElementById("btnSilenciar")

    },

    notificaciones: {

        contenedor: document.getElementById("docenteListaNotificaciones"),

        tarjetas: document.querySelectorAll(".tarjeta-notificacion"),

        iconos: document.querySelectorAll(".circulo-icono"),

        titulos: document.querySelectorAll(".titulo-notificacion"),

        tiempos: document.querySelectorAll(".tiempo-notificacion"),

        descripciones: document.querySelectorAll(".descripcion-notificacion"),

        estado: document.querySelectorAll(".punto-sin-leer")

    },

    modal: {

        guardar: document.getElementById("btnGuardarSilencio"),

        cancelar: document.getElementById("btnCancelarSilencio")

    }

};