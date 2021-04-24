import {Component, OnInit} from '@angular/core';
import {OfertasServices} from '../services/ofertas.services';
import {Observable, Subject, of} from 'rxjs';
import {Oferta} from '../shared/oferta.models';
import {catchError, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasServices]
})
export class TopoComponent implements OnInit {


  public ofertas: Observable<Oferta[]>;
  public ofertas2: Oferta[];
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasServices) {
  }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa // retorno Array de Ofertas[]
      .pipe(debounceTime(1000)) //executa aacao do switchmap apos 1 segundo
      .pipe(distinctUntilChanged())
      .pipe(switchMap((termo: string) => {
        console.log('requisicao http para api');

        if (termo.trim() === '') {
          //retornar um observable de array de ofertas VAZIO
          return of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termo);
      }))
      .pipe(catchError((err: any) => {
        console.log(err);
        return of<Oferta[]>([]);

      }));

    this.ofertas.subscribe((ofertas: Oferta[]) => {
      console.log(ofertas);
      this.ofertas2 = ofertas;
    });
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca);
    console.log('keyup caractere', termoDaBusca);
    /*this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca),
    this.ofertas.subscribe((ofetas: Oferta[]) => console.log(ofetas),
    (erro: any) => console.log('Erro status: ', erro.status),
    () => console.log('Fluxo de eventos completo')) */
  }

}



