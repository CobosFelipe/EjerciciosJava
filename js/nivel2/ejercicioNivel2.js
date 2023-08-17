// Variables globales
const btnEjercicioUno = document.getElementById("btnEjercicio1");

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
