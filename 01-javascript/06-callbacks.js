//06-callbacks.js
const fs = require('fs'); //file system
// 06-ejemplo.txt -> Hola
console.log('Primero');

fs.readFile(
    './01-variables.js',
    'utf-8',
    (error, contenido) => {
        if(error){
            console.log({mensaje:'error leyendo contenido', error: error});
        }else{
            console.log(contenido);
            fs.readFile('./06-ejemplo.txt',
                'utf-8',
                (error, contenido) => {
                    console.log('SEGUNDO');
                })
        }
    }
);
console.log('TERCERO');


fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (error, contenido) => {
        if(error){
            console.log({mensaje:'error leyendo contenido', error: error});
        }else{
            fs.readFile('./01-variables.js',
                'utf-8',
                (errorVariable, contenidoVariable) => {
                    if(errorVariable){
                        console.log({mensaje:'error leyendo contenido 01-variable', error: errorVariable});
                    }else{
                        console.log(contenido, contenidoVariable);
                    }
                })
        }
    }
);
console.log('TERCERO');