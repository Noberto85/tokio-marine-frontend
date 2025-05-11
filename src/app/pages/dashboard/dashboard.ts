import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-dashboard',
    imports: [CardModule],
    template: `
<div class="mb-4 p-8">
    <p-card header="Tela de inicio" class="w-full">
        <h1>Desafio Tókio marine!</h1>
    </p-card>
</div>
    `
})
export class Dashboard { }
