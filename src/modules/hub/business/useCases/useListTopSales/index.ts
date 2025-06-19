import { useQuery } from '@infra/hooks';

import { listTopSales } from '@modules/hub/business/useCases/useListTopSales/service';
import { QueryKeys } from '@shared/enums/queryKeys';

export function useListTopSales() {
  return useQuery<TopSalesModel[]>({
    initialData: [],
    queryKey: [QueryKeys.LIST_TOP_SALES],
    queryFn: listTopSales,
  });
}
