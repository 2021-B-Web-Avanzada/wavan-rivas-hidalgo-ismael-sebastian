// 01-variables.ts

let nombre: string = 'Ismael';
let nombre2: String = 'Ismael2';
//nombre = 1;
nombre = 'Sebastian';

let edad: number = 23;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;

//Duck Typing
let apellido = 'Rivas'; //string ->
apellido = 'Hidalgo';  //Igual a otros string
apellido.toUpperCase();     //métodos de un string

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string  | Date = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true //no funcionanode 01-variables.js
