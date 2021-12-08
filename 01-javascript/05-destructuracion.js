//05-destructuracion.js

//Destructuración de objetos
const ismael = {
    nombre: "Ismael"
};
const carolina = {
    nombre: "Carolina",
    apellido: "Eguez"
};
const ismaelCarolina = { //Creando una nueva referencia
    ...carolina,    //1 El orden es importante para las propiedades que se repiten
    ...ismael,      //2 El último reemplaza a los anteriores
};
console.log('ismaelCarolina', ismaelCarolina);

//Destructuración de arreglos
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo = [
    ...arregloUno,  //El orden importa
    ...arregloDos,
];
console.log('superArreglo', superArreglo);
console.log(...superArreglo);