import { Routes } from '@angular/router';
import { TransacaoComponent } from './efetuar/transacao.component';
import { ExtratoComponent } from './extrato/extrato.component';


export default [

    { path: 'efetuar', component: TransacaoComponent },
    { path: 'extrato', component: ExtratoComponent }

] as Routes;
