class Genero{
    constructor(idGenero, nombreGenero, numSubgeneros, generoActivo, creadorGenero){
        this.idGenero = idGenero;
        this.nombreGenero = nombreGenero;
        this.numSubgeneros = numSubgeneros;
        this.generoActivo = generoActivo;
        this.creadorGenero = null;
    }
}

exports.Genero = Genero;