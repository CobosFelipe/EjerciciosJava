let departamento = prompt("Ingrese el nombre de un departamento:");
let actividad = prompt("Ingrese una actividad: turismo, comida o museo");

if (
  departamento === null ||
  (departamento === "" && actividad === null) ||
  actividad == ""
) {
  alert("Opcion invalida");
} else {
  departamento = departamento.toLowerCase();
  actividad = actividad.toLocaleLowerCase();
  if (departamento === "cundinamarca") {
    alert(
      "El lugar seleccionado es: " +
        departamento +
        " y la actividad: " +
        actividad +
        "\n A continuacion será redirigido a una web para mas información"
    );
    if (actividad === "turismo") {
      window.open(
        "https://colombia.travel/es/cerca-de-bogota-soacha-guatavita-y-la-calera"
      );
    } else if (actividad === "comida") {
      window.open("https://goo.su/CBjGmG");
    } else if (actividad === "museo") {
      window.open("https://goo.su/pVgn8hg");
    }
  } else if (departamento === "quindio") {
    alert(
      "El lugar seleccionado es: " +
        departamento +
        " y la actividad: " +
        actividad +
        "\n A continuacion será redirigido a una web para mas información"
    );
    if (actividad === "turismo") {
      window.open("https://colombia.travel/es/armenia");
    } else if (actividad === "comida") {
      window.open("https://goo.su/xmYyZrr");
    } else if (actividad === "museo") {
      window.open("https://goo.su/jA6C");
    }
  } else if (departamento === "antioquia") {
    alert(
      "El lugar seleccionado es: " +
        departamento +
        " y la actividad: " +
        actividad +
        "\n A continuacion será redirigido a una web para mas información"
    );
    if (actividad === "turismo") {
      window.open("https://colombia.travel/es/medellin");
    } else if (actividad === "comida") {
      window.open("https://goo.su/VbWYB");
    } else if (actividad === "museo") {
      window.open("https://goo.su/ilFBd");
    }
  } else if (departamento === "valle") {
    alert(
      "El lugar seleccionado es: " +
        departamento +
        " y la actividad: " +
        actividad +
        "\n A continuacion será redirigido a una web para mas información"
    );
    if (actividad === "turismo") {
      window.open("https://colombia.travel/es/cali");
    } else if (actividad === "comida") {
      window.open("https://goo.su/A4vtK1");
    } else if (actividad === "museo") {
      window.open("https://goo.su/VHPh");
    }
  } else alert("Opcion ingresada es invalida");
}