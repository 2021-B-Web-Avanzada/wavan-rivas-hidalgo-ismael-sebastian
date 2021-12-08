//03-funciones.ts
function sumarNumeros(
    numeroInicial: number,
    ...numerosInfinitos: number []  //lista de datos como entrada
): number {
    return numeroInicial;
}
//sumarNumeros('asd', 'asd') // Otros tipos de datos no están permitidos
sumarNumeros(1, 1,2,3,4)

function imprimir(mensaje: string): void {  //undefined //Es opcional poner el void
    console.log('Hola ' + mensaje);
}

const arregloNumeros: number[] = [1,2];
const arregloNumerosDos: Array<number> = [1,2];
const arregloNumerosTres: (number | string | boolean)[] = [1,'dos', true];
const arregloNumerosCuatro: Array<number | string | boolean> = [1,'dos', true];
let arregloNumerosCinco: number[] | string[] = [1,2];
arregloNumerosCinco = ['uno','dos'];
