// Logica y algoritmos
// Actividad: dirección, estado civil, cedula, celular, correo, salario
// Inglés

let address = ""
let civilState = ""
let id = ""
let telephone = ""
let email = ""
let salary = ""

function registerData(){
    address = prompt("Enter the address data: ")
    civilState = prompt("Enter the civil state data: ")
    id = prompt("Enter the ID data: ")
    telephone = prompt("Enter the telephone number: ")
    email = prompt("Enter de email address: ")
    salary = prompt("Enter salary data: ")
}

function showData(){
    alert("The addres entered is: " + address + "\n the civil state is: " + civilState + "\n the ID data is: " + id + "\n the telephone number is: " + telephone + "\n the email address is: " + email + "\n the salary data is: " + salary)
}