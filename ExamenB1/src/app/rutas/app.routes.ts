import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "../componentes/principal/principal.component";
import {BrowseComponent} from "../componentes/browse/browse.component";

const app_routes: Routes = [
  {
    path: 'home', component: PrincipalComponent
  },
  {
    path: 'browse', component: BrowseComponent
  }
];

export const app_routing = RouterModule.forRoot(app_routes);
