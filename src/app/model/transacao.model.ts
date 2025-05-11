export interface TransacaoRequest {
    contaOrigem: string;
    contaDestino: string;
    dataTransferencia: Date;
    valor: string;
}