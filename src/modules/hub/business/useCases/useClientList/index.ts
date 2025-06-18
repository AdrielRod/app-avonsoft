import { useInfiniteQuery } from '@infra/hooks';
import { ClientListRequest } from '@modules/hub/business/useCases/useClientList/interfaces';

import { clientListService } from '@modules/hub/business/useCases/useClientList/service';
import { QueryKeys } from '@shared/enums/queryKeys';

export function useClientList({ filter, searchTerm }: ClientListRequest) {
  return useInfiniteQuery<ClientModel>({
    queryKey: [QueryKeys.CLIENT_LIST, filter, searchTerm],
    queryFn: clientListService,
  });
}
