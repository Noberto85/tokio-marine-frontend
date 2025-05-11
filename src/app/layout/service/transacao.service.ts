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
            search: '',
            page: 0,
            size: 10,
            orderBy: 'dataTransferencia',
            direction: 'DESC',
            ...params,
        };

        let queryParams = new HttpParams()
            .set('page', defaultParams.page.toString())
            .set('size', defaultParams.size.toString())
            .set('orderBy', defaultParams.orderBy)
            .set('direction', defaultParams.direction);
        if (defaultParams.search) {
            queryParams = queryParams.set('search', defaultParams.search.toString());
        }

        return this.http.get<ApiTransacaoPageable>(`${environment.api}/api/v1/transferencias`, { params: queryParams });
    }
}