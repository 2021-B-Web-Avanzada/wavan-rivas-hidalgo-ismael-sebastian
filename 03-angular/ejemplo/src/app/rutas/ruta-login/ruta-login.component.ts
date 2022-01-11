import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  mostrarSegundoBanner = true;

  arregloUsuarios = [
    {
      id:1,
      nombre: 'Ismael',
      color: '#00BCFF',
      link: 'https://es-la.facebook.com/',
      linkImagen: 'https://www.muycomputer.com/wp-content/uploads/2019/11/Death-Stranding.jpg'
    },
    {
      id:2,
      nombre: 'Sebastian',
      color: '#007AFF',
      link: 'https://www.epn.edu.ec/',
      linkImagen: 'https://wallpapercave.com/wp/wp3273769.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cambiarOcultarBanner(){
    this.mostrarSegundoBanner = !this.mostrarSegundoBanner;
  }
}
