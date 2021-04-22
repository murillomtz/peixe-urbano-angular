import {HttpClient} from '@angular/common/http';

import {Oferta} from './../shared/oferta.models';
import {Injectable} from '@angular/core';

//import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasServices {

  constructor(private http: HttpClient) {
  }

  //public ofertas: Oferta[] = [];


  public getOfertas(): Promise<Oferta[]> {
//efetuar uma rquisicao http
    // e retornar uma promise de oferta[]
    return this.http.get<Oferta[]>('http://localhost:3000/ofertas?destaque=true')
      .toPromise();
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get<Oferta[]>(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise();

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
