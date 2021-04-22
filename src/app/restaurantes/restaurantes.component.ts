import {Component, OnInit} from '@angular/core';
import {Oferta} from '../shared/oferta.models';
import {OfertasServices} from '../services/ofertas.services';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasServices]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasServices: OfertasServices) {
  }

  ngOnInit(): void {

    this.ofertasServices.getOfertasPorCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      });
  }

}
