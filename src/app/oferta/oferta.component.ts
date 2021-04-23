import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertasServices} from '../services/ofertas.services';
import {Oferta} from '../shared/oferta.models';
import {interval, Observable, Observer, Subscription} from 'rxjs';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasServices]
})
export class OfertaComponent implements OnInit/*, OnDestroy*/ {

  private tempoObservableSubscription: Subscription;
  private meuObservableSubscription: Subscription;

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
    /*this.route.params.subscribe((parametro: any) => {
      console.log(parametro),
        (erro: any) => console.log(erro),
        () => console.log('Processamento foi classificado como concluido');
    });*/

    //SnapShot tira uma "foto" do paramentros da rota selecionado, ID
    // console.log('ID recuperado da rota: ' + this.route.snapshot.params['id']);

    /*this.route.params.subscribe((parametro: any) => {
   console.log(parametro.id);
 });*/


    //INTERVALL
    /* let tempo = interval(500);

     this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
       console.log(intervalo);
     });*/

    // observable(observavel)
    /*let meuObservableTeste = new Observable((observer: Observer<number>) => {
      observer.next(1);
      observer.next(3);
      //observer.error('algum erro foi encontrado no stream de eventos');
      observer.complete();
      observer.next(4);
    });*/

    // observable(observador)
    /* this.meuObservableSubscription = meuObservableTeste.subscribe(
       (resultado: number) => console.log(resultado + 10),
       (erro: string) => console.log(erro),
       () => console.log('Stream de enventos foi finalizada com sucesso')
     );*/

  }

  /*ngOnDestroy(): void {
    this.meuObservableSubscription.unsubscribe();
    this.tempoObservableSubscription.unsubscribe();
  }*/

}
