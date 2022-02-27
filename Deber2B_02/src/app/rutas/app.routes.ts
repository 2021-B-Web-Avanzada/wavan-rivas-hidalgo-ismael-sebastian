import { RouterModule, Routes } from '@angular/router';
import {GeneroListComponent} from "../componentes/genero-list/genero-list.component";
import {GeneroDetailsComponent} from "../componentes/genero-details/genero-details.component";
import {AddGeneroComponent} from "../componentes/add-genero/add-genero.component";
import {PeliculaListComponent} from "../componentes/pelicula-list/pelicula-list.component";
import {PeliculaDetailsComponent} from "../componentes/pelicula-details/pelicula-details.component";
import {AddPeliculaComponent} from "../componentes/add-pelicula/add-pelicula.component";

const app_routes: Routes = [
  { path: 'generos', component: GeneroListComponent },
  { path: 'generos/:id', component: GeneroDetailsComponent },
  { path: 'add', component: AddGeneroComponent },
  { path: 'peliculas', component: PeliculaListComponent },
  { path: 'peliculas/:id', component: PeliculaDetailsComponent },
  { path: 'add_pelicula', component: AddPeliculaComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);
