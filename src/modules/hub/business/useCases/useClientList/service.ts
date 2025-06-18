import { QueryKey } from '@core/query/interfaces';
import AvansoftApi from '@infra/networking/avansoftApi';
import { clientListAdapter } from '@modules/hub/business/useCases/useClientList/adapter';
import type { ClientListResponse } from '@modules/hub/business/useCases/useClientList/interfaces';
import { FilterType } from '@modules/hub/mobile/screens/Home/interfaces';

export async function clientListService(pageParam: number, queryKey: QueryKey) {
  const term = queryKey[2] as string;
  const filter = queryKey[1] as FilterType;

  const query = new URLSearchParams({
    page: String(pageParam),
    page_size: '20',
    order_by: 'createdAt',
    order_direction: 'DESC',
    ...(term && { term }),
    ...(filter && { filter_by: filter }),
  }).toString();

  const response = await AvansoftApi.get<ClientListResponse>(`client?${query}`);

  return clientListAdapter(response);
}
