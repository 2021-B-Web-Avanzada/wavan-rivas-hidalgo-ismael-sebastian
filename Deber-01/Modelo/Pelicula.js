class Pelicula{
    constructor(idPelicula, nombrePelicula, gananciasPelicula, enCartelera, idGenero, paisOrigen){
        this.idPelicula = idPelicula;
        this.nombrePelicula = nombrePelicula;
        this.gananciasPelicula = gananciasPelicula;
        this.enCartelera = enCartelera;
        this.idGenero = idGenero;
        this.paisOrigen = undefined;
    }
}

exports.Pelicula = Pelicula;