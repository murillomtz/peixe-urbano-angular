import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { OfertasModule  as  Oferta} from './shared/oferta.model'

import { URL_API } from './app.api'
import { Observable } from 'rxjs'
import { retry } from 'rxjs/operators'


@Injectable()
export class OfertasService {

    //private url_api = `http://localhost:3000/ofertas`

    constructor(private http: HttpClient){}

    public getOfertas(): Promise<Oferta[]> {
        // efetuar uma requisicao http
        // e retornar uma promise de oferta[]
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`)
        .toPromise()
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`)
        .toPromise()
    //    .then((resposta: any) => resposta())
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get<Oferta>(`${URL_API}/ofertas?id=${id}`)
        .toPromise()
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get<string>(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get<string>(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe (retry(10))
           // map((resposta: any) => resposta.json())
    }

}
