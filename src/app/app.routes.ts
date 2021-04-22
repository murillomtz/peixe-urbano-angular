import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RestaurantesComponent} from './restaurantes/restaurantes.component';
import {DiversaoComponent} from './diversao/diversao.component';
import {OfertaComponent} from './oferta/oferta.component';
import {ComoUsarComponent} from './oferta/como-usar/como-usar.component';
import {OndeFicaComponent} from './oferta/onde-fica/onde-fica.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'restaurantes',
    component: RestaurantesComponent
  },
  {
    path: 'diversao',
    component: DiversaoComponent
  },
  {
    path: 'ofertas',
    component: OfertaComponent
  },
  {
    path: 'ofertas/:id',
    component: OfertaComponent,
    children: [ //Rotas filhas
      {
        path: '', component: ComoUsarComponent
      },//routerLink="como-usar" NAO USA BARRA EX routerLink="/como-usar"
      {
        path: 'como-usar', component: ComoUsarComponent
      },
      {
        path: 'onde-fica', component: OndeFicaComponent
      }]
  }
];
