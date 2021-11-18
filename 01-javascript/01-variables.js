// variables mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroUno = 8;
numeroUno = false;
numeroDos = true;
//variables inmutables
const  configuracionArchivos = "PDF"
//Vamos a preferir CONST > LET > Nunca VAR!


// Tipos de variables
const numero = 1; //number
const sueldo = 1.2; //number
const texto = "Ismael"; //string
const apellido = "Rivas"; //string
const booleanos = false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleanos);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof Number("asd")); //number
console.log(Number("asd")); //NoN

//Trutys y Falsys
if(""){
    console.log("String vacío es truty");
} else {
    console.log("String vacío es falsy");
}

if("Ismael"){
    console.log("String con datos es truty");
} else {
    console.log("String con datos es falsy");
}
//string vació es falso
//string con datos es verdadero


if(-1){
    console.log("Negativos es truty");
}else{
    console.log("Negativos es falsy");
}
if(0){
    console.log("Cero es truty");
}else{
    console.log("Cero es falsy");
}
if(-1){
    console.log("Positivos es truty");
}else{
    console.log("Positivos es falsy");
}

if(null){
    console.log("Null es truty");
}else{
    console.log("Null es falso");
}

if(undefined){
    console.log("Undefined es truty");
}else{
    console.log("Undefined es falso");
}

//Objeto JSON
const ismael = {
    nombre:"Ismael",
    apellido: 'Rivas',
    edad: 23,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'azul',
        talla: '38',
    },
    mascotas: ['Capu', 'Pestañas'],
};

//Acceso a las propiedades de un objeto
ismael.nombre;
ismael.apellido;
ismael["nombre"];
console.log(ismael);
ismael.nombre = "Sebastian";
console.log(ismael);
ismael["nombre"] = "Ismael";
ismael.sueldo;
console.log(ismael.sueldo);

ismael.sueldo = 1.2;
console.log(ismael.sueldo);
ismael["gastos"] = 0.8;
console.log(ismael.gastos);
ismael.nombre = undefined;
console.log(ismael);
console.log(Object.keys(ismael));
console.log(Object.values(ismael));

//Eliminar llaves
delete ismael.nombre;
console.log(ismael);

//Variables por valor o referencia
//Variables por valor en JS son las primitivas: number, string, boolean

let edadIsmael = 23;
let edadSebastian = edadIsmael; //referencia por valor
console.log(edadIsmael);
console.log(edadSebastian);

edadIsmael = edadIsmael + 1;
console.log(edadIsmael);
console.log(edadSebastian);

//Variables por referencia: object ({},[])
// let rafael = {
//     nombre: "Rafael"
// };
// let lenin = rafael;
// console.log(rafael);
// console.log(lenin);
// lenin.nombre = "Lenin";
// console.log(rafael);
// console.log(lenin);
//En objetos y variables en JS, si igualamos un arreglo a otra variable hacemos el guardado de la referencia de esa vaiable.
//Las dos variables apuntan al mismo objeto

// delete rafael.nombre;
// console.log(rafael);
// console.log(lenin);

//Clonado correcto de arreglos Object.assign
let rafael = {
    nombre: "Rafael"
};
let lenin = Object.assign({},rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);

//Clonado de arreglos
let arregloNumeros = [1,2,3,4,5];
let arregloClonado = Object.assign([], arregloNumeros);
console.log(arregloNumeros);
console.log(arregloClonado);
arregloNumeros[0] = 200;
arregloClonado[0] = 100;
console.log(arregloNumeros);
console.log(arregloClonado);


