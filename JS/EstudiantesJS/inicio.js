
// Datos (después vendrán de la API)

const datos = {

    labels:[
        "1 May",
        "8 May",
        "15 May",
        "22 May",
        "29 May"
    ],

    horas:[
        8,
        15,
        22,
        18,
        37
    ]

};

// Crear gráfico

const ctx = document.getElementById("graficoHoras");

new Chart(ctx,{

    type:"line",

    data:{

        labels:datos.labels,

        datasets:[{

            label:"Horas",

            data:datos.horas,

            borderColor:"#4f46e5",

            backgroundColor:"rgba(79,70,229,.12)",

            borderWidth:3,

            pointRadius:5,

            pointHoverRadius:7,

            pointBackgroundColor:"#4f46e5",

            pointBorderColor:"#ffffff",

            pointBorderWidth:2,

            fill:true,

            tension:.45

        }]

    },

    options:{

        responsive:true,

        maintainAspectRatio:false,

        plugins:{

            legend:{
                display:false
            },

            tooltip:{

                backgroundColor:"#1e1b4b",

                padding:12,

                displayColors:false,

                callbacks:{
                    label:function(context){

                        return context.parsed.y+" horas";

                    }
                }

            }

        },

        scales:{

            y:{

                beginAtZero:true,

                max:40,

                ticks:{
                    stepSize:10
                },

                grid:{
                    color:"#f1f5f9"
                },

                border:{
                    display:false
                }

            },

            x:{

                grid:{
                    display:false
                },

                border:{
                    display:false
                }

            }

        }

    }

});


// Dashboard del Estudiante

const dashboard = {
   
    // Bienvenida

    bienvenida: {

        nombre: document.getElementById("estNombre")

    },
  
    // Estado de la pasantía
  
    estado: {

        estado: document.getElementById("estEstadoPasantia"),

        fechaInicio: document.getElementById("estEstadoFecha")

    },

  
    // Horas registradas
  

    horas: {

        registradas: document.getElementById("estHorasRegistradas"),

        totales: document.getElementById("estHorasTotales"),

        barra: document.getElementById("estBarraHoras"),

        porcentaje: document.getElementById("estProgresoHoras"),

        grafico: document.getElementById("graficoHoras")

    },

    // Información de la pasantía
  
    pasantia: {

        empresa: document.getElementById("estNombreEmpresa"),

        cargo: document.getElementById("estCargo"),

        ubicacion: document.getElementById("estUbicacion"),

        fechaInicio: document.getElementById("estPasantiaFechaInicio"),

        supervisor: document.getElementById("estSupervisor"),

        horasActuales: document.getElementById("estHorasActuales"),

        horasMeta: document.getElementById("estHorasMeta"),

        barraProgreso: document.getElementById("estBarraProgreso"),

        porcentajeProgreso: document.getElementById("estPorcentajeProgreso")

    },
  
    // Perfil
  
    perfil: {

        foto: document.getElementById("estFoto"),

        nombre: document.getElementById("perfilNombre"),

        especialidad: document.getElementById("perfilEspecialidad"),

        anio: document.getElementById("perfilAnio"),

        disponibilidad: document.getElementById("perfilDisponibilidad")

    }

};

