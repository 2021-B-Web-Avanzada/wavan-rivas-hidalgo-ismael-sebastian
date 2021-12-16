//11-inquierer.js
const inquirer = require('inquirer');
const fs = require('fs/promises');
const path_archivo = '../ArchivoGenero.txt';
const { Genero } = require('../Modelo/Genero');
const {cargarPeliculas} = require("./PeliculaDAO");

async function crearGenero() {
    try {
        const nuevoGenero = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'idGenero',
                    message: 'Ingresa el id del género'
                },
                {
                    type: 'input',
                    name: 'nombreGenero',
                    message: 'Ingresa el nombre del género'
                },
                {
                    type: 'number',
                    name: 'numSubgeneros',
                    message: 'Ingresa el número de subgeneros'
                },
                {
                    type: 'confirm',
                    name: 'generoActivo',
                    message: 'Indica si el género está activo en el cine'
                }
            ]);
        const genero = new Genero(
            nuevoGenero.idGenero,
            nuevoGenero.nombreGenero,
            nuevoGenero.numSubgeneros,
            nuevoGenero.generoActivo
        );
        let arrayGeneros = [];
        arrayGeneros = await cargarGeneros();
        arrayGeneros.push(genero);
        await fs.writeFile(path_archivo, JSON.stringify(arrayGeneros));
    }catch (e){
        console.log(e);
    }
}

const cargarGeneros = async () => {
    try {
        const archivoTxt = await fs.readFile(path_archivo);
        return JSON.parse(archivoTxt);
    } catch (error) {
        throw error;
    }
}

async function listarGeneros() {
    const arrayGeneros = await cargarGeneros();
    console.table(arrayGeneros);
}

async function actualizarGenero() {
    try {
        const idGeneroActualizar = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'idGeneroActualizar',
                    message: 'Ingresa el id del género que deseas actualizar:'
                }
            ]);
        const arrayGeneros = await cargarGeneros();
        const generoAActualizar = arrayGeneros
            .findIndex(
                (valorActual) => {
                    return valorActual.idGenero === idGeneroActualizar.idGeneroActualizar;
                }
            );
        console.log('El género que deseas actualizar es:');
        console.table(arrayGeneros[generoAActualizar]);
        const cambiosEnGenero = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'idGenero',
                    message: 'Ingresa el id del género a actualizar'
                },
                {
                    type: 'input',
                    name: 'nombreGenero',
                    message: 'Ingresa el nombre del género a actualizar'
                },
                {
                    type: 'number',
                    name: 'numSubgeneros',
                    message: 'Ingresa el número de subgéneros a actualizar'
                },
                {
                    type: 'confirm',
                    name: 'generoActivo',
                    message: 'Indica si el género sigue activo en el cine'
                }
            ]);
        const generoActualizado = new Genero(
            cambiosEnGenero.idGenero,
            cambiosEnGenero.nombreGenero,
            cambiosEnGenero.numSubgeneros,
            cambiosEnGenero.generoActivo
        );
        arrayGeneros[generoAActualizar] = generoActualizado;
        await fs.writeFile(path_archivo, JSON.stringify(arrayGeneros));
    }catch (e){
        console.log(e);
    }
}

async function eliminarGenero(){
    try{
        const idGeneroEliminar = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'idEliminar',
                    message: 'Ingresa el id del género que deseas eliminar:'
                }
            ]);
        const arrayGeneros = await cargarGeneros();
        const generoAEliminar = await arrayGeneros
            .findIndex(
                (valorActual) => {
                    return valorActual.idGenero === idGeneroEliminar.idEliminar;
                }
            );
        console.log('El género que deseas eliminar es:');
        console.table(arrayGeneros[generoAEliminar]);
        const confirmacionEliminar = await inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'decision',
                    message: 'Seguro que deseas eliminar este género:'
                }
            ]);
        if(confirmacionEliminar.decision){
            arrayGeneros.splice(generoAEliminar, 1);
            await fs.writeFile(path_archivo, JSON.stringify(arrayGeneros));
        }
    }catch (e) {
        console.log(e);
    }
}

async function listarPeliculasPorGenero(){
    try {
        const idGeneroDePelicula = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'idGenero',
                    message: 'Ingresa el id del género del que deseas ver sus películas: '
                }
            ]);
        const arrayGeneros = await cargarGeneros();
        const idGeneroPadre = await arrayGeneros
            .findIndex(
                (valorActual) => {
                    return valorActual.idGenero === idGeneroDePelicula.idGenero;
                }
            );
        console.log('El genero del que deseas obtener sus películas es: ');
        console.table(arrayGeneros[idGeneroPadre]);
        const arrayPeliculas = await cargarPeliculas();
        const peliculasDelGenero = await arrayPeliculas
            .filter(
                (valorActual) => {
                    return valorActual.idGenero === arrayGeneros[idGeneroPadre].idGenero;
                }
            );
        console.log('Películas que pertenecen al género ', arrayGeneros[idGeneroPadre].nombreGenero);
        console.table(peliculasDelGenero);
    }catch (e) {
        console.log(e);
    }
}

async function buscarGenero(){
    try{
        const idGeneroDePelicula = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'idGenero',
                    message: 'Ingresa el id del género que deseas buscar: '
                }
            ]);
        const arrayGeneros = await cargarGeneros();
        const generoEncontrado = await arrayGeneros
            .findIndex(
                (valorActual) => {
                    return valorActual.idGenero === idGeneroDePelicula.idGenero;
                }
            );
        console.log('El género es:');
        console.table(arrayGeneros[generoEncontrado]);
    } catch (e) {
        console.log(e);
    }
}

exports.crearGenero = crearGenero;
exports.listarGeneros = listarGeneros;
exports.actualizarGenero = actualizarGenero;
exports.eliminarGenero = eliminarGenero;
exports.listarPeliculasPorGenero = listarPeliculasPorGenero;
exports.buscarGenero = buscarGenero;
