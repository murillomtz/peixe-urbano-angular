import {HttpClient} from '@angular/common/http';

import {Oferta} from './../shared/oferta.models';
import {Injectable} from '@angular/core';

import {URL_API} from '../app.api';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';


@Injectable()
export class OfertasServices {

  constructor(private http: HttpClient) {
  }

  //public ofertas: Oferta[] = [];


  public getOfertas(): Promise<Oferta[]> {
//efetuar uma rquisicao http
    // e retornar uma promise de oferta[]
    return this.http.get<Oferta[]>(`${URL_API}ofertas?destaque=true`)
      .toPromise();
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get<Oferta[]>(`${URL_API}ofertas?categoria=${categoria}`)
      .toPromise();

  }

  public getOfertaPorId(id: number): Promise<Object> {
    return this.http.get<Oferta>(`${URL_API}ofertas?id=${id}`)
      .toPromise();
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get<string>(`${URL_API}como-usar?id=${id}`)
      .toPromise();
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get<string>(`${URL_API}onde-fica?id=${id}`)
      .toPromise();
  }

  //Pequisa superioor
  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    //_like ele localiza apenas com algum elemento exemplo, MUrilo posso localizar usando "Mu"...
    return this.http.get<Oferta[]>(`${URL_API}ofertas?descricao_oferta_like=${termo}`).pipe(
      retry(10) // faz 10 tentativas caso falhe 10x ele para
    );

  }

  //public getOfertas2(): Promise<Array<Oferta>>
  /*public getOfertas2(): Promise<Oferta[]> {
    return new Promise((resolve, reject) => {

      //Pega a lsita de ofertas RESOLVE ele e passa adiante
      // console.log('Sera q passou por aqui?');

      let deu_certo = true;

      if (deu_certo) {
        setTimeout(() => resolve(this.ofertas), 3000);

      } else {
        reject({codigo_erro: 404, mensagem_erro: 'Erro Server Not Found.'});
      }
    }).then((ofertas: Oferta[]) => {
      //Fazer um tratativa
      console.log('primeroda than');
      return ofertas;
    }).then((ofertas: Oferta[]) => {
      console.log('segundo then'
      );
      return new Promise((resolve2, reject2) => {
        setTimeout(() => {
          resolve2(ofertas);
        }, 3000);
      });
    }).then((ofertas: Oferta[]) => {
      console.log('Terceiro then executado apos 3 segundos,' +
        ' pq estava aguardando a promisse ser resolvida');
      return ofertas;
    });
  }*/


}
