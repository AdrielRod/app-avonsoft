import type { QueryKey } from '@core/query/interfaces';

import type { UseInfiniteQueryOptions } from '@tanstack/react-query';

export interface InfiniteQueryConstraints<T> {
  items: T[];
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface InfiniteQueryProps<T>
  extends Pick<UseInfiniteQueryOptions<T>, 'queryKey'> {
  queryFn: (
    pageParam: number,
    queryKey: QueryKey,
  ) => Promise<InfiniteQueryConstraints<T>>;
}

export interface InfiniteQueryReturn<T> {
  data: InfiniteQueryConstraints<T>;
  isError: boolean;
  isEmpty: boolean;
  isLoading: boolean;
  isRefetching: boolean;
  fetchNextPage: () => void;
  refetch: () => void;
}
