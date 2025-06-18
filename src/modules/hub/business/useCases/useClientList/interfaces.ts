import { FilterType } from '@modules/hub/mobile/screens/Home/interfaces';

export interface ClientListResponseItem {
  info: {
    id: string;
    nomeCompleto: string;
    detalhes: {
      email: string;
      nascimento: string;
    };
    duplicado: {
      nomeCompleto: string;
    };
    estatisticas: {
      vendas: [];
    };
  };
}

export interface ClientListRequest {
  filter: FilterType;
  searchTerm?: string;
}

export interface ClientListResponse {
  items: ClientListResponseItem[];
  page: number;
  page_size: number;
  page_count: number;
  total: number;
}
