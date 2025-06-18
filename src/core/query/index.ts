import { QueryClient } from '@tanstack/react-query';

import type { QueryApi, QueryKey } from '@core/query/interfaces';
import { QueryKeys } from '@shared/enums/queryKeys';

const client = new QueryClient();

function clear() {
  client.clear();
}

function getClient() {
  return client;
}

async function invalidate(queryKey: QueryKey) {
  await client.invalidateQueries({
    queryKey,
  });
}

function remove(queryKey: QueryKey) {
  client.removeQueries({
    queryKey,
  });
}

async function prefetch(queryKey: QueryKey, queryFn: Function) {
  await client.prefetchQuery({
    queryKey,
    queryFn: ({ queryKey }) => queryFn(queryKey),
  });
}

function getData<T>(queryKey: QueryKey): T {
  return client.getQueryData(queryKey) as T;
}

function setData<T>(queryKey: QueryKey, data: (param: T) => T) {
  client.setQueryData(queryKey, data);
}

function getQueriesKeys(prefix: QueryKeys) {
  return client
    .getQueriesData({ queryKey: [prefix] })
    .map(([key]) => key) as QueryKey[];
}

async function cancel(queryKey: QueryKey) {
  await client.cancelQueries({
    queryKey,
  });
}

const Query: QueryApi = {
  getClient,
  invalidate,
  remove,
  prefetch,
  clear,
  getData,
  setData,
  getQueriesKeys,
  cancel,
};

export default Query;
