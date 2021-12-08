const fs = require('fs');

function promesaEsPar(numero){
    const miPrimerPromesa = new Promise(
        (resolve,   //return
                reject      //throw
                ) => {
            if(numero % 2 == 0) {
                resolve(numero);    //return numero
            } else {
                reject('No es par =( ');
            }
        }
    )
    return miPrimerPromesa
}

function promesaElevarAlCuadrado(numero){
    const miPrimerPromesa = new Promise(
    (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero,2);
            resolve(numeroElevadoAlCuadrado);
        }
    );
    return miPrimerPromesa
}

promesaEsPar(6)
    .then(      //try
        (datosPromesa) => {
            console.log(datosPromesa);
            return promesaElevarAlCuadrado(datosPromesa);
        }
    )
    .then(
        (datosElevarAlCuadrado) => {
            console.log(datosElevarAlCuadrado);
        }
    )
    .catch(     //catch
        (error) => {
            console.log(error);
        }
    )
    .finally()