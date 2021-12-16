import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaForbiddenComponent } from './ruta-forbidden/ruta-forbidden.component';
import { RutaNotFoundComponent } from './ruta-not-found/ruta-not-found.component';
import { RutaInicioComponent } from './ruta-inicio/ruta-inicio.component';
import { RutaUsuarioComponent } from './ruta-usuario/ruta-usuario.component';
import { RutaPostComponent } from './ruta-post/ruta-post.component';
import { RutaAppComponent } from './ruta-app/ruta-app.component';
import {AuthService} from "./servicios/auth/auth.service";
import {EstaLogeadoGuard} from "./servicios/auth/esta-logeado.guard";

@NgModule({
  declarations: [   //Componentes
    AppComponent,
    RutaLoginComponent,
    RutaForbiddenComponent,
    RutaNotFoundComponent,
    RutaInicioComponent,
    RutaUsuarioComponent,
    RutaPostComponent,
    RutaAppComponent
  ],
  imports: [  //Módulos Importados
    BrowserModule,
    AppRoutingModule
  ],
  providers: [  //Servicios
    AuthService,
    EstaLogeadoGuard
  ],
  bootstrap: [  //Componente Principal (donde empieza todo)
    AppComponent
  ]
})
export class AppModule { }
