import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneroListComponent } from './componentes/genero-list/genero-list.component';
import { GeneroDetailsComponent } from './componentes/genero-details/genero-details.component';
import { AddGeneroComponent } from './componentes/add-genero/add-genero.component';

const routes: Routes = [
  { path: '', redirectTo: 'generos', pathMatch: 'full' },
  { path: 'generos', component: GeneroListComponent },
  { path: 'generos/:id', component: GeneroDetailsComponent },
  { path: 'add/', component: AddGeneroComponent }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
