const uiCrearPasantia = {

    perfil: {

        foto: document.getElementById("empresaFotoPerfil"),

        tipo: document.getElementById("empresaTipo"),

        nombre: document.getElementById("empresaNombre"),

        verPerfil: document.getElementById("empresaVerPerfil")

    },

    formulario: {

        formulario: document.getElementById("formCrearPasantias"),

        regresar: document.getElementById("btnRegresar")

    },

    informacionBasica: {

        titulo: document.getElementById("pasantiaTitulo"),

        especialidad: document.getElementById("pasantiasEspecialidad"),

        horas: document.getElementById("pasantiasHoras"),

        modalidad: document.getElementById("pasantiasModalidad")

    },

    descripcion: {

        texto: document.getElementById("pasantiaDescripcion"),

        contador: document.getElementById("contadorDescripcion")

    },

    requisitos: {

        inputHabilidad: document.getElementById("inputHabilidad"),

        listaHabilidades: document.getElementById("empresaListaHabilidades"),

        contadorHabilidades: document.getElementById("contadorHabilidades")

    },

    detalles: {

        apoyo: document.getElementById("pasantiaApoyo"),

        fecha: document.getElementById("pasantiaFecha"),

        cupos: document.getElementById("pasantiaCupos"),

        ubicacion: document.getElementById("pasantiaUbicacion")

    },

    vistaPrevia: {

        titulo: document.getElementById("previewTitulo"),

        descripcion: document.getElementById("previewDescripcion"),

        especialidad: document.getElementById("previewEspecialidad"),

        modalidad: document.getElementById("previewModalidad"),

        horas: document.getElementById("previewHoras")

    },

    botones: {

        cancelar: document.getElementById("btnCancelar"),

        publicar: document.getElementById("btnPublicar")

    }

};

// ===============================
// REQUISITOS
// ===============================

uiCrearPasantia.requisitos.inputHabilidad.addEventListener(
    "keydown",
    manejarAgregarHabilidad
);

function manejarAgregarHabilidad(evento){

    if(evento.key !== "Enter") return;

    evento.preventDefault();

    agregarHabilidad();

}

function agregarHabilidad(){

    const texto =
        uiCrearPasantia.requisitos.inputHabilidad.value.trim();

    if(texto === "") return;

    const etiqueta = document.createElement("span");

    etiqueta.className =
        "bg-light-subtle border text-secondary rounded-2 px-2 py-1 d-inline-flex align-items-center gap-1";

    etiqueta.innerHTML = `
        ${texto}
        <i class="bi bi-x eliminar-habilidad" style="cursor:pointer"></i>
    `;

    etiqueta.querySelector(".eliminar-habilidad").addEventListener(
        "click",
        function(){

            eliminarHabilidad(etiqueta);

        }
    );

    uiCrearPasantia.requisitos.listaHabilidades.appendChild(etiqueta);

    uiCrearPasantia.requisitos.inputHabilidad.value = "";

    actualizarContadorHabilidades();

}

function eliminarHabilidad(etiqueta){

    etiqueta.remove();

    actualizarContadorHabilidades();

}

function actualizarContadorHabilidades(){

    const total =
        uiCrearPasantia.requisitos.listaHabilidades.children.length;

    uiCrearPasantia.requisitos.contadorHabilidades.textContent =
        `${total} habilidad${total !== 1 ? "es" : ""}`;

}

actualizarContadorHabilidades();