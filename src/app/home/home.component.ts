import {Oferta} from './../shared/oferta.models';
import {OfertasServices} from './../services/ofertas.services';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasServices]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private offerService: OfertasServices) {
  }

  ngOnInit(): void {
    //this.offers = this.offerService.getOfertas();
    // console.log(this.offers);
    this.offerService.getOfertas()
      .then(
        (ofertas: Oferta[]) => {
          this.ofertas = ofertas;
        }/*, (param: any) => console.log(param)*/)
      .catch(
        (param: any) => {

        });
  }

}
