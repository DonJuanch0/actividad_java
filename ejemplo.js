//zona = "popayan"
/*sena = adso*/
console.log("sena");
console.log("comercio");
console.log("  # ");
console.log("  ### ");
console.log("  ##### ");

//variables 
var nombre = "juan david";
let casa = "ropa";
const pi = 3.14;
/*
let cajaDeSebas = carro;
console.log(cajaDeSebas);*/

//errores de sintaxis
/*let nombre1 = "anna";
let c = "4323";
let c-sena="adso";
let caja de anna = "moto";
let cds = "mani2";*/

//lo que si se puede 
let caja_de_sebas = "casa";
let CajaDeSebas01 = "casa";
let idUsuario = 1234;
let id_usuario = 1234;

//operadores
/* + - * / % ++ -- */
let suma = 5 + 5;
console.log(suma);
let resta = 10 - 5;
console.log(resta);
let multiplicacion = 5 * 5;
console.log(multiplicacion);
let division = 10 / 2;
console.log(division);

let nombre_persona = "juan"; //string
let fecha_reporte = new Date("2025-16-10"); //date
let pregunta = true; //boolean
let variable01; //undefined
let variable02 = null; //valor nulo
let var03 = "123"; //number

//object 
const aprendiz = {
    nombre: "juan",
    edad: 20,
    tipo_sede: "centro",
    saludar: function() {
        console.log("hola, mi nombre es " + this.nombre);
    }
}
console.log(aprendiz.nombre);
aprendiz.saludar();

//object
const futbol = {
    nombreDelEquipo: "real madrid",
    jugadores: 11,
    seleccion: "masculina",
    estadio: "bernabeu",
    saludar: function() {
        console.log("el nombre del equipo es " + this.nombreDelEquipo);
    }
};
console.log(futbol.nombreDelEquipo);

//arreglos
let frutas = ["manzana", "pera", "uva", "mango"];

console.log(frutas[2]);

let numeros = [1, 2, 3, 4, 5]; //resultado 4
console.log(numeros);
console.log(numeros[4]);
let prendics = ["andres", "carlos", "pablo", "maria", "raul"]; //resultado 3

console.log(prendics[3]);

let nombre = prompt ("ingrese su nombre");
alert("mi nombre es " + nombre);
