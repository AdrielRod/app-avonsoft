import { useQuery } from '@infra/hooks';

import { listSalesPerDayService } from '@modules/hub/business/useCases/useListSalesPerDay/service';
import { QueryKeys } from '@shared/enums/queryKeys';

export function useListSalesPerDay() {
  return useQuery<SalesGraphModel[]>({
    initialData: [],
    queryKey: [QueryKeys.LIST_SALES_PER_DAY],
    queryFn: listSalesPerDayService,
  });
}
