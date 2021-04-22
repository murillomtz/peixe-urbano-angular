import {Component, OnInit} from '@angular/core';
import {Oferta} from '../shared/oferta.models';
import {OfertasServices} from '../services/ofertas.services';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasServices]
})
export class DiversaoComponent implements OnInit {
  public ofertas: Oferta[];

  constructor(private ofertasServices: OfertasServices) {
  }

  ngOnInit(): void {

    this.ofertasServices.getOfertasPorCategoria('diversao')
      .then((ofertas: Oferta[]) => this.ofertas = ofertas);
  }

}
