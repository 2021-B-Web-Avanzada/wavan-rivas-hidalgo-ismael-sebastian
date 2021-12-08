//03-funciones.ts
function sumarNumeros(numeroInicial) {
    var numerosInfinitos = []; //lista de datos como entrada
    for (var _i = 1 //lista de datos como entrada
    ; _i < arguments.length //lista de datos como entrada
    ; _i++ //lista de datos como entrada
    ) {
        numerosInfinitos[_i - 1] = arguments[_i]; //lista de datos como entrada
    }
    return numeroInicial;
}
//sumarNumeros('asd', 'asd') // Otros tipos de datos no están permitidos
sumarNumeros(1, 1, 2, 3, 4);
function imprimir(mensaje) {
    console.log('Hola ' + mensaje);
}
var arregloNumeros = [1, 2];
var arregloNumerosDos = [1, 2];
var arregloNumerosTres = [1, 'dos', true];
var arregloNumerosCuatro = [1, 'dos', true];
var arregloNumerosCinco = [1, 2];
arregloNumerosCinco = ['uno', 'dos'];
