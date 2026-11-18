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


// Lista de ejercicios disponibles en nuestro gimnasio
const ejercicios = [
    "Sentadillas",
    "Flexiones",
    "Abdominales",
    "Dominadas",
    "Plancha"
];
// Agregamos un ejercicio al final de la lista
ejercicios.push("Burpees");

console.log("Ejercicios después de agregar Burpees:", ejercicios);

// Agregamos un ejercicio prioritario al principio de la lista
ejercicios.unshift("Calentamiento");

console.log("Ejercicios después de agregar Calentamiento:", ejercicios);

// Eliminamos el último ejercicio de la lista
const ejercicioEliminado = ejercicios.pop();

// Buscamos un ejercicio dentro de la lista
const respuestaBusqueda = prompt("¿Qué ejercicio querés buscar?");
const ejercicioBuscado = respuestaBusqueda === null ? "" : respuestaBusqueda.trim();

const ejerciciosMinusculas = ejercicios.map(ejercicio => ejercicio.toLowerCase());
const busquedaMinusculas = ejercicioBuscado.toLowerCase();

if (ejerciciosMinusculas.includes(busquedaMinusculas)) {
    const posicion = ejerciciosMinusculas.indexOf(busquedaMinusculas);

    console.log("El ejercicio " + ejercicios[posicion] +
        " está en la posición " + posicion + ".");
} else if (ejercicioBuscado === "") {
    console.log("No ingresaste ningún ejercicio para buscar.");
} else {
    console.log("El ejercicio " + ejercicioBuscado +
        " no está en la lista.");
}

console.log("Se ha eliminado el elemento: " + ejercicioEliminado);

// Reemplazamos un ejercicio utilizando su índice
ejercicios.splice(3, 1, "Estocadas");

console.log("Ejercicios después del reemplazo:", ejercicios);

// Función para mostrar todos los ejercicios del gimnasio
function mostrarEjercicios(lista) {
    console.log("--- LISTA DE EJERCICIOS DEL GIMNASIO ---");

    for (const ejercicio of lista) {
        console.log("Ejercicio: " + ejercicio);
    }

    console.log("Total de ejercicios: " + lista.length);
}

mostrarEjercicios(ejercicios);