const uiCrearOferta = {

    perfil: {

        foto: document.getElementById("empresaFotoPerfil"),

        tipo: document.getElementById("empresaTipo"),

        nombre: document.getElementById("empresaNombre"),

        verPerfil: document.getElementById("empresaVerPerfil")

    },

    formulario: {

        formulario: document.getElementById("formCrearOferta"),

        regresar: document.getElementById("btnRegresar")

    },

    informacionBasica: {

        titulo: document.getElementById("ofertaTitulo"),

        especialidad: document.getElementById("ofertaEspecialidad"),

        jornada: document.getElementById("ofertaJornada"),

        modalidad: document.getElementById("ofertaModalidad")

    },

    descripcion: {

        texto: document.getElementById("ofertaDescripcion"),

        contador: document.getElementById("contadorDescripcion")

    },

    requisitos: {

        inputHabilidad: document.getElementById("inputHabilidad"),

        listaHabilidades: document.getElementById("empresaListaHabilidades"),

        contadorHabilidades: document.getElementById("contadorHabilidades"),

        preview: document.getElementById("ofertaPreviewRequisitos")

    },

    detalles: {

        salario: document.getElementById("ofertaSalario"),

        fechaLimite: document.getElementById("ofertaFechaLimite"),

        vacantes: document.getElementById("ofertaVacantes"),

        ubicacion: document.getElementById("ofertaUbicacion")

    },

    vistaPrevia: {

        titulo: document.getElementById("ofertaVistaPrevia"),

        empresa: document.getElementById("ofertaPreviewEmpresa"),

        jornada: document.getElementById("previewJornada"),

        descripcion: document.getElementById("ofertaPreviewDescripcion")

    },

    botones: {

        cancelar: document.getElementById("btnCancelar"),

        publicar: document.getElementById("btnPublicar")

    }

};

// ===============================
// REQUISITOS
// ===============================

uiCrearOferta.requisitos.inputHabilidad.addEventListener("keydown", manejarAgregarHabilidad);

function manejarAgregarHabilidad(evento){

    if(evento.key !== "Enter") return;

    evento.preventDefault();

    agregarHabilidad();

}

function agregarHabilidad(){

    const texto = uiCrearOferta.requisitos.inputHabilidad.value.trim();

    if(texto === "") return;

    const etiqueta = document.createElement("span");

    etiqueta.className =
        "habilidad-item bg-light-subtle border text-secondary rounded-2 px-2 py-1 d-inline-flex align-items-center gap-1";

    etiqueta.innerHTML = `
        ${texto}
        <i class="bi bi-x eliminar-habilidad" style="cursor:pointer"></i>
    `;

    etiqueta.querySelector(".eliminar-habilidad").addEventListener("click", function(){

        eliminarHabilidad(etiqueta);

    });

    uiCrearOferta.requisitos.listaHabilidades.appendChild(etiqueta);

    uiCrearOferta.requisitos.inputHabilidad.value = "";

    actualizarContadorHabilidades();

}

function eliminarHabilidad(etiqueta){

    etiqueta.remove();

    actualizarContadorHabilidades();

}

function actualizarContadorHabilidades(){

    const total = uiCrearOferta.requisitos.listaHabilidades.querySelectorAll(".habilidad-item").length;

    uiCrearOferta.requisitos.contadorHabilidades.textContent =
        `${total} habilidad${total !== 1 ? "es" : ""}`;

}

actualizarContadorHabilidades();