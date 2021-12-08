//04-clases.ts
class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido = ''; //Duck Typing ->string
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }
    private mostrarNombreApellido(): string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona {
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string,  //modificador de acceso -> Propiedad de la clase
        public estadoCivil: string  //modificador de acceso -> Propiedad de la clase
    ) {
        super(nombreParametro, apellidoParametro);
    }
}
const ismael = new Usuario(
    'Ismael',
    'Rivas',
    '0302913496',
    'soltero'
);
ismael.nombre;
ismael.apellido;
ismael.cedula;
ismael.estadoCivil;