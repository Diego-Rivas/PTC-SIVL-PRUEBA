const uiAdministrador = {

    filtros: {

        administradores: document.getElementById("adminFiltroAdmins"),
        docentes: document.getElementById("adminFiltroDocentes"),
        estudiantes: document.getElementById("adminFiltroEstudiantes"),
        empresas: document.getElementById("adminFiltroEmpresas")

    },

    formulario: {

        nombre: document.getElementById("UsuarioNombre"),
        apellido: document.getElementById("UsuarioApellido"),
        correo: document.getElementById("UsuarioCorreo"),
        especialidad: document.getElementById("UsuarioEspecialidad"),
        contraseña: document.getElementById("UsuarioContraseña"),
        confirmarContraseña: document.getElementById("UsuarioConfirmarContraseña"),
        grupo: document.getElementById("UsuarioGrupo"),
        añoAcademico: document.getElementById("UsuarioAñoAcademico"),

        registrar: document.getElementById("adminRegistrarUsuario"),
        cancelar: document.getElementById("adminCancelarUsuario")

    },

    tabla: {

        usuarios: document.getElementById("adminTablaUsuarios")

    }

};