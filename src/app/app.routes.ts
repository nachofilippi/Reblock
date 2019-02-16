import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AsesoramientoComponent } from './components/asesoramiento/asesoramiento.component';
import { ProductoComponent } from './components/producto/producto.component';
import {BuscadorComponent} from './components/buscador/buscador.component';
import { CovidoComponent } from './components/covido/covido.component';


const APP_ROUTES: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'asesoramiento', component: AsesoramientoComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'buscar/:termino', component: BuscadorComponent},
  { path: 'covido', component: CovidoComponent},
  { path: '**' , pathMatch: 'full', redirectTo: 'index' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
