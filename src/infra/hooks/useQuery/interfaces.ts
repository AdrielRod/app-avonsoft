import type { QueryKey } from '@core/query/api';

import type { UseQueryOptions } from '@tanstack/react-query';

export interface QueryProps<T> extends Pick<UseQueryOptions<T>, 'queryKey'> {
  initialData: T;
  queryFn: (queryKey: QueryKey) => Promise<T>;
}

export interface QueryReturn<T> {
  data: T;
  isError: boolean;
  isLoading: boolean;
  isRefetching: boolean;
  refetch: () => Promise<void>;
}
