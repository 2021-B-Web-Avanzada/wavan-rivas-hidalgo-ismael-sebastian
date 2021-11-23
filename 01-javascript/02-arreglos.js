//02-arreglo.js
let arreglo = [6,7,8,9,10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true, 1, 1.1, "Adrian", 'Vidente', undefined, null, {}, [1,2]];
arreglo = [6,7,8,9,10];

//for of
for(let numero of arreglo) {    //Valores
    console.log('numero', numero);
}
//for in
for(let indice in arreglo) {    //Indice
    arreglo[indice];
    console.log('indice', indice);
}

let objetoPrueba = {a: '1',b: '2', c: '3'};
for(let llave in objetoPrueba) {    //llaves
    console.log('lave', llave);
}

//Clonado de arreglos
let arregloNumeros = [1,2,3,4,5];
let arregloClonado = Object.assign([], arregloNumeros);
console.log(arregloNumeros);
console.log(arregloClonado);
arregloNumeros[0] = 200;
arregloClonado[0] = 100;
console.log(arregloNumeros);
console.log(arregloClonado);

arreglo.push(11); // Añadir al final un elemento
arreglo.pop(); // Eliminar al final un elemento
arreglo.unshift(5); // Añadir al principio del arreglo
console.log(arreglo);

//Agregar en el índice 0
arreglo.splice(0,1,4);
//[4,5,6,7,8,9,10]
const  indiceNueve = arreglo.indexOf(9); // Encuentra el primer elemento y devuelve el índice
console.log(arreglo);
arreglo.splice(indiceNueve, 2);
//[4,5,6,7,8]
console.log(arreglo);


