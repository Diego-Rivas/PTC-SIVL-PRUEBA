const uiPasantes = {

    perfil: {

        foto: document.getElementById("empresaFotoPerfil"),
        tipo: document.getElementById("empresaTipo"),
        nombre: document.getElementById("empresaNombre"),
        verPerfil: document.getElementById("empresaVerPerfil")

    },

    resumen: {

        activos: document.getElementById("contadorPasantesActivos"),
        horasAcumuladas: document.getElementById("contadorHorasAcumuladas"),
        horasMes: document.getElementById("contadorHorasMes"),
        porFinalizar: document.getElementById("contadorPorFinalizar")

    },

    filtros: {

        todos: document.getElementById("btnFiltroTodos"),
        activos: document.getElementById("btnFiltroActivos"),
        finalizados: document.getElementById("btnFiltroFinalizados"),
        buscar: document.getElementById("inputBuscarPasante")

    },

    tabla: {

        cuerpo: document.getElementById("contenedorPasantes")

    },

    detalle: {

        cerrar: document.getElementById("btnCerrarDetalle"),

        foto: document.getElementById("detalleFoto"),
        nombre: document.getElementById("detalleNombre"),
        correo: document.getElementById("detalleCorreo"),
        estado: document.getElementById("detalleEstado"),

        horasTotales: document.getElementById("detalleHorasTotales"),
        horasAcumuladas: document.getElementById("detalleHorasAcumuladas"),

        progresoTexto: document.getElementById("detalleProgresotexto"),
        progresoBarra: document.getElementById("detalleProgresoBarra")

    },

    registro: {

        formulario: document.getElementById("formRegistroHoras"),
        fecha: document.getElementById("registroFecha"),
        horas: document.getElementById("registroHoras"),
        descripcion: document.getElementById("registroDescripcion"),
        guardar: document.getElementById("btnGuardarHoras")

    }

};

let filaSeleccionada = null;

const filas = [...uiPasantes.tabla.cuerpo.querySelectorAll("tr")];

filas.forEach(fila => {

    fila.addEventListener("click", () => {

        seleccionarPasante(fila);

    });

});

function seleccionarPasante(fila){

    filaSeleccionada = fila;

    const nombre =
        fila.cells[0].querySelector(".fw-bold").textContent;

    const correo =
        fila.cells[0].querySelector(".text-muted").textContent;

    const horas =
        fila.cells[1].textContent;

    const porcentaje =
        fila.querySelector(".progress-bar").style.width;

    const estado =
        fila.cells[3].textContent.trim();

    uiPasantes.detalle.nombre.textContent = nombre;

    uiPasantes.detalle.correo.textContent = correo;

    uiPasantes.detalle.horasTotales.innerHTML =
        `Horas requeridas:<br><strong class="text-dark">200 h</strong>`;

    uiPasantes.detalle.horasAcumuladas.innerHTML =
        `Acumuladas:<br><strong class="text-dark">${horas}</strong>`;

    uiPasantes.detalle.progresoTexto.textContent = porcentaje;

    uiPasantes.detalle.progresoBarra.style.width = porcentaje;

    if(estado === "Activo"){

        uiPasantes.detalle.estado.innerHTML = "● Activo";
        uiPasantes.detalle.estado.className = "text-success small fw-bold";

        uiPasantes.detalle.progresoBarra.className =
            "progress-bar bg-success";

    }else{

        uiPasantes.detalle.estado.innerHTML = "● Finalizado";
        uiPasantes.detalle.estado.className = "text-secondary small fw-bold";

        uiPasantes.detalle.progresoBarra.className =
            "progress-bar bg-secondary";

    }

}

uiPasantes.filtros.buscar.addEventListener("input", buscarPasante);

function buscarPasante(){

    const texto =
        uiPasantes.filtros.buscar.value.toLowerCase();

    filas.forEach(fila=>{

        fila.style.display =
            fila.textContent.toLowerCase().includes(texto)
            ? ""
            : "none";

    });

}

uiPasantes.filtros.todos.addEventListener("click",()=>filtrar("Todos"));

uiPasantes.filtros.activos.addEventListener("click",()=>filtrar("Activo"));

uiPasantes.filtros.finalizados.addEventListener("click",()=>filtrar("Finalizado"));

function filtrar(estado){

    activarBotonFiltro(estado);

    filas.forEach(fila=>{

        if(estado==="Todos"){

            fila.style.display="";

            return;

        }

        const textoEstado =
            fila.cells[3].textContent.trim();

        fila.style.display =
            textoEstado===estado
            ? ""
            : "none";

    });

}

function activarBotonFiltro(tipo){

    uiPasantes.filtros.todos.classList.remove("activo");

    uiPasantes.filtros.activos.classList.remove("activo");

    uiPasantes.filtros.finalizados.classList.remove("activo");

    if(tipo==="Todos")
        uiPasantes.filtros.todos.classList.add("activo");

    if(tipo==="Activo")
        uiPasantes.filtros.activos.classList.add("activo");

    if(tipo==="Finalizado")
        uiPasantes.filtros.finalizados.classList.add("activo");

}

uiPasantes.registro.guardar.addEventListener("click", registrarHoras);

function registrarHoras(){

    if(!filaSeleccionada){

        alert("Seleccione un pasante.");

        return;

    }

    const horasAgregar =
        Number(uiPasantes.registro.horas.value);

    if(horasAgregar<=0){

        alert("Ingrese horas válidas.");

        return;

    }

    let horasActuales =
        parseInt(filaSeleccionada.cells[1].textContent);

    horasActuales += horasAgregar;

    if(horasActuales>200){

        horasActuales=200;

    }

    filaSeleccionada.cells[1].textContent =
        horasActuales+" h";

    const porcentaje =
        Math.round(horasActuales/200*100);

    filaSeleccionada.querySelector(".progress-bar").style.width =
        porcentaje+"%";

    filaSeleccionada.querySelector(".progress + span").textContent =
        porcentaje+"%";

    if(porcentaje>=100){

        filaSeleccionada.cells[3].innerHTML=
            '<span class="badge bg-secondary-subtle text-secondary rounded-pill px-3 py-2 fw-bold">Finalizado</span>';

    }

    seleccionarPasante(filaSeleccionada);

    uiPasantes.registro.formulario.reset();

}

uiPasantes.detalle.cerrar.addEventListener("click", limpiarDetalle);

function limpiarDetalle(){

    uiPasantes.detalle.nombre.textContent="-";

    uiPasantes.detalle.correo.textContent="-";

    uiPasantes.detalle.estado.textContent="-";

    uiPasantes.detalle.horasTotales.innerHTML=
        "Horas requeridas:<br><strong class='text-dark'>-</strong>";

    uiPasantes.detalle.horasAcumuladas.innerHTML=
        "Acumuladas:<br><strong class='text-dark'>-</strong>";

    uiPasantes.detalle.progresoTexto.textContent="0%";

    uiPasantes.detalle.progresoBarra.style.width="0%";

    filaSeleccionada=null;

}