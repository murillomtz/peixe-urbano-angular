import {Component, OnInit} from '@angular/core';
import {OfertasServices} from '../services/ofertas.services';
import {Observable} from 'rxjs';
import {Oferta} from '../shared/oferta.models';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasServices]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;

  constructor(private ofertasServices: OfertasServices) {
  }

  ngOnInit(): void {
  }


  public pesquisa(termoDaPesquisa: string): void {
    //console.log(termoDaPesquisa);

    this.ofertas = this.ofertasServices.pesquisaOfertas(termoDaPesquisa);
    console.log(this.ofertasServices.pesquisaOfertas(termoDaPesquisa));

    this.ofertas.subscribe((ofetas: Oferta[]) => console.log(ofetas),
      (erro: any) => console.log('Erro status ' + erro.status),
      () => console.log('Fluxo de eventos completo'));

  }

}
