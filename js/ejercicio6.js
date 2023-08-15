/**
 * Hola equipo espero estén pasando un muy buen fin de semana, aqui les dejo un ejercicio a modo de practica.
 * no es obligatorio entonces no se preocupen
 * 
 * Realizar el pedido de 4 datos personales:
 * Nombre
 * Edad
 * Pais
 * Habilidad
 * 
 * El campo habilidad ponen si es zurda o derecha la persona
 * El algoritmo es una beca que solo se le dara a personas de colombia o ecuador
 * Mayores de 18 años
 * Y que sea zurda
 * 
 * Debe salir mensaje de 
 * "Quedas registrado al cupo de la beca"
 * "No cumples los requisitos"
 */

let name = ""
let age = ""
let country = ""
let skill = ""

function recolectData(){
    name = prompt("Enter your name: ")
    age = prompt("Enter your age: ")
    country = prompt("Enter your country: ")
    skill = prompt("Enter your skill (Left or Right): ")
}

function showData(){
    if (age > 18 && country == "Colombia" || "Ecuador" && skill == "Left") {
        alert("Quedas registrado para el cupo de la beca")
    }
    else
        alert("No cumples con los requisitos")

}
