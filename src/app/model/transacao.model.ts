export interface TransacaoRequest {
    contaOrigem: string;
    contaDestino: string;
    dataAgendamento: Date;
    valor: string;
}