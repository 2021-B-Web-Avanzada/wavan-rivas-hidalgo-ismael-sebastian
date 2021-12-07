const fs = require('fs');

function promesaEscribirArchivo(path, contenidoActual, nuevoContenido) {
    const promesaEscribir = new Promise(
        (resolve, reject) => {
            nuevoContenido = contenidoActual + "\n" + nuevoContenido;
            fs.writeFile(
                path,
                nuevoContenido,
                "utf-8",
                () => {
                    console.log({nuevoContenido});
                    resolve(nuevoContenido);    //return numero
                }
            );
        }
    )
    return promesaEscribir
}

function promesaLeerArchivo(path){
    const promesaLeer = new Promise(
        (resolve, reject) => {
                 fs.readFile(path,
                    'utf-8',
                    (error, contenido) => {
                        console.log(contenido);
                        resolve(contenido);
                    })
        }
    )
    return promesaLeer
}
function ejercicio(path, nuevoContenido) {
    promesaLeerArchivo(path)
        .then(
            (datosLeidos) =>{
                return promesaEscribirArchivo(path, datosLeidos, nuevoContenido);
            }
        )
        .then(
            () =>{
                return promesaLeerArchivo(path)
            }
        )
}
ejercicio('./06-ejemplo.txt', 'Buenas mañanas 14141')