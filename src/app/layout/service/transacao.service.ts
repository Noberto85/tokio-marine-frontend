import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiTransacaoPageable, TransacaoRequest } from '../../model/transacao.model';
import { environment } from '../../../environments/environment';
import { ParamsRequest } from '../../model/pageable.model';


@Injectable({
    providedIn: 'root'
})
export class TransacaoService {
    private http = inject(HttpClient);

    create(transacao: TransacaoRequest): Observable<void> {
        return this.http.post<void>(`${environment.api}/api/v1/transferencias`, transacao);
    }

    findAll(params?: ParamsRequest): Observable<ApiTransacaoPageable> {
        const defaultParams: ParamsRequest = {
            contaDestino: '',
            contaOrigem: '',
            page: 0,
            size: 10, // exemplo de valor padrão
            orderBy: 'dataCadastro',
            direction: 'DESC',
            ...params, // substitui valores padrão com os fornecidos pelo usuário
        };

        let queryParams = new HttpParams()
            .set('page', defaultParams.page.toString())
            .set('size', defaultParams.size.toString())
            .set('orderBy', defaultParams.orderBy)
            .set('direction', defaultParams.direction);
        if (defaultParams.contaDestino) {
            queryParams = queryParams.set('contaDestino', defaultParams.contaDestino.toString());
        }

        if (defaultParams.contaOrigem) {
            queryParams = queryParams.set('contaOrigem', defaultParams.contaOrigem.toString());
        }
        return this.http.get<ApiTransacaoPageable>(`${environment.api}/api/v1/transferencias`, { params: queryParams });
    }
}