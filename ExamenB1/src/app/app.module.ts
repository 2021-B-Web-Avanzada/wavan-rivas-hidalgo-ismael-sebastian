import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import { SliderComponent } from './componentes/slider/slider.component';
import { AppRoutingModule } from './app-routing.module';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from '@angular/material/list';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BrowseComponent } from './componentes/browse/browse.component';
//Rutas
import { app_routing }from "./rutas/app.routes";
import { PrincipalComponent } from './componentes/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavbarComponent,
    BrowseComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    MatListModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
