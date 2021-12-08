//04-funciones.js

function soloNumeros(a, b, c) {
    return a - b + c; //valor a devolver
}
//JS permite el uso de funciones sin validaciones
//soloNumeros('V', true, [1, 2, 3]);

function soloLetras(a, b, c) {  //undefined
    console.log(a, b, c);
}

//Funciones Nombradas - named functions
function funcionNombrada() {

}
funcionNombrada()
//Funciones Anónimas
const funcionSinNombre1 = function(){};
var funcionSinNombre2 = function(){};
let funcionSinNombre3 = function(){};
[].forEach(function(){});
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

//Funciones anónimas - Fat Arrow Functions
const funcionFatArrow1 = () => {};
const funcionFatArrow2 = () => {};
const funcionFatArrow3 = () => {};
[].forEach(()=>{});
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();

//Sintaxis
const functionFatArrow4 = () => {};
const functionFatArrow5 = (x) => {
    return x + 1;
};
const functionArrow6 = (x) => x + 1; // Omito el return y las llaves

//Si solo tengo un parámetro omito los paréntesis
const functionArrow7 = x => x + 1;
const functionFatArrow8 = (x,y,z) => x + y + z;

// ... ->   Parámetros infinitos que llegan en un arreglo
//          Solo se puede tener uno por función
function sumarNumeros(...otrosNumeros){
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return total;
    //return otrosNumeros.reduec((a, v) => a + v, 0);
}
console.log(sumarNumeros(1,2,3,4,5,6,7,8,9,10,11,12,13));