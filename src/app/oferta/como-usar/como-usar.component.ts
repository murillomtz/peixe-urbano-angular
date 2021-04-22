import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertasServices} from '../../services/ofertas.services';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasServices]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(private route: ActivatedRoute,
              private ofertasServices: OfertasServices) {
  }

  ngOnInit(): void {
    //Por ser uma rota filha precisa ter o .parent, para pegar a rota PAI
    //http://localhost:4200/ofertas/1/onde-fica
    const id = this.route.parent.snapshot.params['id'];
    this.ofertasServices.getComoUsarOfertaPorId(id).then((response: any) => {
      this.comoUsar = response[0].descricao;
      console.log(response.descricao);
    });


  }

}
