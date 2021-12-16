//11-inquierer.js
const inquirer = require('inquirer');
const fs = require('fs/promises');
const path_archivo = '../ArchivoPelicula.txt';
const { Pelicula } = require('../Modelo/Pelicula');

async function crearPelicula() {
    try {
        const idGenero = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'idGeneroDePelicula',
                    message: 'Ingresa el id del género al que pertenecece la película:'
                }
            ]);

        const nuevaPelicula = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'idPelicula',
                    message: 'Ingresa el id de la película: '
                },
                {
                    type: 'input',
                    name: 'nombrePelicula',
                    message: 'Ingresa el nombre de la película: '
                },
                {
                    type: 'number',
                    name: 'gananciasPelicula',
                    message: 'Ingresa las ganancias de la película: '
                },
                {
                    type: 'confirm',
                    name: 'enCartelera',
                    message: 'Indica si la película está en cartelera: '
                }
            ]);
        const pelicula = new Pelicula(
            nuevaPelicula.idPelicula,
            nuevaPelicula.nombrePelicula,
            nuevaPelicula.gananciasPelicula,
            nuevaPelicula.enCartelera,
            idGenero.idGeneroDePelicula
        );
        const arrayPeliculas = await cargarPeliculas();
        arrayPeliculas.push(pelicula);
        await fs.writeFile(path_archivo, JSON.stringify(arrayPeliculas));
    }catch (e){
        console.log(e);
    }
}

const cargarPeliculas = async () => {
    try {
        const archivoTxt = await fs.readFile(path_archivo);
        return JSON.parse(archivoTxt);
    } catch (error) {
        throw error;
    }
}

async function listarPeliculas() {
    const arrayPeliculas = await cargarPeliculas();
    console.table(arrayPeliculas);
}

async function actualizarPelicula() {
    try {
        const idPeliculaActualizar = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'idPeliculaActualizar',
                    message: 'Ingresa el id de la película que deseas actualizar: '
                }
            ]);
        const arrayPeliculas = await cargarPeliculas();
        const peliculaAActualizar = arrayPeliculas
            .findIndex(
                (valorActual) => {
                    return valorActual.idPelicula === idPeliculaActualizar.idPeliculaActualizar;
                }
            );
        console.log('La pelpicula que deseas actualizar es: ');
        console.table(arrayPeliculas[peliculaAActualizar]);
        const cambiosEnPelicula = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'idGenero',
                    message: 'Ingresa el id del género al que pertenece la película a actualizar: '
                },
                {
                    type: 'number',
                    name: 'idPelicula',
                    message: 'Ingresa el id de la película a actualizar: '
                },
                {
                    type: 'input',
                    name: 'nombrePelicula',
                    message: 'Ingresa el nombre de la película a actualizar: '
                },
                {
                    type: 'number',
                    name: 'gananciasPelicula',
                    message: 'Ingresa las ganancias de la película a actualizar: '
                },
                {
                    type: 'confirm',
                    name: 'enCartelera',
                    message: 'Indica si la película sigue en cartelera: '
                }
            ]);
        arrayPeliculas[peliculaAActualizar] = new Pelicula(
            cambiosEnPelicula.idPelicula,
            cambiosEnPelicula.nombrePelicula,
            cambiosEnPelicula.gananciasPelicula,
            cambiosEnPelicula.enCartelera,
            cambiosEnPelicula.idGenero

        );
        await fs.writeFile(path_archivo, JSON.stringify(arrayPeliculas));
    }catch (e){
        console.log(e);
    }
}

async function eliminarPelicula(){
    try{
        const idPeliculaEliminar = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'idEliminar',
                    message: 'Ingresa el id de la película que deseas eliminar: '
                }
            ]);
        const arrayPeliculas = await cargarPeliculas();
        const peliculaAEliminar = await arrayPeliculas
            .findIndex(
                (valorActual) => {
                    return valorActual.idPelicula === idPeliculaEliminar.idEliminar;
                }
            );
        console.log('La película que deseas eliminar es: ');
        console.table(arrayPeliculas[peliculaAEliminar]);
        const confirmacionEliminar = await inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'decision',
                    message: 'Seguro que deseas eliminar esta película:'
                }
            ]);
        if(confirmacionEliminar.decision){
            arrayPeliculas.splice(peliculaAEliminar, 1);
            await fs.writeFile(path_archivo, JSON.stringify(arrayPeliculas));
        }
    }catch (e) {
        console.log(e);
    }

}

async function buscarPelicula(){
    try{
        const idBuscarPelicula = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'idPelicula',
                    message: 'Ingresa el id de la película que deseas buscar: '
                }
            ]);
        const arrayPeliculas = await cargarPeliculas();
        const peliculaEncontrada = await arrayPeliculas
            .findIndex(
                (valorActual) => {
                    return valorActual.idPelicula === idBuscarPelicula.idPelicula;
                }
            );
        console.log('La película es:');
        console.table(arrayPeliculas[peliculaEncontrada]);
    } catch (e) {
        console.log(e);
    }
}


exports.crearPelicula = crearPelicula;
exports.listarPeliculas = listarPeliculas;
exports.cargarPeliculas = cargarPeliculas;
exports.actualizarPelicula = actualizarPelicula;
exports.eliminarPelicula = eliminarPelicula;
exports.buscarPelicula = buscarPelicula;

