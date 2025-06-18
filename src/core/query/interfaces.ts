import { QueryKeys } from '@shared/enums/queryKeys';
import type { QueryClient } from '@tanstack/react-query';

export type QueryKey = readonly unknown[];

export interface QueryOptions {
  queryKey: QueryKey;
}

export interface QueryApi {
  clear(): void;
  getClient(): QueryClient;
  invalidate(queryKey: (string | number | QueryKeys)[]): Promise<void>;
  remove(queryKey: (string | number | QueryKeys)[]): void;
  prefetch(queryKey: (string | number | QueryKeys)[], queryFn: Function): void;
  getData<T>(queryKey: (string | number | QueryKeys)[]): T;
  setData<T>(
    queryKey: (string | number | QueryKeys)[],
    data: (param: T) => T,
  ): void;
  getQueriesKeys(prefix: QueryKeys): QueryKey[];
  cancel(queryKey: (string | number | QueryKeys)[]): Promise<void>;
}

export interface QueryProviderProps {
  children: React.ReactNode;
}
