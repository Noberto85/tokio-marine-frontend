import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TagModule } from 'primeng/tag';
import { debounceTime } from 'rxjs';

import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { TransacaoService } from '../../../layout/service/transacao.service';
import { ApiTransacaoPageable } from '../../../model/transacao.model';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParamsRequest } from '../../../model/pageable.model';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-extrato',
  imports: [ToolbarModule, PaginatorModule, FormsModule, ReactiveFormsModule, TableModule, IconFieldModule, InputIconModule, InputTextModule, TagModule, CommonModule],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.scss'
})
export class ExtratoComponent implements OnInit {
  private transacaoService = inject(TransacaoService);
  private formBuilder = inject(FormBuilder);

  extrato: ApiTransacaoPageable["content"] = [];
  first: number = 0;
  rows: number = 10;
  totalRecords: number = 0;
  page: number = 0;
  pageSize: number = 10;

  protected form = this.formBuilder.group({
    search: [null]

  });

  ngOnInit() {
    this.form
      .get('search')
      ?.valueChanges.pipe(debounceTime(1000))
      .subscribe((valor) => {

        this.listExtrato({ search: valor });
      });
    this.listExtrato();
  }

  listExtrato(param?: ParamsRequest) {
    this.transacaoService.findAll(param).subscribe({
      next: (response) => {
        debugger
        this.extrato = response.content;
        this.totalRecords = response.totalElements;
      },
      error: (error) => {
        console.error('Erro ao carregar extrato:', error);
      }
    });
  }

  onPageChange(event: PaginatorState) {

    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
    this.page = event.page ?? 0;
    //  this.listExtrato({ page: this.page });

  }
}
