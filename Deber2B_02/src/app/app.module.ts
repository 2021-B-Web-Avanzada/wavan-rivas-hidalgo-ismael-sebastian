import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddGeneroComponent } from './componentes/add-genero/add-genero.component';
import { GeneroDetailsComponent } from './componentes/genero-details/genero-details.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { GeneroListComponent } from './componentes/genero-list/genero-list.component';
//import {RouterModule} from "@angular/router";
//Rutas
import { app_routing }from "./rutas/app.routes";
import { PeliculaDetailsComponent } from './componentes/pelicula-details/pelicula-details.component';
import { PeliculaListComponent } from './componentes/pelicula-list/pelicula-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AddPeliculaComponent} from "./componentes/add-pelicula/add-pelicula.component";

@NgModule({
  declarations: [
    AppComponent,
    AddGeneroComponent,
    GeneroDetailsComponent,
    GeneroListComponent,
    PeliculaDetailsComponent,
    PeliculaListComponent,
    AddPeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    app_routing,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
