import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import { OfertasModule as Oferta} from '../shared/oferta.model'
// import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit  /*, OnDestroy*/ {

  /*
  private tempoObservableSubscrition: Subscription
  private meuObservableTesteSubscrition: Subscription */

  public oferta: Oferta

  constructor(private route: ActivatedRoute, 
              private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    //console.log('ID recuperado da rota: ', this.route.snapshot.params['id'])

    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOfertaPorId(parametros.id)
      .then(( oferta: Oferta) => {
        this.oferta = oferta[0]
        //console.log(this.oferta)
      })
    })

   
    // this.route.params.subscribe((parametro: any) => {
    //  console.log(parametro.id)
    // })
    /*
    this.route.params.subscribe((parametro: any) => {
        console.log(parametro),
        (erro: any) => console.log(erro),
        () => console.log('processamento foi classificado como concluido')
    })*/

    /*  let tempo = interval(2000)
      this.tempoObservableSubscrition = tempo.subscribe((intervalo: number) => {
      console.log(intervalo) 
    }) */
 
    //observable (observavel)
   /* let meuObservableTeste = new Observable((observer: Observer<number>) => {
      observer.next(1)
      observer.next(3)
      observer.complete()
      observer.next(4)
    }) */

    /*
    //observable (observador)
    this.meuObservableTesteSubscrition = meuObservableTeste.subscribe(
      (resultado: number) => console.log(resultado + 10), 
      (erro: string) => console.log(erro),
      ()  => console.log('Stream de enventos foi finalizada com sucesso')
    )} */
/*
  ngOnDestroy() {
     this.meuObservableTesteSubscrition.unsubscribe()
     this.tempoObservableSubscrition.unsubscribe()
  }*/
  }
}
