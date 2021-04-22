import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertasServices} from '../services/ofertas.services';
import {Oferta} from '../shared/oferta.models';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasServices]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(private route: ActivatedRoute,
              private ofertasServices: OfertasServices) {
  }

  ngOnInit(): void {

    this.ofertasServices.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        console.log(this.oferta = oferta[0]);
        this.oferta = oferta[0];
      });


    //SnapShot tira uma "foto" do paramentros da rota selecionado, ID
    // console.log('ID recuperado da rota: ' + this.route.snapshot.params['id']);

    /*this.route.params.subscribe((parametro: any) => {
   console.log(parametro.id);
 });*/


  }

}
