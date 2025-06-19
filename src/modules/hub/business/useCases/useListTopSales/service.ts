import AvansoftApi from '@infra/networking/avansoftApi';
import { SalesPerDayResponse } from '@modules/hub/business/useCases/useListSalesPerDay/interfaces';

export async function listTopSales() {
  const response = await AvansoftApi.get<TopSalesModel[]>(`sales/top`);

  return response;
}
