import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaNotFoundComponent} from "./ruta-not-found/ruta-not-found.component";
import {RutaForbiddenComponent} from "./ruta-forbidden/ruta-forbidden.component";
import {RutaInicioComponent} from "./ruta-inicio/ruta-inicio.component";
import {RutaUsuarioComponent} from "./ruta-usuario/ruta-usuario.component";
import {RutaPostComponent} from "./ruta-post/ruta-post.component";
import {RutaAppComponent} from "./ruta-app/ruta-app.component";
import {EstaLogeadoGuard} from "./servicios/auth/esta-logeado.guard";
import {EsAdministradorGuard} from "./servicios/auth/es-administrador.guard";
import {RutaUsuarioPerfilComponent} from "./rutas/ruta-usuario-perfil/ruta-usuario-perfil.component";

//Login
//Inicio
//app
      // usuario
      // posts

const routes: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent,
  },
  {
    path: 'forbidden',
    component: RutaForbiddenComponent,
  },
  {
    path: 'not-fund',
    component: RutaNotFoundComponent,
  },
  {
    path: 'inicio',
    canActivate: [ EstaLogeadoGuard ],
    component: RutaInicioComponent,
  },
  { // app-routing.module.ts
    path: 'lazy-inventario',
    loadChildren: () => import('./modulos/modulo-inventario/modulo-inventario.module')
      .then(m => m.ModuloInventarioModule)
  },
  {
    path: 'app',
    component: RutaAppComponent,
    children: [
      {
        path: 'usuario',
        component: RutaUsuarioComponent,
      },
      {
        path: 'usuario/:idUsuario',
        component: RutaUsuarioPerfilComponent,
      },
      {
        path: 'post',
        component: RutaPostComponent,
        canActivate: [EsAdministradorGuard]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
