//Challenge
let departamento = prompt("Ingrese el nombre de un departamento: ");

if (departamento === null || departamento === "") {
  alert("Opcion invalida");
} else {
  departamento = departamento.toLowerCase();
  if (departamento === "cundinamarca") {
    alert("La capital de Cundinamarca es: BogotÃ¡");
  } else if (departamento === "quindio") {
    alert("La capital del Quindio es: Armenia");
  } else if (departamento === "antioquia") {
    alert("La capital de Antioquia es: Medellin");
  } else if (departamento === "valle" || departamento === "valle del cauca") {
    alert("La capital del Valle es: Cali");
  } else alert("El valor ingresado es un valor invalido");
}