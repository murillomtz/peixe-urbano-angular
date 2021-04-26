import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { OfertasService } from '../ofertas.service'
import { OfertasModule as Oferta } from '../shared/oferta.model'
import { catchError, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
 
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa // retorno Array de Ofertas[]
    .pipe(debounceTime(1000)) //executa aacao do switchmap apos 1 segundo
    .pipe(distinctUntilChanged()) // para fazer pesquisas distintas
    .pipe(switchMap((termo: string) => {
       // console.log('requisicao http para api')

       if (termo.trim() === '') {
         //retornar um observable de array de ofertas VAZIO
          return of<Oferta[]>([])
       }
       return this.ofertasService.pesquisaOfertas(termo)
    }))
    .pipe(catchError((err: any) => {
      // console.log(err)
      return of<Oferta[]>([])
    
    }))

  }

  public pesquisa(termoDaBusca: string): void {
      this.subjectPesquisa.next(termoDaBusca)


    //  console.log('keyup caractere', termoDaBusca)
    /*this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca),
    this.ofertas.subscribe((ofetas: Oferta[]) => console.log(ofetas),
    (erro: any) => console.log('Erro status: ', erro.status),
    () => console.log('Fluxo de eventos completo')) */
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }

}
