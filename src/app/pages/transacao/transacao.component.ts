import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { FluidModule } from 'primeng/fluid';
import { ToolbarModule } from 'primeng/toolbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DatePicker } from 'primeng/datepicker';
import { NgxMaskDirective } from 'ngx-mask';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { TransacaoService } from '../../layout/service/transacao.service';
import { TransacaoRequest } from '../../model/transacao.model';


@Component({
  selector: 'app-transacao',
  imports: [CurrencyMaskModule, NgxMaskDirective, DatePicker, FormsModule, ReactiveFormsModule, CommonModule, InputTextModule, InputMaskModule, MultiSelectModule, ToolbarModule, CalendarModule, ButtonModule, CardModule, SelectModule, FluidModule],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.scss'
})
export class TransacaoComponent {
  transacaoService = inject(TransacaoService);
  private formBuilder = inject(UntypedFormBuilder);
  protected form = this.formBuilder.group({
    contaOrigem: ['', Validators.required],
    contaDestino: ['', Validators.required],
    dataAgendamento: ['', Validators.required],
    valor: ['', [Validators.required]]
  });

  envarTransacao() {

    const transacao: TransacaoRequest = {
      ...this.form.value
    };
    this.transacaoService.create(transacao).subscribe({});
  }
}
