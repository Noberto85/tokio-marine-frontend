import { Component, inject, OnInit } from '@angular/core';
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
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-transacao',
  standalone: true,
  providers: [MessageService],
  imports: [ToastModule, CurrencyMaskModule, NgxMaskDirective, DatePicker, FormsModule, ReactiveFormsModule, CommonModule, InputTextModule, InputMaskModule, MultiSelectModule, ToolbarModule, CalendarModule, ButtonModule, CardModule, SelectModule, FluidModule],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.scss'
})
export class TransacaoComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  private transacaoService = inject(TransacaoService);
  private formBuilder = inject(UntypedFormBuilder);
  minDate: Date | undefined;
  protected form = this.formBuilder.group({
    contaOrigem: ['', Validators.required],
    contaDestino: ['', Validators.required],
    dataAgendamento: ['', Validators.required],
    valor: ['', [Validators.required]]
  });

  ngOnInit() {
    this.minDate = new Date();
  }

  envarTransacao() {

    const transacao: TransacaoRequest = {
      ...this.form.value
    };
    this.transacaoService.create(transacao).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Transação criada com sucesso!' });
        this.form.reset();
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: error.error.message });
      }
    });
  }

  cancel() {
    this.form.reset();

  }
}
