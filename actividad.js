let suma = prompt ("ingrese el primer numero a sumar:");
let suma2 = prompt ("ingrese el segundo numero a sumar:");
let resultado = parseInt(suma) + parseInt(suma2);
alert("el resultado de la suma es: " + resultado);
console.log(  "suma:" + resultado);

let resta = prompt ("ingrese el primer numero a restar:");
let resta2 = prompt ("ingrese el segundo numero a restar:");
let resultado2 = parseInt(resta) - parseInt(resta2);
alert("el resultado de la resta es: " + resultado2);
console.log( "resta:" + resultado2);

let multiplicacion = prompt ("ingrese el primer numero a multiplicar:");
let multiplicacion2 = prompt ("ingrese el segundo numero a multiplicar:");
let resultado3 = parseInt(multiplicacion) * parseInt(multiplicacion2);
alert("el resultado de la multiplicacion es: " + resultado3);
console.log(   "multiplicacion:" + resultado3);

let division = prompt ("ingrese el primer numero a dividir:");
let division2 = prompt ("ingrese el segundo numero a dividir:");
let resultado4 = parseInt(division) / parseInt(division2);
alert("el resultado de la division es: " + resultado4);
console.log(   "division:" + resultado4);

//reto 2

let nota1 = prompt ("ingrese la nota 1 de la asignatura:");
let nota2 = prompt ("ingrese la nota 2 de la asignatura:");
let nota3 = prompt ("ingrese la nota 3 de la asignatura:");
let nota4 = prompt ("ingrese la nota 4 de la asignatura:");
let nota5 = prompt ("ingrese la nota 5 de la asignatura:");
const promedio_notas = nota1 + nota2 + nota3 + nota4 + nota5;
let promedio = parseInt(promedio_notas) / 5;
alert("el promedio de las notas es: " + promedio);
console.log( "promedio de las notas:" + promedio);

//reto 3

const nombre_persona = prompt ("ingrese su nombre completo:");
const estudiante ={
    nombre_persona: nombre_persona,
    edad: prompt ("ingrese su edad:"),
    saludar: function() {
        console.log("hola, mi nombre es " + this.nombre_persona);
    }
}
console.log(   "nombre_persona:" + estudiante.nombre_persona);
console.log(   "edad:" + estudiante.edad);

alert("hola, mi nombre es " + estudiante.nombre_persona + " y tengo " + estudiante.edad + " años.");


let materias = ["matematicas", "fisica", "ingles", "ciencias"];
console.log( "materias:" + materias);

//Mayor y menor de un arreglo
let numerosTexto = prompt("Ingrese al menos dos numeros (ej: 8, 2, 14, 6, 9, 1):");
const numeros = numerosTexto.split(",").map(n => Number(n.trim()));
let mayor = numeros[0];
let menor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log("Lista de números: ", numeros);
console.log("Número mayor: " + mayor);
console.log("Número menor: " + menor);


//reto 5

let nombre_usuario = prompt("Ingrese su nombre:");
console.log("el nombre del usuario es " + nombre_usuario);
let edad_usuario = prompt("Ingrese su edad:");
console.log("la edad del usuario es " + edad_usuario);
let telefono_usuario = prompt("Ingrese su número de teléfono:");
console.log("el número de teléfono del usuario es " + telefono_usuario);
let peso_usuario = prompt("Ingrese su peso:");
console.log("el peso del usuario es " + peso_usuario);
let altura_usuario = prompt("Ingrese su altura:");
console.log("la altura del usuario es " + altura_usuario);





