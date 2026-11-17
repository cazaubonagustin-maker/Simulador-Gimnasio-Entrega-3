function saludarUsuario(nombre) {
    alert("¡Bienvenido al Simulador de Gimnasio, " + nombre + "!");
}


let nombreUsuario = prompt("¿Cómo te llamás?");

if (nombreUsuario === null || nombreUsuario.trim() === "") {
    nombreUsuario = "Usuario";
}
saludarUsuario(nombreUsuario);
function sumarMinutos(totalActual, minutosNuevos) {
    return totalActual + minutosNuevos;
}

let minutosTotales = 0;
let cantidadEntrenamientos = 0;


let continuar = "si";

while (continuar === "si") {
const respuestaMinutos = prompt("¿Cuántos minutos entrenaste?");

if (respuestaMinutos === null) {
    alert("Finalizaste el registro de entrenamientos.");
    break;
}

const minutosIngresados = Number(respuestaMinutos);

    
if (minutosIngresados > 0) {
    minutosTotales = sumarMinutos(minutosTotales, minutosIngresados);
    cantidadEntrenamientos++;
    alert("Entrenamiento registrado correctamente.");
} 
   else {
        alert("Ingresaste una cantidad de minutos inválida.");
    }

    
do {
    continuar = prompt("¿Querés registrar otro entrenamiento? Escribí si o no.");

    if (continuar === null) {
        continuar = "no";
    } else {
        continuar = continuar.toLowerCase().trim().replace("í", "i");
    }

    if (continuar !== "si" && continuar !== "no") {
        alert("Respuesta inválida. Escribí si o no.");
    }

} while (continuar !== "si" && continuar !== "no");
}
const convertirAHoras = (minutos) => {
    return minutos / 60;
};

const horasEntrenadas = convertirAHoras(minutosTotales);

function mostrarResumen(cantidad, minutos, horas) {
    const palabraEntrenamiento = cantidad === 1 ? "entrenamiento" : "entrenamientos";
    const palabraHora = horas === 1 ? "hora" : "horas";

    const mensaje = "Registraste " + cantidad + " " +
        palabraEntrenamiento + ", con un total de " +
        minutos + " minutos, equivalentes a " +
        horas + " " + palabraHora + ".";

    alert(mensaje);
    console.log(mensaje);
}
mostrarResumen(cantidadEntrenamientos, minutosTotales, horasEntrenadas);

