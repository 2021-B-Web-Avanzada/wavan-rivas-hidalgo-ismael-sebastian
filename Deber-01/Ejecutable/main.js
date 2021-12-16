function menuOpciones(){
    const menu = "\n------  CRUD en archivos con KOTLIN  ------\n" +
    "-----------  Género - Película ------------\n" +
    "Genero\n" +
    "1: Leer registros\n2: Buscar género por identificador\n3: Insertar género\n4: Actualizar género\n5: Eliminar género\n" +
        "6: Listar películas de un género\n" +
    "------------------------------------------------\n" +
    "Película\n" +
    "7: Leer registros\n8: Buscar película por identificador\n9: Insertar película\n10: Actualizar película\n11: Eliminar película\n" +
    "------------------------------------------------\n" +
    "12: Salir\n"
    console.log(menu);
}

const inquirer = require('inquirer');
const generoDao = require('../DAO/GeneroDAO');
const peliculaDao = require('../DAO/PeliculaDAO');

async function main(){
    let menuActivo = true;
    while (menuActivo){
        menuOpciones();
        try {
            const opcion = await inquirer.prompt([
                {
                    type: 'number',
                    name: 'eleccion',
                    message: 'Seleccione una de las opciones disponibles: '
                }
            ]);

            switch (opcion.eleccion){
                case 1:
                    console.log('Listar todos los géneros');
                    await generoDao.listarGeneros();
                    break;

                case 2:
                    console.log('Buscar género por identificador');
                    await generoDao.buscarGenero();
                    break;

                case 3:
                    console.log('Insertar género');
                    await generoDao.crearGenero();
                    break;

                case 4:
                    console.log('Actualizar género');
                    await generoDao.actualizarGenero();
                    break;

                case 5:
                    console.log('Eliminar género');
                    await generoDao.eliminarGenero();
                    break;

                case 6:
                    console.log('Listar películas de un género');
                    await generoDao.listarPeliculasPorGenero();
                    break;

                case 7:
                    console.log('Listar películas');
                    await peliculaDao.listarPeliculas();
                    break;

                case 8:
                    console.log('Buscar película por identificador');
                    await peliculaDao.buscarPelicula();
                    break;

                case 9:
                    console.log('Insertar película');
                    await peliculaDao.crearPelicula();
                    break;

                case 10:
                    console.log('Actualizar película');
                    await peliculaDao.actualizarPelicula();
                    break;

                case 11:
                    console.log('Eliminar película');
                    await peliculaDao.eliminarPelicula();
                    break;

                case 12:
                    menuActivo = false;
                    break;

                default:
                    throw 'Opción incorrecta';
            }
        } catch (e) {
            console.log(e);
        }
    }
}

main();