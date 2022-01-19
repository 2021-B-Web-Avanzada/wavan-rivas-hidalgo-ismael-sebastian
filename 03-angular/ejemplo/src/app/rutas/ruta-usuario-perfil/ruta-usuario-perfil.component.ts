import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-ruta-usuario-perfil',
  templateUrl: './ruta-usuario-perfil.component.html',
  styleUrls: ['./ruta-usuario-perfil.component.scss']
})
export class RutaUsuarioPerfilComponent implements OnInit {

  idUsuario = 0;
  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
   const parametroRuta$ = this.activatedRoute.params
   parametroRuta$
     .subscribe({
       next:(parametroRuta$)=>{
         console.log(parametroRuta$);
         this.idUsuario = +parametroRuta$['idUsuario'];
       }
     })
  }
}
