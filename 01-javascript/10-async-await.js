//10-async-await.js

const promesaLeerArchivo = () => {
    return new Promise(
        (res, rej) => {
            res('CONTENIDO LEER ARCHIVO');
            //rej('ERROR =(');
        }
    );
}
const promesaEscribirArchivo = () => {
    return new Promise (
        (res, rej) => {
            res('CONTENIDO ESCRIBIR ARCHIVO');
            //rej('ERROR =(');
        }
    );
}

//ASYNC AWAIT
// 1) Métodoss de clases
// 2) Funciones
//No es posible:
//const respuesta = await promesaEscribirArhivo;
//porque no está dentro de una función

//Al momento de usar la palabara async esa función se convierte en una Promesa

const ejemplo1 = async function () {

}

const ejemplo2 = async () => {

}
async function ejercicio() {
    console.log('1');
    let nuevoContenido = '';
    try{
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual);
        console.log('3');
        await promesaLeerArchivo();
        console.log('4');
        nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    } catch (error) {
        console.error(error);
    }
    console.log('6');
    console.log('7');
    return nuevoContenido;
}
//Funciona como promesa
ejercicio()
    .then(
        (data) => {
            console.log('ESTA ES LA RESPUESTA DEL ASYNC AWAIT', data);
        }
    )
    .catch()
    .finally();