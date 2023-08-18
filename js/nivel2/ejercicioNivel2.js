//Variables globales
const btnEjercicioUno = document.getElementById("btnEjercicio1");
const btnEjercicioDos = document.getElementById("btnEjercicio2");
const btnEjercicioTres = document.getElementById("btnEjercicio3");
const btnEjercicioCuatro = document.getElementById("btnEjercicio4");
const btnDatosPersonales = document.getElementById("btnDatosPersonales");

/**
 * Ejercicio 1:
 * DOM (Document Objet Model)
 * Operaciones matematicas (Suma de dos numeros)
 */
function ejercicioUno() {
  const numero1 = parseFloat(prompt("Ingresa el primer valor a sumar: "));
  const numero2 = parseFloat(prompt("Ingresa el segundo valor a sumar: "));
  const suma = numero1 + numero2;
  alert(suma);
}

/**
 * Ejercicio 2:
 * DOM (Document Objet Model)
 * Operaciones matematicas (Resta de dos numeros)
 */
function ejercicioDos() {
  const numero1 = parseFloat(prompt("Ingresa el primer valor a restar: "));
  const numero2 = parseFloat(prompt("Ingresa el segundo valor a restar: "));
  const resta = numero1 - numero2;
  alert(resta);
}

/**
 * Ejercicio 3:
 * DOM (Document Objet Model)
 * Operaciones matematicas (División de dos numeros)
 */
function ejercicioTres() {
  const numero1 = parseFloat(prompt("Ingresa el valor a divir: "));
  const numero2 = parseFloat(
    prompt("Ingresa el valor entre el que quiere divir: ")
  );
  const division = numero1 / numero2;
  alert(division);
}

/**
 * Ejercicio 4:
 * DOM (Document Objet Model)
 * Operaciones matematicas (Multiplicación entre dos numeros)
 */
function ejercicioCuatro() {
  const numero1 = parseFloat(prompt("Ingresa el primer valor a multiplicar: "));
  const numero2 = parseFloat(prompt("Ingresa el primer valor a multiplicar: "));
  const multiplicacion = numero1 * numero2;
  alert(multiplicacion);
}

function datosPersonales() {
  // Datos ingresados por el usuario
  const nombre = prompt("Ingrese su nombre: ");
  const id = prompt("Ingrese su número de documento: ");
  const edad = parseInt(prompt("Ingrese su edad: "));
  const direccion = prompt("Ingrese su dirección: ");
  const telefono = prompt("Ingrese su telefono: ");
  const email = prompt("Ingrese su correo electronico: ");
  const blood = prompt("Ingrese su tipo de sangre: ");
  const eCivil = prompt("Ingrese su estado civil: ");
  // Etiquetas H2 a sobreescribir en el HTML
  const nombreHtml = document.getElementById("nombre");
  const idHtml = document.getElementById("id");
  const edadHtml = document.getElementById("edad");
  const direccionHtml = document.getElementById("direccion");
  const telefonoHtml = document.getElementById("telefono");
  const emailHtml = document.getElementById("email");
  const bloodHtml = document.getElementById("blood");
  const eCivilHtml = document.getElementById("eCivil");
  // Guardar datos en el HTML
  nombreHtml.innerHTML = "Tu nombre es: " + nombre;
  idHtml.innerHTML = "Tu numero de documento es: " + id;
  edadHtml.innerHTML = "Tu edad es: " + edad;
  direccionHtml.innerHTML = "Tu direccion es: " + direccion;
  telefonoHtml.innerHTML = "Tu telefono es: " + telefono;
  emailHtml.innerHTML = "Tu correo es: " + email;
  bloodHtml.innerHTML = "Tu tipo de sangre es: " + blood;
  eCivilHtml.innerHTML = "Tu eCivil es: " + eCivil;
}

// Eventos click
// onclick="ejercicio1()"
btnEjercicio1.onclick = function () {
  ejercicioUno();
};
btnEjercicio2.onclick = function () {
  ejercicioDos();
};
btnEjercicio3.onclick = function () {
  ejercicioTres();
};
btnEjercicio4.onclick = function () {
  ejercicioCuatro();
};
btnDatosPersonales.onclick = function () {
  datosPersonales();
};
