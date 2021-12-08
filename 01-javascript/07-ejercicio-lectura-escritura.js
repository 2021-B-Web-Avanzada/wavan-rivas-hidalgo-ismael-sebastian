const fs = require('fs');

// fs.writeFile(
//     path,
//     contenido,
//     'utf-9',
//     (error) => {
//
//     }
// );

function escribirArchivo(path, contenidoNuevo){
    fs.readFile(
        path, "utf-8",
        (error) => {
            if(error){
                console.log({mensaje:'error leyendo contenido', error: error});
            }else{
                fs.writeFile(
                    path,
                    contenidoNuevo,
                    "utf-8",
                    (errorNuevo) => {
                        console.log({contenidoNuevo, contenidoNuevo});
                    }
                );
            }
        }
    );
}

escribirArchivo(
    './06-ejemplo.txt',
    'Buenas tardes 3333'
);
