const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//Funciones como parámetros
//Enviamos una función como TRUTY / FALSY
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto){
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Cristian"; // Expresion ===
        }
    );
console.log('respuestaFind', respuestaFind); //Cristian // Si no se encuentra devuelve undefined
// console.log('respuestaFindXDD', arreglo.find('Cristian')); //Si no es una función da error

//FINDINDEX
const respuestaIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arreglocComleto){
            return valorActual.nombre === "Cristan";
        }
    );
console.log('respuestaIndex', respuestaIndex);

//FOREACH
//itero el arreglo
const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arreglocComleto){
           console.log('valorActual', valorActual)
        }
    );
console.log('respuestaForEach', respuestaForEach); //La respuesta siempre es undefined

//MAP (Modificar o MUTAR el arreglo y devuelve un nuevo arreglo)
//envíamos los datos del nuevo arreglo
//devuelve el nuevo arreglo
const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual, arregloCompleto) => {
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
            };
            return nuevoElemento
        }
    );
console.log('respuestaMap', respuestaMap);

//FILTER (filtrar el arreglo)
//enviamos expresiones TRUTY FALSY
//devuelve los elementos que cumplen esa condición

const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota >= 14;
        }
    );
console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);


// SOME
// Devuelve booleano
// "Si alguno cumple la condición" (OR)
const respuestaSome = arreglo
    .some(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nota < 9;
        }
    );
console.log('respuestaSome', respuestaSome);

//EVERY
// Devuelve booleano
// "Si todos cumplen la condición" (AND)
const respuestaEvery = arreglo
    .every(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nota > 14;
        }
    );
console.log('respuestaEvery', respuestaEvery);