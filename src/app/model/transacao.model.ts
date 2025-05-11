import { Pageable } from "./pageable.model";

export interface TransacaoRequest {
    contaOrigem: string;
    contaDestino: string;
    dataAgendamento: Date;
    valor: string;
}

export interface Transacao {
    contaOrigem: string;
    contaDestino: string;
    dataAgendamento: Date;
    dataTransferencia: Date;
    taxa: string;
    valor: string;
}


export interface ApiTransacaoPageable {
    content: Transacao[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
}