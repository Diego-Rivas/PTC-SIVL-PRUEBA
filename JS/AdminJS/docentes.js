const uiAdministrador = {

    listaDocentes: {

        contenedor: document.getElementById("adminListaDocentes"),
        buscador: document.getElementById("adminBuscarDocentes")

    },

    grupos: {

        buscador: document.getElementById("adminBuscarGrupos"),
        tabla: document.getElementById("adminTablaGrupos")

    },

    detalle: {

        foto: document.getElementById("adminDetalleFoto"),
        nombre: document.getElementById("adminDetalleNombre"),
        cargo: document.getElementById("adminDetalleCargo"),
        quitarTodos: document.getElementById("adminQuitarTodos"),
        gruposSeleccionados: document.querySelectorAll(".adminGrupoSeleccionado"),
        botonAsignar: document.getElementById("adminAsignarGrupos")

    }

};