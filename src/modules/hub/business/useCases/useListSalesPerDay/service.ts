import AvansoftApi from '@infra/networking/avansoftApi';
import { SalesPerDayResponse } from '@modules/hub/business/useCases/useListSalesPerDay/interfaces';

export async function listSalesPerDayService() {
  const response = await AvansoftApi.get<SalesGraphModel[]>(`sales/per-day`);

  return response;
}
