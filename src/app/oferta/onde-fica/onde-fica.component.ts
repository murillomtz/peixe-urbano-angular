import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertasServices} from '../../services/ofertas.services';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasServices]
})
export class OndeFicaComponent implements OnInit {


  public ondeFica: string = '';

  constructor(private route: ActivatedRoute,
              private ofertasServices: OfertasServices) {
  }


  ngOnInit(): void {
    //Por ser uma rota filha precisa ter o .parent, para pegar a rota PAI
    //http://localhost:4200/ofertas/1/onde-fica
    const id = this.route.parent.snapshot.params['id'];
    this.ofertasServices.getOndeFicaOfertaPorId(id).then((response: any) => {
      this.ondeFica = response[0].descricao;
      //console.log(response.descricao);
    });

  }
}
