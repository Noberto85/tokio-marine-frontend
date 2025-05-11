export interface Pageable {
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
    sort: {
        empty: boolean;
        unsorted: boolean;
        sorted: boolean;
    };
}

export interface ParamsRequest {
    contaOrigem?: string;
    contaDestino?: string;
    page?: number;
    size?: number;
    orderBy?: string;
    direction?: string;
}