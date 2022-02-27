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
import {EsAdministradorGuard} from "./servicios/auth/es-administrador.guard";
import {BannerImagenesComponent} from "./componentes/banner-imagenes/banner-imagenes/banner-imagenes.component";
import {BannerImagenesModule} from "./componentes/banner-imagenes/banner-imagenes.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RutaUsuarioPerfilComponent } from './rutas/ruta-usuario-perfil/ruta-usuario-perfil.component';
import {InputSwitchModule} from "primeng/inputswitch";
import {KnobModule} from "primeng/knob";
import {SplitButtonModule} from "primeng/splitbutton";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { ModalEjemploComponent } from './componentes/modales/modal-ejemplo/modal-ejemplo.component';
import {NgbButtonsModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PrimeIcons} from "primeng/api";
import {SocketIoModule} from "ngx-socket-io";

@NgModule({
  declarations: [   //Componentes
    AppComponent,
    RutaLoginComponent,
    RutaForbiddenComponent,
    RutaNotFoundComponent,
    RutaInicioComponent,
    RutaUsuarioComponent,
    RutaPostComponent,
    RutaAppComponent,
    RutaUsuarioPerfilComponent,
    ModalEjemploComponent
  ],
  imports: [  //Módulos Importados
    BrowserModule,
    AppRoutingModule,
    BannerImagenesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    KnobModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    NgbModule,
    NgbButtonsModule,
    SocketIoModule.forRoot({
      url: 'ws://localhost:8080',
      options: {}
    })
  ],
  //Servicios
  providers: [
    AuthService,
    EstaLogeadoGuard,
    EsAdministradorGuard
  ],
  bootstrap: [  //Componente Principal (donde empieza todo)
    AppComponent
  ]
})
export class AppModule { }
