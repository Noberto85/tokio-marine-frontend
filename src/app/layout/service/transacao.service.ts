import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TransacaoRequest } from '../../model/transacao.model';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class TransacaoService {
    private http = inject(HttpClient);

    create(transacao: TransacaoRequest): Observable<void> {
        return this.http.post<void>(`${environment.api}/api/v1/transferencias`, transacao);
    }
}