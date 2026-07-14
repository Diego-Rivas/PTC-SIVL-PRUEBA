const uiNotificaciones = {

    perfil: {

        foto: document.getElementById("empresaFotoPerfil"),
        nombre: document.getElementById("empresaNombre"),
        estadoConvenio: document.getElementById("empresaEstadoConvenio"),
        textoConvenio: document.getElementById("empresaTextoConvenio"),
        verPerfil: document.getElementById("empresaVerPerfil"),
        notificaciones: document.getElementById("empresaNotificaciones")

    },

    bandeja: {

        todas: document.getElementById("filtroTodas"),
        sinLeer: document.getElementById("filtroSinLeer"),
        postulaciones: document.getElementById("filtroPostulaciones"),
        horas: document.getElementById("filtroHoras"),
        alertas: document.getElementById("filtroAlertas"),

        contadorTodas: document.getElementById("contadorTodas"),
        contadorSinLeer: document.getElementById("contadorSinLeer"),
        contadorPostulaciones: document.getElementById("contadorPostulaciones"),
        contadorHoras: document.getElementById("contadorHoras"),
        contadorAlertas: document.getElementById("contadorAlertas")

    },

    preferencias: {

        alertasVacantes: document.getElementById("switchVacantes"),
        resumenEmail: document.getElementById("switchEmail")

    },

    notificaciones: {

        contenedor: document.getElementById("contenedorNotificaciones"),
        marcarLeidas: document.getElementById("btnMarcarLeidas")

    },

    modal: {

        opcionTodas: document.getElementById("opcionTodas"),
        opcionPostulaciones: document.getElementById("opcionPostulaciones"),
        opcionHoras: document.getElementById("opcionHoras"),
        aplicar: document.getElementById("aplicarFiltro")

    }

};