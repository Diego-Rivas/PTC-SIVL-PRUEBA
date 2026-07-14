const uiOfertasLaborales = {

    perfil: {

        foto: document.getElementById("empresaFotoPerfil"),
        tipo: document.getElementById("empresaTipo"),
        nombre: document.getElementById("empresaNombre"),
        verPerfil: document.getElementById("empresaVerPerfil")

    },

    accionesRapidas: {

        crearVacante: document.getElementById("empresaCrearVacante"),
        gestionarPasantes: document.getElementById("empresaGestionarPasantes"),
        registrarHoras: document.getElementById("empresaRegistrarHoras"),
        verPostulaciones: document.getElementById("empresaVerPostulaciones")

    },

    estadisticas: {

        ofertasActivas: document.getElementById("empresaOfertasActivas"),
        postulaciones: document.getElementById("empresaPostulaciones"),
        contrataciones: document.getElementById("empresaContrataciones"),
        ofertasCerradas: document.getElementById("empresaOfertasCerradas")

    },

    filtros: {

        todas: document.getElementById("empresaFiltroTodas"),
        activas: document.getElementById("empresaFiltroActivas"),
        cerradas: document.getElementById("empresaFiltroCerradas"),
        ordenar: document.getElementById("empresaOrden")

    },

    tabla: {

        contenedor: document.getElementById("empresaTablaOfertas"),
        lista: document.getElementById("empresaListaOfertas")

    }

};

// Clases utilizadas

// .fila-oferta
// .imagen-oferta
// .titulo-oferta
// .especialidad-oferta
// .tipo-oferta
// .modalidad-oferta
// .estado-oferta
// .postulaciones-oferta
// .fecha-publicacion
// .tiempo-publicado

// .btn-ver-postulantes
// .btn-editar
// .btn-finalizar
// .btn-eliminar